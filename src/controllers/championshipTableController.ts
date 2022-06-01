import { Request, Response } from 'express';

const ChampionshipTable = require('../models/ChampionshipTable');

export const create = async (req: Request, res: Response) => {
    if(req.body.id_time && req.body.id_campeonato) {
        let { id_time, id_campeonato, pontos, vitorias, derrotas, empates, partidas, gols_pro, gols_contra } = req.body;
        let hasChampionshipTable = await ChampionshipTable.findOne({where: { id_time, id_campeonato }});

        if(!hasChampionshipTable) {
            let newChampionshipTable = await ChampionshipTable.create({ id_time, id_campeonato, pontos, vitorias, derrotas, empates, partidas, gols_pro, gols_contra, saldo:0, posicao:0 });

            res.status(201);
            res.json({ msg: "Cadastrado com sucesso", id: newChampionshipTable.id });
        } else {
            res.json({ error: 'O time já existe no campeonato informado.' });
        }
    }else {
        res.json({ error: 'Campeonato e/ou time não enviados.' });
    }
}

export const list = async (req: Request, res: Response) => {
    let ChampionshipTables = await ChampionshipTable.findAll();

    res.status(200);
    res.json({ ChampionshipTables: ChampionshipTables});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let championshipTable = await ChampionshipTable.findByPk(id);

    if(championshipTable) {
        await championshipTable.update({
            pontos:req.body.pontos, 
            vitorias:req.body.vitorias, 
            derrotas:req.body.derrotas, 
            empates:req.body.empates, 
            partidas:req.body.partidas, 
            gols_pro:req.body.gols_pro, 
            gols_contra:req.body.gols_contra,
            saldo:req.body.gols_pro - req.body.gols_contra
        });

        res.status(200);
        res.json({msg: 'Tabela de Campeonato atualizada.'})
    } else {
        res.json({ error: 'Time não faz parte do campeonato.' });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await ChampionshipTable.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
