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

export async function getCombinations(productId: number) {
  const productCombination = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      Combination: true,
    },
  });
  return productCombination?.Combination || [];
}
