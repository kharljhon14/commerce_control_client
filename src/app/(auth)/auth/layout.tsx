import AdminNav from '@/features/common/AdminNav';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>
        <AdminNav />
      </div>

      <div>{children}</div>
    </div>
  );
}
