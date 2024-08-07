import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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

  const responsive = {
    0: { items: 1 },
    568: { items: 5 },
    1024: { items: 5 },
  };

  return (
    <div className="slider-container">
      <AliceCarousel
        disableDotsControls={false}
        disableButtonsControls
        responsive={responsive}
      >
        {productSelection?.Combination.map((item) => (
          <div key={item.id} className="flex flex-col justify-between gap-2">
            <Image src={item.src} width={100} height={100} alt="" />
            <p className="text-sm ">{item.title}</p>
            <p className="text-sm text-text-footer">${item.price}</p>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
