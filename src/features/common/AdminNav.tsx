import Link from 'next/link';

export default function AdminNav() {
  return (
    <aside>
      <h1>Commerce Control</h1>
      <menu>
        <li>
          <Link href={ROUTES.home}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.home}>Products</Link>
        </li>
        <li>
          <Link href={ROUTES.home}>Categories</Link>
        </li>
      </menu>
    </aside>
  );
}
