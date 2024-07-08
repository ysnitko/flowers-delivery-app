'use server';
import Product from '@/app/components/product';
import { prisma } from '@/app/lib/prisma';
import { getCategory, getCombinations } from '@/app/lib/actions';

export default async function ProductPage() {
  const chooseProduct: {
    id: number;
    name: string;
    src: string;
    srcCover: string;
    title: string | null;
    description: string;
    price: number;
    productId: number | null;
  }[] = await prisma.product.findMany();

  const categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[] = await getCategory();

  const combination = async (productId: any) => {
    const comb = await getCombinations(productId);

    return comb;
  };

  return (
    <Product
      chooseProduct={chooseProduct}
      categoryName={categoryName}
      combination={combination}
    />
  );
}
