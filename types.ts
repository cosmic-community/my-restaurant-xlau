export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    display_order?: number;
    category_image?: CosmicImage;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    featured_image?: CosmicImage;
    category?: MenuCategory;
    dietary_info?: string[];
    spice_level?: { key: string; value: string } | string;
    featured_item?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    location_image?: CosmicImage;
    reservation_url?: string;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name?: string;
    rating?: { key: string; value: string } | string | number;
    review_text?: string;
    review_date?: string;
    location?: Location;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}