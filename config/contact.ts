export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
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
    github: 'https://github.com/yourgithubusername', // Add a GitHub link
    linkedin: 'https://www.linkedin.com/in/isilayaydiin/',
    twitter: 'fillit',
    youtube: 'https://www.youtube.com/yourchannel', // Add a YouTube link
    email: 'mailto:isilay.aydiin@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/fillit',
  },
};
