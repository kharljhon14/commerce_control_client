import AdminNav from '@/features/common/AdminNav';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-64">
        <AdminNav />
      </div>

      <div className="mx-16 my-12 w-full">{children}</div>
    </div>
  );
}
