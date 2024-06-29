import Image from 'next/image';

export default function CategoryPage() {
  return (
    <div className="grid  grid-cols-2">
      <div className="relative">
        <span className="absolute text-[68px] md:text-[48px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-btn font-semibold  tracking-wider">
          Fresh Flowers
        </span>
        <Image
          className="w-full"
          src="/assets/category/fresh_flowers.png"
          width={700}
          height={700}
          alt="fresh"
        />
      </div>
      <div></div>
    </div>
  );
}
