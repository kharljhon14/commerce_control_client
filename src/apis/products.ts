import { ProductsResponse } from '@/types/services/products';
import Cookie from 'js-cookie';

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const token = Cookie.get('JWT-session');
  let [resource, config] = args;

  if (!config) {
    config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  }
  const response = await originalFetch(resource, config);
  return response;
};

export async function getProducts(): Promise<ProductsResponse> {
  const result = await fetch('http://localhost:8000/products');

  if (!result.ok) {
    const { message } = await result.json();

    throw new Error(message);
  }

  return result.json();
}
