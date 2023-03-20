import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AlunosRepository } from 'src/application/repositories/alunos-repository';
import { PrismaAlunosRepository } from './prisma/repositories/prisma-alunos-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AlunosRepository,
      useClass: PrismaAlunosRepository,
    },
  ],
  exports: [AlunosRepository],
})
export class DatabaseModule {}
