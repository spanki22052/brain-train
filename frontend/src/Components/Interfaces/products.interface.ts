export interface ProductInterface {
  title: string;
  price: number;
  id: string;
  description: string;
  dates: [string];
  image: string;
  foodtype: string;
}

export interface ProductData {
  showAll: ProductInterface[];
}
