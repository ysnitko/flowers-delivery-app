'use server';
import Category from '@/app/components/category';
import { getCategory } from '@/app/lib/actions';

export default async function CategoryPage() {
  const categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[] = await getCategory();

  return <Category categoryName={categoryName} />;
}
