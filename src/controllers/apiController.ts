import { Request, Response } from 'express';
import { User } from '../models/User';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    console.log(req);
    if(req.body.username && req.body.password) {
        let { username, password } = req.body;

        let hasUser = await User.findOne({where: { username }});
        if(!hasUser) {
            let newUser = await User.create({ username, password });

            res.status(201);
            res.json({ id: newUser.id });
        } else {
            res.json({ error: 'Usuário já existe.' });
        }
    }

    res.json({ error: 'Usuário e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.username && req.body.password) {
        let username: string = req.body.username;
        let password: string = req.body.password;

        let user = await User.findOne({ 
            where: { username, password }
        });

        if(user) {
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].username );
    }

    res.json({ list });
}