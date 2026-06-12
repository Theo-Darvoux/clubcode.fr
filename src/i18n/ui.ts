import { fr } from './fr';
import { en } from './en';

export type Lang = 'fr' | 'en';

export const ui = {
  fr,
  en,
} as const;

export const links = {
  discord: 'https://discord.clubcode.fr',
  intellect: 'https://intellect.clubcode.fr',
  github: 'https://github.com/orgs/club-code/',
  tsp: 'https://www.telecom-sudparis.eu',
  minet: 'https://minet.net',
};
