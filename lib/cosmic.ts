import { createBucketClient } from '@cosmicjs/sdk';
import { MenuCategory, MenuItem, Location, Review, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const categories = response.objects as MenuCategory[];
    return categories.sort((a, b) => {
      const orderA = a.metadata?.display_order || 0;
      const orderB = b.metadata?.display_order || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch menu categories');
  }
}

export async function getMenuCategory(slug: string): Promise<MenuCategory | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'menu-categories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as MenuCategory;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch category');
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch menu items');
  }
}

export async function getMenuItem(slug: string): Promise<MenuItem | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'menu-items', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as MenuItem;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch menu item');
  }
}

export async function getMenuItemsByCategory(categoryId: string): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items', 'metadata.category': categoryId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch menu items by category');
  }
}

export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items', 'metadata.featured_item': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch featured items');
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Location[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch locations');
  }
}

export async function getLocation(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'locations', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Location;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch location');
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const reviews = response.objects as Review[];
    return reviews.sort((a, b) => {
      const dateA = new Date(a.metadata?.review_date || '').getTime();
      const dateB = new Date(b.metadata?.review_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch reviews');
  }
}