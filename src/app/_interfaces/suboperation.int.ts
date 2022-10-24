export interface ISubOperation {
  name: string;
  order: number;
  // TODO voir le back pour éviter
  // eslint-disable-next-line @typescript-eslint/naming-convention
  OperationId: number;
}

export interface ICreateSubOperation {
  name: string;
  order?: number;
  // TODO voir le back pour éviter
  // eslint-disable-next-line @typescript-eslint/naming-convention
  OperationId: number;
}


