import { IBrand } from "./brand.interface";
import { ICategory } from "./category.interface";
import { ISubcategory } from "./subcagetory.interface";

export interface ICartRoot {
  data: ICartResponse;
  success: boolean;
  message: string | null;
}

export interface ICartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: ICart;
}

export interface ICart {
  _id: string;
  cartOwner: string;
  products: ICartProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface ICartProduct {
  count: number;
  _id: string;
  product: ICartProductDetails;
  price: number;
}

export interface ICartProductDetails {
  subcategory: ISubcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  ratingsAverage: number;
  id: string;
}
