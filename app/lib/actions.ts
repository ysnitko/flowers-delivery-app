import { prisma } from './prisma';

export async function getCategory() {
  const category = await prisma.category.findMany();
  return category;
}
