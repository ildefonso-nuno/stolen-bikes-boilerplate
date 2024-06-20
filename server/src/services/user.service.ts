import prisma from '../config/db.config';
import { User } from '../models/User.model';

const prisma = new PrismaClient();

async function createUser(username: string, email: string): Promise<User> {
  return await prisma.user.create({
    data: {
      username,
      email,
    },
  });
}

export { createUser };
