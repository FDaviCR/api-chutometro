import { Request, Response } from 'express';
const Team = require('../models/Team');

export const create = async (req: Request, res: Response) => {
    if(req.body.name) {
        let { name } = req.body;
        let hasTeam = await Team.findOne({where: { name }});

        if(!hasTeam) {
            let newTeam = await Team.create({ name });

            res.status(201);
            res.json({ msg: "Cadastrado com sucesso", id: newTeam.id });
        } else {
            res.json({ error: 'Time já existe.' });
        }
    }else {
        res.json({ error: 'Nome do time não enviado.' });
    }
}

export const list = async (req: Request, res: Response) => {
    let Teams = await Team.findAll();

    res.status(200);
    res.json({ Teams: Teams});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let team = await Team.findByPk(id);

    if(team) {
        team.name = req.body.name;

        await team.save();

        res.status(200);
        res.json({msg: 'Time atualizado.'})
    } else {
        res.json({ error: 'Time já existe.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Team.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
