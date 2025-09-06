"use server";
import { getUserId, getUserToken } from "@/lib/server-utils";
import {
  addressFormSchema,
  addressFromStateType,
} from "@/schema/address.schema";

export async function handlePayment(
  formState: addressFromStateType,
  formData: FormData
): Promise<addressFromStateType> {
  const shippingAddress = {
    details: formData.get("details"),
    phone: formData.get("phone"),
    city: formData.get("city"),
  };
  const cartId = formData.get("cartId");
  const paymentMethod = formData.get("paymentMethod");

  console.log("paymentMethod", formData, paymentMethod);

  const parsedData = addressFormSchema.safeParse({
    ...shippingAddress,
    cartId,
    paymentMethod,
  });
  if (!parsedData.success) {
    return {
      success: false,
      error: parsedData.error?.flatten().fieldErrors,
      message: null,
      callbackUrl: "/cart",

      paymentMethod: (paymentMethod as string) ?? "cash",
    };
  }
  try {
    const token = await getUserToken();

    const endpoint =
      paymentMethod === "cash"
        ? `api/v1/orders/${cartId}`
        : `api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`;

    const res = await fetch(`${process.env.API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify({
        shippingAddress,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: {},
        message: data.message || "Failed to place order",
        callbackUrl: "/cart",
        paymentMethod: (paymentMethod as string) ?? "cash",
      };
    }

    return {
      success: true,
      error: {},
      message: data.message || "Order placed successfully",
      callbackUrl: paymentMethod === "cash" ? "/allorders" : data.session.url,

      paymentMethod: (paymentMethod as string) ?? "cash",
    };
  } catch (error) {
    return {
      success: false,
      error: {},
      message: (error as string) || "Failed to place order",
    };
  }
}
//ecommerce.routemisr.com/api/v1/orders/user/68af1ca3fe1d0daa38d16607
export async function getOrders() {
  try {
    const userId = await getUserId();
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/orders/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        data: null,
        success: false,
        message: data.message || "Error in Fetching orders",
      };
    }

    return {
      data: data,
      success: true,
      message: data.message || "Fetched orders successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      success: false,
      message: (error as Error).message || "Error in Fetching orders",
    };
  }
}
