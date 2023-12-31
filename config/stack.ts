import { Colors } from './colors';

export enum Stack {
  // Languages
  SQL,
  Agile,
  Project_management,
  Testing

  /* // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform, */
}

export const WorkStack = [
  Stack.SQL,
  Stack.Project_management,
  Stack.Agile,
  Stack.Testing,
  /* Stack.aws,
  Stack.gcp,
  Stack.kubernetes,
  Stack.docker,
  Stack.terraform,
  Stack.nats,
  Stack.kafka,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
  Stack.arangodb, */
  // Stack.reactnative,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.Project_management]: {
    value: 'Project Management',
    color: Colors.Project_management,
  },
  [Stack.Testing]: {
    value: 'Testing',
    color: Colors.Testing,
  },
  [Stack.SQL]: {
    value: 'SQL',
    color: Colors.SQL,
  },
  [Stack.Agile]: {
    value: 'Agile',
    color: Colors.Agile,
  },
  /* [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  }, */
};
