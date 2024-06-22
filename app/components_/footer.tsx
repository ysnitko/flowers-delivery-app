import Link from 'next/link';
import Image from 'next/image';
import {
  CONTACTS,
  LINKS_SERVICE,
  LINKS_SHOP,
  LINKS_ABOUT,
} from '../lib/contacts';

export default function Footer() {
  return (
    <footer className="grid  grid-cols-4">
      <div className="flex flex-col gap-6 p-10">
        <p className="text-base">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>
        <label htmlFor="" className="flex flex-col gap-4">
          <input
            className=" px-4 py-5 border-[1px] border-border-input text-sm"
            type="email"
            placeholder="Your Email"
          />
          <button className="text-base px-[82px] py-5 bg-black text-text-btn ">
            REMIND
          </button>
        </label>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <p className="text-[20px] text-text-footer">Contact Us</p>
        <div>
          <p className="text-sm mb-2 text-text-footer">Address</p>
          <p className="text-base">15/4 Khreshchatyk Street, Kyiv </p>
        </div>
        <div>
          <p className="text-sm mb-2 text-text-footer">Phone</p>
          <a href={`tel:${+380980099777}`} className="text-base">
            +380980099777
          </a>
        </div>
        <div>
          <p className="text-sm mb-2 text-text-footer">General Enquiry:</p>
          <a href="mailto:Kiev.Florist.Studio@gmail.com" className="text-base">
            Kiev.Florist.Studio@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] mb-2 text-text-footer">Follow us</p>
          <ul className="flex gap-8">
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
      <div className="flex flex-col p-10 gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-[20px] text-text-footer">Shop</p>
          <ul className="flex flex-col  gap-2">
            {LINKS_SHOP.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.src}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[20px] text-text-footer">Service</p>
          <ul className="flex flex-col  gap-2">
            {LINKS_SERVICE.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.src}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-6">
        <p className="text-[20px] text-text-footer">About Us</p>
        <ul className="flex flex-col  gap-2">
          {LINKS_ABOUT.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.src}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
