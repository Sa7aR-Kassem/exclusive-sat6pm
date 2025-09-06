"use client";

import { Heart, MenuIcon, ShoppingCart, User } from "lucide-react";

import CustomButton from "@/components/shared/CustomButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { Badge } from "../ui/badge";
import { useCart } from "@/context/CartContext";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/categories",
    label: "Categories",
  },
  {
    path: "/brands",
    label: "Brands",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const { cartDetails } = useCart();

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Exclusive
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {links.map((link, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={link.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === link.path && "underline"
                    )}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {status === "loading" ? (
              <span>loading....</span>
            ) : status === "unauthenticated" ? (
              <>
                <CustomButton variant="outline" asChild>
                  <Link href="/login">Sign in</Link>
                </CustomButton>
                <CustomButton asChild>
                  <Link href="/register">Sign up</Link>
                </CustomButton>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link className="relative" href="/wishlist">
                  <Badge
                    className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    variant="destructive">
                    99
                  </Badge>
                  <Heart className="size-8" />
                </Link>
                <Link className="relative" href="/cart">
                  {cartDetails && (
                    <Badge
                      className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                      variant="destructive">
                      {cartDetails?.numOfCartItems}
                    </Badge>
                  )}
                  <ShoppingCart className="size-8" />
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <User className="size-8" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => signOut({ callbackUrl: "/login" })}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <CustomButton variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </CustomButton>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold tracking-tighter">
                      Exclusive
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.path}
                      className={cn(
                        "font-medium",
                        pathname === link.path && "underline"
                      )}>
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {status === "loading" ? (
                    <span>loading....</span>
                  ) : status === "unauthenticated" ? (
                    <>
                      <CustomButton variant="outline" asChild>
                        <Link href="/login">Sign in</Link>
                      </CustomButton>
                      <CustomButton asChild>
                        <Link href="/register">Sign up</Link>
                      </CustomButton>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <Link className="relative" href="/wishlist">
                          <Badge
                            className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                            variant="destructive">
                            99
                          </Badge>
                          <Heart className="size-8" />
                        </Link>
                        <Link className="relative" href="/cart">
                          {cartDetails && (
                            <Badge
                              className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                              variant="destructive">
                              {cartDetails?.numOfCartItems}
                            </Badge>
                          )}
                          <ShoppingCart className="size-8" />
                        </Link>

                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <User className="size-8" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Link href="/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() =>
                                signOut({ callbackUrl: "/login" })
                              }>
                              Sign out
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
