import { IOperation } from './operation.int';
import { IUser } from './user.int';

export class IProcess {
  id: number;
  revision: number;
  processStatus: string;
  article: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  // TODO dans le backend faire en sorte que les propriétés soient en camelcase
  processCreatedById: number;
  processUpdatedById: number;
  operations: IOperation[];
  processCreatedBy: IUser;
  processUpdatedBy: IUser;
}

export interface ICreateProcess {
  article: string;
}
