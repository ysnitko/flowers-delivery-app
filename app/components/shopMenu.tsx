import Link from 'next/link';
import Image from 'next/image';

export default function ShopMenu() {
  return (
    <div className="relative overflow-scroll">
      <ul className="grid grid-cols-2 grid-rows-5 gap-0 absolute [&_li]:border-border-table">
        <li className="flex flex-col items-center justify-end border-l-[1px] border-b-[1px] ">
          <div className=" flex flex-col h-[60%] gap-20  items-center">
            <p className="text-4xl font-bold">Fresh Flowers</p>
            <Link href="#" className="after:content-arrow-right after:ml-2">
              Shop now
            </Link>
          </div>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/card_item_1.png"
              width={360}
              height={360}
              alt="Item_1"
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/card_item_2.png"
              width={360}
              height={360}
              alt="Item_1"
            />
          </Link>
        </li>
        <li className="flex flex-col items-center justify-end  border-l-[1px] border-b-[1px] ">
          <div className=" flex flex-col h-[60%] gap-10  items-center">
            <p className="text-4xl font-bold">Dried Flowers</p>
            <Link href="#" className="before:content-arrow-left before:mr-2">
              Shop now
            </Link>
          </div>
        </li>

        <li className="flex flex-col items-center justify-end  border-l-[1px] border-b-[1px]">
          <div className=" flex flex-col h-[60%] gap-10  items-center">
            <p className="text-4xl font-bold">Live Plants</p>
            <Link href="#" className="after:content-arrow-right after:ml-2">
              Shop now
            </Link>
          </div>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/card_item_3.png"
              width={360}
              height={360}
              alt="Item_1"
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/card_item_4.png"
              width={360}
              height={360}
              alt="Item_1"
            />
          </Link>
        </li>
        <li className="flex flex-col items-center justify-end  border-l-[1px] border-b-[1px]">
          <div className=" flex flex-col h-[60%] gap-10  items-center">
            <p className="text-4xl font-bold">Aroma Candels</p>
            <Link href="#" className="before:content-arrow-left before:mr-2">
              Shop now
            </Link>
          </div>
        </li>

        <li className="flex flex-col items-center justify-end border-l-[1px] ">
          <div className=" flex flex-col h-[60%] gap-10  items-center">
            <p className="text-4xl font-bold">Fresheners</p>
            <Link href="#" className="after:content-arrow-right after:ml-2">
              Shop now
            </Link>
          </div>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/card_item_5.png"
              width={360}
              height={360}
              alt="Item_1"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
