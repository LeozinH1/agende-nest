import { Alunos as RawAlunos } from '@prisma/client';
import { Alunos } from '../../../../application/entities/alunos';

export class PrismaAlunosMapper {
  static toPrisma(alunos: Alunos) {
    return {
      id: alunos.id,
      nome: alunos.nome,
      updatedAt: alunos.updatedAt,
      createdAt: alunos.createdAt,
    };
  }

  static toDomain(raw: RawAlunos): Alunos {
    return new Alunos(
      {
        nome: raw.nome,
        updatedAt: raw.updatedAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
