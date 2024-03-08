import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export async function fetchRequest(url: string | URL | Request, body: any, opts: RequestInit) {
//   const res = await fetch(url, {
//     body: JSON.stringify(body),
//     ...opts,
//   });

//   return res;
// }
