import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Usuario from '../models/Usuario';

export default {
    async index(request: Request, response: Response){
        const usuarioRepository = getRepository(Usuario);

        const usuarios = await usuarioRepository.find();

        return response.status(201).json(usuarios);
    }, 

    async create(request: Request, response: Response){
        const {name, username, senha} = request.body;

        const usuarioRepository = getRepository(Usuario);

        const usuario = usuarioRepository.create({name, username, senha});

        await usuarioRepository.save(usuario);    

        return response.status(201).json(usuario);
    },

    async login(request: Request, response: Response){
        const {username, senha} = request.body;

        const usuarioRepository = getRepository(Usuario);

        const usuario = await usuarioRepository.findOne({where : {username, senha}});

        if(!usuario){
            return response.status(401).json({status: 'error', message: 'Incorrect username/password combination'});
        }

        return response.status(201).json(usuario);
    }
}