import {NextFunction, Request, Response} from 'express';
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

        const usuarioExists = await usuarioRepository.findOne({where : {username}});

        if(usuarioExists){
            return response.status(409).json({status: 'error', message: 'Username já está sendo utilizado!'});
        }

        const usuario = usuarioRepository.create({name, username, senha});

        await usuarioRepository.save(usuario);    

        return response.status(201).json(usuario);
    },

    async login(request: Request, response: Response){
        const {username, senha} = request.body;

        const usuarioRepositorys = getRepository(Usuario);

        const user = await usuarioRepositorys.findOne({where : {username, senha}});

        if(!user){
            return response.status(401).json({status: 'error', message: 'Incorrect username/password combination'});
        }

        const { id }  = user;

        console.log(id);

        return response.json({id});
    },

    async me(request: Request, response: Response){
        const {username} = request.query;

        console.log(username);

        const usuarioRepositorys = getRepository(Usuario);

        const user = await usuarioRepositorys.findOne({where : {username: 'teste'}});

        if (!user) {
            return response
            .status(400)
            .json({ error: true, message: 'User not found.' });
        }

        const {id, name} = user;

        console.log(id, name);

        return response.json({
            id,
            name,
            username: 'teste'
        })
    }
}