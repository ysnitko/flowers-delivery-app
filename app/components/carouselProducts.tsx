import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function CarouselProducts() {
  return (
    <Carousel>
      <div>
        <Image
          src="/assets/category/fresh_flowers.png"
          width={100}
          height={100}
          alt=""
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image
          src="/assets/category/fresh_flowers.png"
          width={40}
          height={40}
          alt=""
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image
          src="/assets/category/fresh_flowers.png"
          width={40}
          height={40}
          alt=""
        />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}
