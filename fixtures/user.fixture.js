import { faker } from '@faker-js/faker';

export const userData = {
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
};
