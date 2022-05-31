import { Request, Response } from 'express';

const User = require('../models/User');

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const create = async (req: Request, res: Response) => {
    if(req.body.usuario && req.body.senha) {
        let { usuario, senha } = req.body;
        let hasUser = await User.findOne({where: { usuario }});

        if(!hasUser) {
            let newUser = await User.create({ usuario, senha });

            res.status(201);
            res.json({ id: newUser.id });
        } else {
            res.json({ error: 'Usuário já existe.' });
        }
    }else {
        res.json({ error: 'Usuário e/ou senha não enviados.' });
    }
}

export const read = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].usuario );
    }

    res.json({ list });
}