import Image from 'next/image';

export default function OurService() {
  return (
    <section>
      <h1 className="text-5xl py-20 text-center border-[1px] border-t-0 border-border-table ">
        Our Service
      </h1>
      <div className="flex">
        <Image
          src="/assets/our_service.png"
          alt="our service"
          width={720}
          height={720}
        />
        <div className="w-1/2 flex flex-col items-center p-20 gap-4  border-b-[1px]  border-border-table">
          <p className="text-sm">SERVICE</p>
          <p className="text-5xl">Flower Subscriptions</p>
          <p className="text-lg text-center">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <button className="mt-4 text-base px-6 py-4 border-[1px]  border-border-table tracking-widest">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  );
}
