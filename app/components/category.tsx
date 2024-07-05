'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface CategoryProps {
  categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[];
  categoryProducts: {
    id: number;
    name: string;
    src: string;
    title: string | null;
    description: string;
    price: number;
  }[];
}

export default function Category({
  categoryName,
  categoryProducts,
}: CategoryProps) {
  const path = usePathname();
  const titleSelection = categoryName.find(
    (item) => item.name === path?.slice(path.lastIndexOf('/') + 1)
  );

  return (
    <div className="grid grid-cols-2">
      <div className="relative max-h-[700px]">
        <p
          className="absolute text-[68px] md:text-[48px] 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         text-text-btn font-semibold tracking-wider"
        >
          {titleSelection?.title}
        </p>
        <Image
          className="w-full h-full"
          src="/assets/category/fresh_flowers.png"
          width={700}
          height={700}
          alt="fresh"
        />
      </div>
      <div className="relative overflow-hidden overflow-y-scroll">
        <ul className="grid grid-cols-2 absolute [&_li]:border-border-table [&_li:nth-child(2n+1))]:border-l-[1px] [&_li:nth-child(n)]:border-r-[1px] [&_li]:border-b-[1px] [&_li:nth-last-child(-n+2)]:border-b-[0px] ">
          {categoryProducts.map((product) => (
            <li key={product.id} className="relative">
              <Link href="/">
                <Image
                  src={product.src}
                  alt={product.name}
                  width={360}
                  height={360}
                />
                <div className="absolute flex flex-col gap-0 items-center justify-center bottom-3 left-1/2 -translate-x-1/2">
                  <span className="text-base">{product.title}</span>
                  <span className="text-sm text-text-footer">
                    price {product.price}$
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
