import { Request, Response } from 'express';

const Guess = require('../models/Guess');

export const create = async (req: Request, res: Response) => {
    if(req.body.id_partida && req.body.id_vencedor) {
        let { id_partida, id_vencedor, id_jogador } = req.body;
        let hasGuess = await Guess.findOne({where:{ id_partida, id_jogador }});

        if(!hasGuess) {
            let newGuess = await Guess.create({ id_partida, id_vencedor, id_jogador });

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
    let guess = await Guess.findAll();

    res.status(200);
    res.json({ Palpites: guess});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let guess = await Guess.findByPk(id);

    if(guess) {
        await guess.update({
            id_partida:req.body.id_partida,
            id_vencedor:req.body.id_vencedor,
            id_jogador:req.body.id_jogador
        });

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
