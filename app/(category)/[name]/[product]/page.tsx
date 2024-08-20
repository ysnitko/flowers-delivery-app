'use server';
import Product from '@/app/components/product';
import { prisma } from '@/app/lib/prisma';
import { getCategory, getCombinations } from '@/app/lib/actions';
import Layout from './layout';
// import './page.css';

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
    Combination: {
      id: number;
      name: string;
      src: string;
      srcCover: string;
      title: string | null;
      description: string;
      price: number;
      productId: number | null;
    }[];
  }[] = await prisma.product.findMany({
    include: {
      Combination: true,
    },
  });

  const categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[] = await getCategory();

  // const productId = chooseProduct.find((item)=> item.name === )

  const combinationProduct: any = await getCombinations();

  return (
    <Layout>
      <Product chooseProduct={chooseProduct} categoryName={categoryName} />
      <p className="w-full py-20 text-4xl text-center border-t-[1px] border-r-[1px] border-l-[1px] border-black">
        You may also like…
      </p>
    </Layout>
  );
}
