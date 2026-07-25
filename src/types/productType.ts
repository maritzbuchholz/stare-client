type Product = {
  id: number;
  name: string;
  description: string;
  price_cents: number;
  image_url: string;
  variants: ProductVariant[];
}

type ProductVariant = {
  id: number;
  inventory_count: number;
  size: string;
  sku: string;
}

export default Product;