import Link from 'next/link';

export default function aboutUs() {
  return (
    <section className="grid grid-cols-2 border-b-[1px] border-border-table">
      <h1 className="p-[80px] text-[50px]">About us</h1>
      <div className="p-[80px] border-l-[1px] border-border-table">
        <div className="flex flex-col gap-4">
          <p className="text-sm">OUR STORY</p>
          <p className="text-[38px] font-medium">Kyiv LuxeBouquets</p>
          <p className="text-base mb-[64px]">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
        </div>
        <Link
          href="/"
          className=" py-4 px-6 text-base border-[1px] border-border-table"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
