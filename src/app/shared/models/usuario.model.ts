import { Desafio } from './desafio.model';
export class Usuario {
  constructor(
    id: number,
    username: string,
    password: string,
    rank: number,
    startdata: Date,
    finishdata: Date,
    desafio: Desafio[]
  ){}

  username: string;
  password: string;
  rank: number;
  startdata: Date;
  finishdata: Date;
  desafio: Desafio;
}