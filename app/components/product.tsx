'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Quantity from './quantity';
import CarouselProducts from './carouselProducts';

interface ProductProps {
  chooseProduct: {
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
  }[];
  categoryName: {
    id: number;
    name: string;
    src: string;
    title: string | null;
  }[];
}

export default function Product({ chooseProduct, categoryName }: ProductProps) {
  const path = usePathname();
  const pathSegment = path?.split('/')[1];
  const productSelection = chooseProduct.find(
    (item) => item.name === path?.slice(path.lastIndexOf('/') + 1)
  );
  const categorySelection = categoryName.find(
    (item) => item.name === pathSegment
  );

  return (
    <div className="grid grid-cols-2 border-border-table border-l-[1px] border-r-[1px]">
      <div className="relative max-h-[700px] ">
        <p
          className="absolute text-[68px] md:text-[48px]
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         text-text-btn font-semibold tracking-wider"
        >
          {productSelection?.title}
        </p>
        <Image
          className="w-full h-full"
          src={`${productSelection?.srcCover}`}
          width={700}
          height={700}
          alt={`${productSelection?.title}`}
        />
      </div>
      <div>
        <div className="flex flex-col gap-6 p-10">
          <div className="text-sm uppercase ">
            <span>{`${categorySelection?.title}`} / </span>
            <span className="text-text-footer">{`${productSelection?.title}`}</span>
          </div>
          <div>
            <p className="text-[38px] font-medium">
              {productSelection?.title} - ${productSelection?.price}
            </p>
            <p className="text-base text-text-description">
              {productSelection?.description}
            </p>
          </div>
          <div className="w-full gap-4 flex items-center">
            <span className="text-lg">Quantity: </span>
            <Quantity />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-lg">Excellent Combination with:</span>
              <span className="text-base text-text-footer">
                Vase Not Included
              </span>
            </div>
            <CarouselProducts productSelection={productSelection} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg">Price options</p>
            <div className="text-base flex flex-col gap-4">
              <label
                htmlFor="priceOption1"
                className="flex gap-4 container-radio"
              >
                One time purchase. Price ${productSelection?.price}
                <input
                  className="w-6 h-6"
                  type="radio"
                  id="priceOption1"
                  name="priceOption1"
                  value="priceOption1"
                  defaultChecked
                />
                <span className="checkmark"></span>
              </label>

              <label
                htmlFor="priceOption2"
                className="flex gap-4 container-radio"
              >
                Subscribe now, and save 25% on this order.
                <input
                  className="w-6 h-6"
                  type="radio"
                  id="priceOption2"
                  name="priceOption1"
                  value="priceOption1"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="w-full bg-text-description text-base text-text-btn py-[18px]">
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
