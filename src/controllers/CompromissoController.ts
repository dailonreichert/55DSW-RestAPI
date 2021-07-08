import {Request, Response} from 'express';
import {Between, getRepository} from 'typeorm';
import Compromisso from '../models/Compromisso';

export default {
    async index(request: Request, response: Response){
        const {id_contato, id_usuario, data_inicial, data_final} = request.query;

        if(!id_contato && !id_usuario){
            return response.status(404).json({ message: 'É preciso passar o código do usuário e do contato para fazer a consulta'});
        }

        const compromissoRepository = getRepository(Compromisso);

        let compromisso = [];

        if(data_inicial && data_final){
            compromisso = await compromissoRepository.find({where: {id_contato: id_contato, id_usuario: id_usuario, data: Between(data_inicial, data_final)}});
        }
        else{
            compromisso = await compromissoRepository.find({where: {id_contato: id_contato, id_usuario: id_usuario}});
        }

        return response.status(201).json(compromisso);
    }, 

    async create(request: Request, response: Response){
        const {descricao, local, data, id_usuario, id_contato} = request.body;

        const compromissoRepository = getRepository(Compromisso);

        const compromisso = compromissoRepository.create({descricao, local, data, id_usuario, id_contato});

        await compromissoRepository.save(compromisso);    

        return response.status(201).json(compromisso);
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const {id_usuario, id_contato} = request.query;

        const compromissoRepository = getRepository(Compromisso);

        const compromisso = await compromissoRepository.find({where: {id}});

        console.log(compromisso);

        if(!compromisso.length){
            return response.status(404).json({ message: `Nenhum compromisso com o código ${id} encontrado!`});
        }

        //await compromissoRepository.delete(id);
        await compromissoRepository.delete({id: Number(id), id_usuario: Number(id_usuario), id_contato: Number(id_contato)});

        return response.status(201).json(true);
    }


}