import { Request, Response } from 'express';
import { Championship } from '../models/Championship';

export const criar = async (req: Request, res: Response) => {
    if(req.body.name && req.body.edition) {
        let { name, edition } = req.body;
        let hasChampionship = await Championship.findOne({where: { name, edition }});

        if(!hasChampionship) {
            let newChampionship = await Championship.create({ name, edition });

            res.status(201);
            res.json({ id: newChampionship.id });
        } else {
            res.json({ error: 'Campeonato já existe.' });
        }
    }else {
        res.json({ error: 'Campeonato e/ou edição não enviados.' });
    }
}

export const ler = async (req: Request, res: Response) => {

}

export const atualizar = async (req: Request, res: Response) => {
    
}

export const deletar = async (req: Request, res: Response) => {
    
}
