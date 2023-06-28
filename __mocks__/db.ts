import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

faker.seed(123);

export const johnId = "bb463b8b-b76c-4f6a-a972-665ab5730b69";

export const db = factory({
  // Create a "user" model,
  user: {
    // ...with these properties and value getters.
    id: primaryKey(faker.string.uuid),
    firstName: faker.person.firstName,
    lastName: faker.person.lastName,
  },
  post: {
    id: primaryKey(faker.string.uuid),
    author: oneOf("user"),
    title: faker.company.buzzPhrase,
    content: () => faker.lorem.sentences({ min: 10, max: 20 }),
    likes: manyOf("user"),
  },
});

export function seedDb() {
  const john = db.user.create({
    id: johnId,
    firstName: "John",
    lastName: "Doe",
  });
  const randomUsers = Array.from(new Array(5)).map(() => db.user.create());

  const johnsPosts = [
    db.post.create({ author: john, likes: [randomUsers[0], randomUsers[1]] }),
    db.post.create({ author: john, likes: [randomUsers[2], randomUsers[3]] }),
    db.post.create({ author: john, likes: [] }),
  ];
}
