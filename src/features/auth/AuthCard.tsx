import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import AuthForms from './AuthForms';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
}

export default function AuthCard({ children, title }: Props) {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
