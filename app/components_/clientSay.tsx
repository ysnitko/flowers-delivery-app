import Image from 'next/image';

export default function ClientSay() {
  return (
    <section className="p-20 flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src="/assets/google_logo.svg"
          alt="google logo"
          width={78}
          height={28}
        />
        <p className="text-sm">REVIEWS</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[50px]">Our Clients say</h1>
        <div className=" text-[32px] text-center">
          “Ordered flowers online and they were the best bouquet! Impressed
          everyone around. Highly recommend this flower shop!”
        </div>
      </div>
      <button className="mt-16 text-base px-6 py-4 border-[1px] border-border-table  tracking-widest">
        READ REVIEWS
      </button>
    </section>
  );
}
