import { Request, Response } from 'express';

const Match = require('../models/Match');
const Guess = require('../models/Guess');

export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { gols_a, gols_b } = req.body;
    let match = await Match.findByPk(id);

    if(match) {
        await match.update({
            gols_a:gols_a,
            gols_b:gols_b
        });

        // Atualizar palpites baseado no resultado
        let guess = await Guess.findAll({ where:{id_partida:id}}) 

        let winner: number = 0;
        let points_a: number = 0;
        let points_b: number = 0;

        if(gols_a > gols_b){
            winner = match.time_a;
            points_a = 3;
        }else if(gols_b > gols_a){
            winner = match.time_b;
            points_b = 3;
        }else{
            winner = 0;
            points_a = 1;
            points_b = 1;
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
