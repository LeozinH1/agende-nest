import { IsNotEmpty, Length } from 'class-validator';

export class CreateAlunoBody {
  @IsNotEmpty()
  @Length(3, 20)
  nome: string;
}
