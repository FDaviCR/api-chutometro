import { Request, Response } from 'express';

const User = require('../models/User');

export const login = async (req: Request, res: Response) => {
    if(req.body.usuario && req.body.senha) {
        let usuario: string = req.body.usuario;
        let senha: string = req.body.senha;

        let user = await User.findOne({ 
            where: { usuario, senha }
        });

        if(user) {
            res.json({ status: true });
            return;
        }
    }else{
        res.json({ status: false });
    }
}