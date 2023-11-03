import { IPokemon } from "./pokemon.interface";

export interface IResponseRepositoryWS {
  value: IPokemon[],
  formatters: any[],
  contentTypes: any[],
  declaredType: string,
  statusCode: number;
}
