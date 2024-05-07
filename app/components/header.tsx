import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between  border-t-[1px] border-b-[1px]  border-black ">
      <div className="border-r-[1px] border-black">
        <Link
          href={'/'}
          className="py-[32px] px-[24px]  border-r-[1px] border-black h-[100%]"
        >
          Shop
        </Link>
        <Link
          href={'/'}
          className="py-[32px] px-[24px]  border-r-[1px] border-black h-[100%]"
        >
          Contact
        </Link>
      </div>
      <div className="border-r-[1px] border-black">
        <Link
          href={'/'}
          className="py-[32px] *:px-[24px] & border-r-[1px] border-black h-[100%]"
        >
          Sign in
        </Link>
        <Link
          href={'/'}
          className="py-[32px] *:px-[24px] & border-r-[1px] border-black h-[100%]"
        >
          Cart
        </Link>
      </div>
    </header>
  );
}
