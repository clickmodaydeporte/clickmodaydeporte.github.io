import { Product } from "../interfaces";

export function productDetailFilter(
  data: Product[],
  routeSlug: string | string[] | undefined
) {
  const productDetail = data.filter((res) => res.slug === routeSlug);

  return productDetail[0];
}

export function categoryFilter(
  data: Product[],
  routeCategory: string | string[] | undefined
) {
  if (routeCategory === "all-products") {
    return data;
  } else {
    const categoryFilter = data.filter(
      (res) => res.categoryRoute === routeCategory
    );
    return categoryFilter;
  }
}
