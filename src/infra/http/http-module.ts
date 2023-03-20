import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infra/database/database.module';

import { CreateAluno } from '../../application/use-cases/create-aluno';
import { AlunosController } from './controllers/alunos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AlunosController],
  providers: [CreateAluno],
})
export class HttpModule {}
