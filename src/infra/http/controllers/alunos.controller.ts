import { Controller, Post, Body } from '@nestjs/common';
import { CreateAluno } from '../../../application/use-cases/create-aluno';
import { CreateAlunoBody } from '../dtos/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private createAluno: CreateAluno) {}

  @Post()
  async create(@Body() body: CreateAlunoBody) {
    const { nome } = body;

    const { aluno } = await this.createAluno.execute({
      nome,
    });

    return { aluno: aluno };
  }
}
