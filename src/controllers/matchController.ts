import { Request, Response } from 'express';

const Match = require('../models/Match');
const Guess = require('../models/Guess');

export const create = async (req: Request, res: Response) => {
    if(req.body.time_a && req.body.time_b) {
        let { time_a, time_b, gols_a, gols_b } = req.body;
        let hasMatch = await Match.findOne({where:{ time_a, time_b }});

        if(!hasMatch) {
            let newMatch = await Match.create({ time_a, time_b, gols_a, gols_b });

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
            time_a:req.body.time_a,
            time_b:req.body.time_b,
            gols_a:req.body.gols_a,
            gols_b:req.body.gols_b
        });

        // Atualizar palpites baseado no resultado
        let guess = await Guess.findAll({ where:{id_partida:id}}) 

        let winner = () =>{
            if(req.body.gols_a > req.body.gols_b){
                return 
            }if else(){

            }else{
                return 0;
            }
        }

        // Atualizar tabela de palpites

        // Atualizar tabela de campeonato

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
