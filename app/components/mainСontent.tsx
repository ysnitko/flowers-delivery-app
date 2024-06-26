import Image from 'next/image';
import ShopMenu from './shopMenu';

interface MainContentsProps {
  categoryLinks: { id: number; name: string; src: string }[];
}

export default function MainСontent({ categoryLinks }: MainContentsProps) {
  return (
    <div className="grid grid-cols-2 border-b-[1px] border-r-[1px] border-border-table h-screen">
      <div className="flex flex-col p-[80px]">
        <div className="flex flex-col gap-4 border-b-[1px] border-border-table">
          <p className="text-[67px] leading-[70px]">
            Kyiv
            <br /> LuxeBouquet
            <span className="relative">
              s
              <span className="text-3xl absolute left-4 top-1 font-bold">
                &reg;
              </span>
            </span>
          </p>
          <p className="mb-[54px]">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our
            <span className="italic">Online Flower Delivery Service</span>
          </p>
        </div>
        <div className="grid grid-cols-2 pt-6 ">
          <Image
            src="/assets/imghero.png"
            className="w-full pr-6 "
            alt="img-hero"
            width={256}
            height={256}
          />
          <p className="flex items-end text-xs pl-6 border-l-[1px] border-border-table">
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
      <ShopMenu categoryLinks={categoryLinks} />
    </div>
  );
}
