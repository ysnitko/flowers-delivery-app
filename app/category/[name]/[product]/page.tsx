'use server';
import Product from '@/app/components/product';
import { getProduct } from '@/app/lib/actions';

export default async function ProductPage() {
  // const chooseProduct: {
  //   id: number;
  //   name: string;
  //   src: string;
  //   srcCover: string;
  //   title: string | null;
  //   description: string;
  //   price: number;
  // }[] = await getProduct(categoryName);
  return (
    <div>
      <Product />
    </div>
  );
}
