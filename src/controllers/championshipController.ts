import { Request, Response } from 'express';
import { Championship } from '../models/Championship';

export const create = async (req: Request, res: Response) => {
    if(req.body.name && req.body.edition) {
        let { name, edition } = req.body;
        let hasChampionship = await Championship.findOne({where: { name, edition }});

        if(!hasChampionship) {
            let newChampionship = await Championship.create({ name, edition });

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
    
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Championship.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
