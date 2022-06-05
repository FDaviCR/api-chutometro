import { Request, Response } from 'express';

const Match = require('../models/Match');
const Guess = require('../models/Guess');

export const list = async (req: Request, res: Response) => {
    let Matchs = await Match.findAll();

    res.status(200);
    res.json({ Matchs: Matchs});
}

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { time_a, time_b, gols_a, gols_b } = req.body;
    let match = await Match.findByPk(id);

    if(match) {
        await match.update({
            time_a:time_a,
            time_b:time_b,
            gols_a:gols_a,
            gols_b:gols_b
        });

        // Atualizar palpites baseado no resultado
        let guess = await Guess.findAll({ where:{id_partida:id}}) 

        let winner = () =>{
            if(gols_a > gols_b){
                return time_a;
            }else if(gols_b > gols_a){
                return time_b;
            }else{
                return 0;
            }
        }

        for(let i = 0; i < guess.length; i++) {
            if(guess.id_vencedor == winner){
                console.log("Acertou");
            }else{
                console.log("Errou!");
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
