import Link from "next/link";

function NavBar() {
  return (
    <header className="flex items-center p-4">
      <h1 className="mr-auto text-2xl font-bold">Soma Next Cart</h1>
      <ul className="flex justify-end gap-4">
        <li>
          <Link href="/">제품 목록</Link>
        </li>
        <li>장바구니</li>
        <li>
          <Link href="/liked">찜 목록</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
