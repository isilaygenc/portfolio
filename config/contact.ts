export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@fillit',
  site: 'fillit',
  links: {
    linkedin: 'https://www.linkedin.com/in/isilayaydiin/',
    twitter: 'fillit',
    email: 'mailto:isilay.aydiin@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/fillit',
  },
};
