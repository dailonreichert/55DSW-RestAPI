import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Contato from '../models/Contato';

export default {
    async index(request: Request, response: Response){
        const {name, id_contato,id_usuario} = request.query;

        const contatoRepository = getRepository(Contato);

        let contatos = [];

        if(name){
            contatos = await contatoRepository.find({where: {name, id_usuario}});
        }
        else if(id_contato){
            contatos = await contatoRepository.find({where: {id_usuario, id: id_contato}});
        }
        else{
            contatos = await contatoRepository.find({where: {id_usuario}});
        }

        return response.status(201).json(contatos);
    }, 

    async create(request: Request, response: Response){
        const {name, fone, email, id_usuario} = request.body;

        console.log(name, fone, email, id_usuario);

        const contatoRepository = getRepository(Contato);

        const contato = contatoRepository.create({name, fone, email, id_usuario});

        await contatoRepository.save(contato);    

        return response.status(201).json(contato);
    },

    async update(request: Request, response: Response){
        const {id} = request.params;
        const {name, fone, email, id_usuario} = request.body;

        const contatoRepository = getRepository(Contato);

        let contato = await contatoRepository.findOne({where: {id: id, id_usuario: id_usuario}});

        console.log(contato);

        if(contato){
            contato.name = name;
            contato.fone = fone;
            contato.email = email;
            contato.id_usuario = id_usuario;

            await contatoRepository.save(contato);

            return response.status(201).json(contato);
        }

        return response.status(404).json({ message: `Não foi encontrado nenhum contato com o código ${id}!`});
    }
}