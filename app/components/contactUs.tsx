import Image from 'next/image';
import Link from 'next/link';
import { CONTACTS } from '../lib/contacts';

export default function ContactUs() {
  return (
    <section className="grid grid-cols-2 border-b-[1px] border-border-table">
      <div className="flex flex-col gap-6 ">
        <div className="p-[80px] ">
          <h1 className="text-[50px]">To Contact Us</h1>
          <div className="flex flex-col gap-4">
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
        <div className="grid grid-cols-2 border-[1px] border-border-table border-r-0 border-b-0 h-full">
          <div className="border-r-[1px] border-border-table">
            <p className="px-[10px] py-4 text-[38px]">Phone</p>
            <div className="flex flex-col p-[20px] gap-5 justify-center items-center">
              <label htmlFor="tel" className="flex gap-2">
                <Image
                  src="/assets/call.svg"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <input
                  className="text-base"
                  type="tel"
                  name="tel"
                  id="tel"
                  value="+380980099777"
                />
              </label>
              <label htmlFor="tel_tw" className="flex gap-2">
                <Image
                  src="/assets/call.svg"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <input
                  className="text-base"
                  type="tel"
                  name="tel_tw"
                  id="tel_tw"
                  value="+380980099111"
                />
              </label>
            </div>
          </div>
          <div>
            <p className="px-[10px] py-4 text-[38px]">Address</p>
            <div className="p-[20px] flex flex-col gap-4 items-center">
              <p className="text-sm">OPENING HOURS: 8 TO 11 P.M.</p>
              <div className="flex gap-2">
                <Image
                  src="/assets/pin_drop.svg"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <p className="text-base">15/4 Khreshchatyk Street, Kyiv </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="aspect-square w-full"
          src="/assets/restaurant.png"
          alt="rest"
          width={720}
          height={720}
        />
        <div className="flex flex-row  items-center  border-r-[1px] border-border-table">
          <p className="text-[38px] px-10 py-4 border-r-[1px] border-l-[1px] border-border-table">
            Follow us
          </p>
          <ul className="flex gap-8 px-8 py-4">
            {CONTACTS.map((brand, index) => {
              return (
                <li key={index}>
                  <Link href="/">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
