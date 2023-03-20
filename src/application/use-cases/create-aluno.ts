import { Injectable } from '@nestjs/common';
import { AlunosRepository } from '../repositories/alunos-repository';
import { Alunos } from '../entities/alunos';

interface CreateAlunoRequest {
  nome: string;
}

interface CreateAlunoResponse {
  aluno: Alunos;
}

@Injectable()
export class CreateAluno {
  constructor(private alunosRepository: AlunosRepository) {}

  async execute(request: CreateAlunoRequest): Promise<CreateAlunoResponse> {
    const { nome } = request;

    const aluno = new Alunos({
      nome,
    });

    await this.alunosRepository.create(aluno);

    return { aluno };
  }
}
