import { Request, Response } from 'express';

const Guess = require('../models/Guess');

export const create = async (req: Request, res: Response) => {
    if(req.body.idjogo && req.body.idvencedor) {
        let { idjogo, idvencedor, idjogador } = req.body;
        let hasGuess = await Guess.findOne({where:{ idjogo, idjogador }});

        if(!hasGuess) {
            let newGuess = await Guess.create({ idjogo, idvencedor, idjogador });

            res.status(201); 
            res.json({ msg: "Cadastrado com sucesso", id: newGuess.id });
        } else {
            res.json({ error: 'Palpite já existe.' });
        }
    }else {
        res.json({ error: 'Dados não enviados.' });
    }
}

export const list = async (req: Request, res: Response) => {
    let Guesss = await Guess.findAll();

    res.status(200);
    res.json({ Palpites: Guesss});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let Guesss = await Guess.findByPk(id);

    if(Guesss) {
        Guess.teama = req.body.teama;
        Guess.teamb = req.body.teamb;
        Guess.goalsteama = req.body.goalsteama;
        Guess.goalsteamb = req.body.goalsteamb;

        await Guess.save();

        res.status(200);
        res.json({msg: 'Palpite atualizada.'})
    } else {
        res.json({ error: 'Palpite não existe.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Guess.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
