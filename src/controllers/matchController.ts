import { Request, Response } from 'express';

const Match = require('../models/Match');

export const create = async (req: Request, res: Response) => {
    if(req.body.name) {
        let { name } = req.body;
        let hasMatch = await Match.findOne({where: { name }});

        if(!hasMatch) {
            let newMatch = await Match.create({ name });

            res.status(201);
            res.json({ msg: "Cadastrado com sucesso", id: newMatch.id });
        } else {
            res.json({ error: 'Time já existe.' });
        }
    }else {
        res.json({ error: 'Nome do time não enviado.' });
    }
}

export const list = async (req: Request, res: Response) => {
    let Matchs = await Match.findAll();

    res.status(200);
    res.json({ Matchs: Matchs});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let match = await Match.findByPk(id);

    if(match) {
        Match.name = req.body.name;

        await Match.save();

        res.status(200);
        res.json({msg: 'Time atualizado.'})
    } else {
        res.json({ error: 'Time já existe.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Match.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
