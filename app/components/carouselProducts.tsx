import Slider from 'react-slick';
import Image from 'next/image';
import './carousel.css';
import { url } from 'inspector';
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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        // backgroundImage: `url('/public/assets/prev.png')`,
        // backgroundRepeat: 'no-repeat',
        width: '34px',
        height: '34px',
      }}
      onClick={onClick}
    />
  );
}

export default function CarouselProducts({
  productSelection,
}: ProductCombinationProps) {
  console.log(productSelection?.Combination);

  const settings = {
    className: 'slick-container flex w-full',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="flex flex-row">
        {productSelection?.Combination.map((item) => (
          <div key={item.id} className="flex flex-col gap-10">
            <Image src={item.src} width={100} height={100} alt="" />
            <p className="text-sm ">{item.title}</p>
            <p className="text-sm text-text-footer">${item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
