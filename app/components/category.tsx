'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface CategoryProps {
  categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[];
}

export default function Category({ categoryName }: CategoryProps) {
  const path = usePathname();
  console.log(path?.slice(path.lastIndexOf('/') + 1));

  const titleSelection = categoryName.find(
    (item) => item.name === path?.slice(path.lastIndexOf('/') + 1)
  );

  console.log(titleSelection);

  return (
    <div className="grid  grid-cols-2">
      <div className="relative">
        <span className="absolute text-[68px] md:text-[48px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-btn font-semibold  tracking-wider">
          {titleSelection?.title}
        </span>
        <Image
          className="w-full"
          src="/assets/category/fresh_flowers.png"
          width={700}
          height={700}
          alt="fresh"
        />
      </div>
      <div></div>
    </div>
  );
}
