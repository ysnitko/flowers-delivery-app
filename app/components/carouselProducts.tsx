import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

interface ProductCombinationProps {
  productSelection:
    | {
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
      }
    | undefined;
}

export default function CarouselProducts({
  productSelection,
}: ProductCombinationProps) {
  console.log(productSelection?.Combination);

  return (
    <Carousel className="flex flex-row" showArrows={true}>
      {productSelection?.Combination.map((item) => (
        <div key={item.id} className=" w-100">
          <Image src={item.src} width={100} height={100} alt="" />
          <p className="text-sm ">{item.title}</p>
          <p className="text-sm text-text-footer">${item.price}</p>
        </div>
      ))}
    </Carousel>
  );
}
