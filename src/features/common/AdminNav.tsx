'use client';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavRoute {
  name: string;
  path: string;
}

const NAV_ROUTES: NavRoute[] = [
  {
    name: 'Home',
    path: ROUTES.home,
  },
  {
    name: 'Products',
    path: ROUTES.products,
  },
  {
    name: 'Categories',
    path: ROUTES.categories,
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-600 h-screen fixed w-64  text-white text-center">
      <Link href={ROUTES.home}>
        <h1 className="bg-gray-400 m-4 p-6 rounded-md text-lg font-semibold ">Commerce Control</h1>
      </Link>
      <menu className="flex flex-col">
        {NAV_ROUTES.map(({ name, path }) => (
          <Link
            key={name}
            className={`p-3 ${
              pathname === path ? 'bg-gray-500' : ''
            } transition-colors duration-300 hover:bg-gray-400`}
            href={path}
          >
            <li>{name}</li>
          </Link>
        ))}
      </menu>
    </aside>
  );
}
