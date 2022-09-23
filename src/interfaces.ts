export interface AccordionItemComponentprops {
  question: string;
  answer: string;
}

export interface PagesBannerProps {
  urlImage: string;
  title: string;
  breadcrumb: string;
}

export interface LogoDesktopProps {
  logo: string;
}

export interface ProductCard {
  product: Product;
}

export interface Product extends ProductDetailImages {
  slug: string;
  categoryRoute: string;
  name: string;
  art: number;
  price: string;
  category: string;
  stock: boolean;
}

export interface ProductDetailImages {
  imageID1: string | undefined;
  altImage1: string;
  imageID2: string | undefined;
  altImage2: string;
  imageID3: string | undefined;
  altImage3: string;
  imageID4: string | undefined;
  altImage4: string;
  imageID5: string | undefined;
  altImage5: string;
}