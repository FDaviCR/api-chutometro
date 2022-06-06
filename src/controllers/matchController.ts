import { Request, Response } from 'express';
import { Op } from "sequelize";

const Match = require('../models/Match');

export const create = async (req: Request, res: Response) => {
    if(req.body.time_a && req.body.time_b) {
        let { time_a, time_b, rodada, id_campeonato } = req.body;
        let hasMatch = await Match.findOne({where:{ time_a, time_b, rodada, id_campeonato }});

        if(!hasMatch) {
            let newMatch = await Match.create({ time_a, time_b, rodada, id_campeonato, processado: false });

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
    let { time_a, time_b, gols_a, gols_b, rodada, id_campeonato } = req.body;
    let match = await Match.findByPk(id);

    if(match) {
        let exists = await Match.findOne({
            where:{ 
                rodada:rodada,
                [Op.or]:[
                    {
                        time_a:{[Op.or]:[time_a, time_b]}
                    },
                    {
                        time_b:{[Op.or]:[time_b, time_a]}
                    }
                ],
                id_campeonato:id_campeonato
            }
        });

        if(!exists) {
            let existsMatch = await Match.findAll({where:{ time_a, time_b, id_campeonato }});
            if(!existsMatch){
                await match.update({
                    time_a:time_a,
                    time_b:time_b,
                    gols_a:gols_a,
                    gols_b:gols_b,
                    processado: false
                });
        
                res.status(200);
                res.json({msg: 'Partida atualizada.'})
            }else{
                res.json({ error: `Uma partida entre esses clubes já existe no campeonato atual` });
            }
            
        }else{
            res.json({ error: `Uma ou as duas equipes já tem partida registrada na rodada ${rodada}.` });
        }
    } else {
        res.json({ error: `Partida com ID: ${rodada} não existe.` });
    }
}

export const destroy = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Match.destroy({ where:{ id } });
    res.status(204);
    res.json({ msg: "Excluido com sucesso"})
}
