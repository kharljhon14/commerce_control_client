import DataTable from '@/components/customs/DataTable';
import { Product } from '@/types/services/products';
import { ColumnDef } from '@tanstack/react-table';

export default function page() {
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'brand',
      header: 'Brand',
    },
    {
      accessorKey: 'category_name',
      header: 'Category',
    },
    {
      accessorKey: 'price',
      header: 'Price',
    },
    {
      accessorKey: 'on_sale',
      header: 'On Sale',
    },
  ];
  return (
    <div>
      <h1>Product page</h1>
      <DataTable
        data={[
          {
            id: '1af7bc3b-24bd-4405-ad45-d332a6fc7114',
            name: 'Iphone 15',
            brand: 'Apple',
            description: 'Test',
            image: 'www.test.com/asd',
            price: 99.23,
            on_sale: false,
            created_at: '2024-02-29T06:59:26.320Z',
            updated_at: '2024-02-29T06:59:26.320Z',
            category_name: 'Electronics',
          },
        ]}
        columns={columns}
      />
    </div>
  );
}
