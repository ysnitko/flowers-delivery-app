'use server';
import Category from '@/app/components/category';
import { getCategory } from '@/app/lib/actions';
import { getProductsFromCategory } from '@/app/lib/actions';

export default async function CategoryPage() {
  const categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[] = await getCategory();
  // console.log(categoryName);

  const categoryProducts: {
    id: number;
    name: string;
    src: string;
    title: string | null;
    description: string;
    price: number;
  }[] = await getProductsFromCategory(categoryName);
  // console.log(categoryProducts);

  return (
    <Category categoryName={categoryName} categoryProducts={categoryProducts} />
  );
}
