import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword',
  };

  await db.insert(users).values(user);
  console.log('New user created!');

  const allUsers = await db.select().from(users);
  console.log('Getting all users from the database: ', allUsers);

  await db.update(users).set({ name: 'Johnathon Doe' }).where(eq(users.email, user.email));
  console.log('User info updated!');

  await db.delete(users).where(eq(users.email, user.email));
  console.log('User deleted!');
}

main();
