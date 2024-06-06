import Image from 'next/image';

export default function ContactUs() {
  return (
    <section className="grid grid-cols-2 border-b-[1px] border-border-table">
      <div className="p-[80px]">
        <h1 className="text-[50px]">To Contact Us</h1>
        <div>
          <p className="text-lg">We will call you back</p>
          <div className="w-full flex flex-row gap-4">
            <input
              className=" px-4 py-5 border-[1px] border-border-input text-sm"
              type="text"
              placeholder="+380 XX XXX XX XX"
            />
            <button className="text-base px-[82px] py-5 bg-black text-text-btn ">
              BOOK A CALL
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image
          className=" aspect-square"
          src="/assets/restaurant.png"
          alt="rest"
          width={720}
          height={720}
        />
      </div>
    </section>
  );
}
