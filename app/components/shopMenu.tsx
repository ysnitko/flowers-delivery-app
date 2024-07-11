'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MENU_LINKS } from '../lib/menuLinks';

interface ShopMenuProps {
  categoryLinks: { id: number; name: string; src: string }[];
}

export default function ShopMenu({ categoryLinks }: ShopMenuProps) {
  // useEffect(() => {
  //   const fetchMenuLinks = async () => {
  //     try {
  //       const res = await fetch('/app/lib/actions.ts');
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMenuLinks();
  // }, []);

  return (
    <div className="relative overflow-scroll scroll-sm border-border-table border-l-[1px]">
      <ul className="grid grid-rows-5 gap-0 absolute [&_li]:border-border-table  w-full [&_img:hover]:scale-125 [&_img:hover]:origin-center [&_img:hover]:transition-transform [&_img:hover]:duration-500 [&_img:hover]:ease-in-out [&_img]:h-full">
        {MENU_LINKS.map((item, index) => (
          <li key={index} className={`grid grid-cols-2`}>
            <div
              className={`flex flex-col  gap-20 justify-center items-center  ${
                item.id % 2 === 0 && 'order-2'
              }`}
            >
              <p className="text-4xl font-bold">{item.name}</p>
              <Link
                href={`/${categoryLinks[index].name}`}
                className={`  ${
                  item.id % 2 === 0
                    ? 'before:content-arrow-left before:mr-2'
                    : 'after:content-arrow-right after:ml-2'
                }  `}
              >
                Shop now
              </Link>
            </div>
            <div className="overflow-hidden">
              <Image
                src={item.src}
                className={`w-full h-full ${item.id % 2 === 0 && 'order-1'} `}
                width={360}
                height={360}
                alt="Item_1"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
