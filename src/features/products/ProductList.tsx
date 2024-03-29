'use client';

import DataTable from '@/components/customs/DataTable';
import { Product, ProductsResponse } from '@/types/services/products';
import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('http://localhost:8000/products', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxZjQxNzliLTU3NzAtNDJmMC04YjdmLTAzZDU3MDdjYjFmYSIsImlhdCI6MTcxMTcwMTYxNCwiZXhwIjoxNzEyMzA2NDE0fQ.-HW5cADNK_L6I-1QHgLUNWCSQ4giTNcmK3g9BxTclZs'
        }
      });
      const products: ProductsResponse = await res.json();

      setProducts(products.data);
    };
    getProducts();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">Products</h1>
      <DataTable
        columns={columns}
        data={products}
      />
    </div>
  );
}
