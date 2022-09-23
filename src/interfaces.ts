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
  name: string;
  art: number;
  price: string;
  category: string;
  stock: boolean;
}

export interface ProductDetailImages {
  imageID1: string;
  altImage1: string;
  imageID2: string;
  altImage2: string;
  imageID3: string;
  altImage3: string;
  imageID4: string;
  altImage4: string;
  imageID5: string;
  altImage5: string;
}