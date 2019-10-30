import { Desafio } from './desafio.model';
import { Anime } from './anime.model';
export class Usuario {
  constructor(
    id: number,
    username: string,
    password: string,
    rank: number,
    startdata: Date,
    finishdata: Date,
    desafio: Desafio,
    list: Anime[]
  ){}

  username: string;
  password: string;
  rank: number;
  startdata: Date;
  finishdata: Date;
  desafio: Desafio;
  list: Anime[];
}