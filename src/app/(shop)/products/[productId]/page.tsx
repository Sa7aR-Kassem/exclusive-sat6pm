import AddToCartBtn from "@/components/products/AddToCartBtn";
import ProductSlider from "@/components/products/ProductSlider";
import CustomButton from "@/components/shared/CustomButton";
import { IProduct } from "@/interfaces/product.interface";
import { getProductDetails } from "@/services/products.service";
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";
import React from "react";

export default async function ProductDetails({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const { data: product }: { data: IProduct } = await getProductDetails(
    productId
  );
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className=" lg:col-span-2">
            <ProductSlider images={product.images} />
          </div>
          <div className=" lg:col-span-1">
            <h1 className="font-semibold text-2xl mb-4">{product.title}</h1>
            <div className="flex items-center gap-x-1 mb-4">
              <Star className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-gray-500">
                {product.ratingsAverage}
              </span>
            </div>
            <span className="text-2xl mb-6 block">{product.price} EGP</span>

            <p className="text-sm border-b border-b-gray-400 pb-6 mb-6">
              {product.description}
            </p>

            <div className="flex gap-5 mb-10">
              <AddToCartBtn
                productId={product._id}
                className="grow-1"
                variant={"destructive"}
              />

              <CustomButton variant={"outline"}>
                <Heart />
              </CustomButton>
            </div>

            <ul className="border border-black/50 divide-y divide-black/50">
              <li className="p-5 flex gap-4">
                <Truck size={40} />
                <div className="font-medium">
                  <p className="mb-2">Free Delivery</p>
                  <span className="text-xs">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </li>

              <li className="p-5 flex gap-4">
                <RefreshCcw size={40} />
                <div className="font-medium">
                  <p className="mb-2">Return Delivery</p>
                  <span className="text-xs">
                    Free 30 Days Delivery Returns. Details
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
