import { randomUUID } from 'node:crypto';
import { Replace } from '../../helpers/Replace';

export interface AlunosProps {
  nome: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Alunos {
  private _id: string;
  private props: AlunosProps;

  constructor(
    props: Replace<AlunosProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set nome(nome: string) {
    this.props.nome = nome;
  }

  public get nome(): string {
    return this.props.nome;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
