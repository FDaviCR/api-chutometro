import { Request, Response } from 'express';

const Match = require('../models/Match');

export const create = async (req: Request, res: Response) => {
    if(req.body.teama && req.body.teamb) {
        let { teama, teamb, goalsteama, goalsteamb } = req.body;
        let hasMatch = await Match.findOne({where:{ teama, teamb }});

        if(!hasMatch) {
            let newMatch = await Match.create({ teama, teamb, goalsteama, goalsteamb });

            res.status(201); 
            res.json({ msg: "Cadastrado com sucesso", id: newMatch.id });
        } else {
            res.json({ error: 'Partida já existe.' });
        }
    }else {
        res.json({ error: 'Time(s) não enviado(s).' });
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
        await match.update({
            teama:req.body.teama,
            teamb:req.body.teamb,
            goalsteama:req.body.goalsteama,
            goalsteamb:req.body.goalsteamb
        });

        res.status(200);
        res.json({msg: 'Partida atualizada.'})
    } else {
        res.json({ error: 'Partida não existe.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Match.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
