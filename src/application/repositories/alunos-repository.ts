import { Alunos } from '../entities/alunos';

export abstract class AlunosRepository {
  abstract create(aluno: Alunos): Promise<void>;
}
