// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Timestamp } from 'firebase-admin/firestore';

export const SITE_TITLE = 'Melonify Ecommerce';
export const SITE_DESCRIPTION = 'Welcome to Melonify Ecommerce!';

export interface Product {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
}
