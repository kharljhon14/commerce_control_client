'use client';

import { fetcher } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export default function Providers({ children }: PropsWithChildren) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
