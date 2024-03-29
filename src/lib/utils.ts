import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cookies from 'js-cookie';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(url: string | URL | Request): Promise<any> {
  const token = Cookies.get('JWT-session');

  const res = await fetch(url, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
}
