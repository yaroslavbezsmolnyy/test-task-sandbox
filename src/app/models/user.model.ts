import { Entity } from '@models/_base.model';

export class User extends Entity {
  id: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}
