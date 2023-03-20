import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { AlunosRepository } from '../../../../application/repositories/alunos-repository';
import { Alunos } from 'src/application/entities/alunos';
import { PrismaAlunosMapper } from '../mappers/prisma-alunos-mapper';

@Injectable()
export class PrismaAlunosRepository implements AlunosRepository {
  constructor(private prisma: PrismaService) {}

  async create(aluno: Alunos): Promise<void> {
    const raw = PrismaAlunosMapper.toPrisma(aluno);

    await this.prisma.alunos.create({
      data: raw,
    });
  }
}
