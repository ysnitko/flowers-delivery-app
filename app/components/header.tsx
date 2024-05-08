import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between  border-t-[1px] border-b-[1px]  border-black  text-[1.12vw] [&>ul]:flex [&_li]:px-10 [&_li]:py-6 [&_li]:border-r-border-table [&_li]:border-r-[1px] ">
      <ul>
        <li>
          <Link href={'/'}>Shop</Link>
        </li>
        <li>
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
      <ul>
        <li className="border-l-border-table border-l-[1px]">
          <Link href={'/'}>Sign in</Link>
        </li>
        <li>
          <Link href={'/'}>Cart</Link>
        </li>
      </ul>
    </header>
  );
}
