'use client';

import DataTable from '@/components/customs/DataTable';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/services/products';

import { ColumnDef } from '@tanstack/react-table';
import useSWR from 'swr';

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'brand',
    header: 'Brand'
  },
  {
    accessorKey: 'category_name',
    header: 'Category'
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      return row.original.price.toFixed(2);
    }
  },
  {
    accessorKey: 'on_sale',
    header: 'On Sale'
  },
  {
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <div className="space-x-4">
          <Button>View</Button>
          <Button variant="outline">Update</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      );
    }
  }
];

export default function ProductList() {
  const { data } = useSWR('http://localhost:8000/products');

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold mb-6">Products</h1>
      {data?.data && (
        <DataTable
          columns={columns}
          data={data.data}
        />
      )}
    </div>
  );
}
