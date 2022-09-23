import { Product } from "../interfaces";

export function productDetailFilter(
  data: Product[],
  routeSlug: string | string[] | undefined
): Product {
  const productDetail = data.filter((res) => res.slug === routeSlug);

  return productDetail[0];
}

export function categoryFilter(
  data: Product[],
  routeCategory: string | string[] | undefined
): Product[] {
  if (routeCategory === "all-products") {
    return data;
  } else {
    const categoryFilter = data.filter(
      (res) => res.categoryRoute === routeCategory
    );
    return categoryFilter;
  }
}

export function getNewProducts(data: Product[]): Product[] {
  const dataReverse = data.reverse();
  const newProducts = [];

  for (let i = 0; i <= 7; i++) {
    newProducts.push(dataReverse[i]);
  }

  return newProducts;
}
