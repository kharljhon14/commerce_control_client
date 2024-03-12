import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchRequest(
  url: string | URL | Request,
  body: any,
  opts: RequestInit
): Promise<any> {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    ...opts,
  });

  if (!res.ok) {
    const error = await res.json();
    return error.message;
  }

  return res;
}
