import Image from 'next/image';

export default function MainСontent() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div>
          <p className="text-[67px] after:content-['&reg;']">
            Kyiv
            <br /> LuxeBouquets
          </p>
          <p>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>
        </div>
        <div>
          <Image
            src="/assets/imghero.png"
            alt="img-hero"
            width={256}
            height={256}
          />
          <p>
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
      <div>dfd</div>
    </div>
  );
}
