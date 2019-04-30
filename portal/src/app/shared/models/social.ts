import { Facebook } from './facebook';
import { LinkedIn } from './linkedIn';
import { Instagram } from './instagram';

export interface Social {
  name: string;
  createdAt: number;
  createdBt: string;
  facebook: Facebook;
  linkedIn: LinkedIn;
  instagram: Instagram;
}
