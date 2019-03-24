import { Social } from './social';

export interface Tenant {
  name: string;
  users: string[];
  social: Social[];
}
