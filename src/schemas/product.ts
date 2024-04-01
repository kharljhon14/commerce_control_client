import { TEN_K_LENGTH, NAME_MAX, UUID_MAX } from '@/constants';
import { z } from 'zod';

export const ProductSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'Name is required' })
    .max(NAME_MAX, { message: 'Name must not exceed 64 characters' }),
  brand: z
    .string({ required_error: 'Brand is required' })
    .min(1, { message: 'Brand is required' })
    .max(NAME_MAX, { message: 'Brand must not exceed 64 characters' }),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, { message: 'Description is required' })
    .max(TEN_K_LENGTH, { message: 'Description has exceeded max characters' }),
  category_id: z
    .string({ required_error: 'Category is required' })
    .min(1, { message: 'Category is required' })
    .max(UUID_MAX),
  price: z.number().positive({ message: 'Price must be greater than 0' }).lte(TEN_K_LENGTH)
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
