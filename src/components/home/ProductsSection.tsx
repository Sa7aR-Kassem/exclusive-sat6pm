import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { getProducts } from "@/services/products.service";
import { IProduct } from "@/interfaces/product.interface";
import CustomButton from "@/components/shared/CustomButton";
import Link from "next/link";
import ProductItem from "../products/ProductItem";

export default async function ProductsSection() {
  const { data: products }: { data: IProduct[] } = await getProducts(8);
  // console.log(products);

  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <SectionTitle
          title={"Our Products"}
          subtitle={"Explore Our Products"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-15 mb-15">
          {products &&
            products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </div>

        <div className="flex justify-center">
          <CustomButton variant={"destructive"} asChild>
            <Link href={"/products"}>View All Products </Link>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
