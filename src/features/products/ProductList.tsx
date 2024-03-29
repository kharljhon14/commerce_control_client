'use client';

import { getProducts } from '@/apis/products';
import DataTable from '@/components/customs/DataTable';
import { Product, ProductsResponse } from '@/types/services/products';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

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
  }
];

export default function ProductList() {
  const { data, isSuccess } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">Products</h1>
      {isSuccess && (
        <DataTable
          columns={columns}
          data={data.data}
        />
      )}
    </div>
  );
}
