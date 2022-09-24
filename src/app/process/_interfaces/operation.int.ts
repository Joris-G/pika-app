export class IOperation {
  id: number;
  name: string;
  revision: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ProcessId: number;
  operationCreatedById: number;
  operationUpdatedById?: number;
  suboperations?: any[];
}

export class ICreateOperation {
  name: string;
  //TODO voir pour changer le backend pour éviter
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ProcessId: number;
}
