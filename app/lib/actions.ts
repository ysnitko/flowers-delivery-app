import { prisma } from './prisma';

export async function getCategory() {
  const category = await prisma.category.findMany();
  return category;
}

export async function getProductsFromCategory(category: any) {
  const productsCategory = await prisma.product.findMany({
    where: {
      productId: category.id,
    },
  });
  return productsCategory;
}

export async function getProduct(product: any) {
  const productsCategory = await prisma.product.findMany({
    where: {
      name: product.name,
    },
  });
  return productsCategory;
}
