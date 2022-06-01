import { Request, Response } from 'express';

const Championship = require('../models/Championship');

export const create = async (req: Request, res: Response) => {
    if(req.body.campeonato && req.body.edicao) {
        let { campeonato, edicao } = req.body;
        let hasChampionship = await Championship.findOne({where: { campeonato, edicao }});

        if(!hasChampionship) {
            let newChampionship = await Championship.create({ campeonato, edicao });

            res.status(201);
            res.json({ msg: "Cadastrado com sucesso", id: newChampionship.id });
        } else {
            res.json({ error: 'Campeonato já existe.' });
        }
    }else {
        res.json({ error: 'Campeonato e/ou edição não enviados.' });
    }
}

export const list = async (req: Request, res: Response) => {
    let championships = await Championship.findAll();

    res.status(200);
    res.json({ championships: championships});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let championship = await Championship.findByPk(id);

    if(championship) {
        await championship.update({
            campeonato:req.body.campeonato,
            edicao:req.body.edicao
        });

        res.status(200);
        res.json({msg: 'Campeonato atualizado.'})
    } else {
        res.json({ error: 'Campeonato já existe.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Championship.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
