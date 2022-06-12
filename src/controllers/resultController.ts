import { Request, Response } from 'express';

const Match = require('../models/Match');
const Guess = require('../models/Guess');
const Rank = require('../models/Rank');
const ChampionshipTable = require('../models/ChampionshipTable');

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
                let rank = await Rank.findOne({where:{id_jogador:guess.id_jogador, id_campeonato:guess.id_campeonato}});
                await rank.update({
                    pontos: rank.pontos + 1
                });
            }else{
                console.log("Errou!");
            }
        }
        
        // Atualizar tabela de campeonato

        let time_de_casa = await ChampionshipTable.findOne({where: {
            id_time:match.time_a, id_campeonato:guess.id_campeonato
        }});
        let time_de_fora = await ChampionshipTable.findOne({where: {
            id_time:match.time_b, id_campeonato:guess.id_campeonato
        }});

        await time_de_casa.update({
            pontos: time_de_casa.pontos + points_a,
            gols_pro: time_de_casa.gols_pro + gols_a,
            gols_contra: time_de_casa.gols_contra + gols_b,
            saldo: time_de_casa.saldo + (gols_a - gols_b)
        });

        await time_de_fora.update({
            pontos: time_de_fora.pontos + points_b,
            gols_pro: time_de_fora.gols_pro + gols_b,
            gols_contra: time_de_fora.gols_contra + gols_a,
            saldo: time_de_fora.saldo + (gols_b - gols_a)
        });

        // Reprocessar tabela do campeonato
        

        res.status(200);
        res.json({msg: 'Partida atualizada.'})
    } else {
        res.json({ error: 'Partida não existe.' });
    }
}