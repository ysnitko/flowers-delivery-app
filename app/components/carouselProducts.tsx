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
        Combination: any[];
      }
    | undefined;
}

export default function CarouselProducts({
  productSelection,
}: ProductCombinationProps) {
  console.log(productSelection?.Combination);

  return (
    <Carousel>
      {/* {productSelection?.Combination.map((item) => (
        <div>
          <Image src={item} width={100} height={100} alt="" />
          <p className="legend">{item}</p>
        </div>
      ))} */}
    </Carousel>
  );
}
