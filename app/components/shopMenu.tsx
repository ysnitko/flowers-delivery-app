import Link from 'next/link';
import Image from 'next/image';

export default function ShopMenu() {
  return (
    <ul className="grid grid-cols-2 grid-rows-5 border-l-[1px] border-border-table">
      <li className="flex flex-col items-center justify-center border-b-[1px] border-border-table">
        <p className="text-4xl font-bold">Fresh Flowers</p>
        {/* <Link href="#">Shop now</Link> */}
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
      <li>
        <p>Dried Flowers</p>
        <Link href="#">Shop now</Link>
      </li>

      <li>
        <p>Live Plants</p>
        <Link href="#">Shop now</Link>
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
      <li>
        <p>Aroma Candels</p>
        <Link href="#">Shop now</Link>
      </li>

      <li>
        <p>Fresheners</p>
        <Link href="#">Shop now</Link>
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
  );
}
