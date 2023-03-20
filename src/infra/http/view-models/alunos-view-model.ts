import { Alunos } from '../../../application/entities/alunos';

export class AlunosViewModel {
  static toHTTP(aluno: Alunos) {
    return {
      id: aluno.id,
      nome: aluno.nome,
    };
  }
}
