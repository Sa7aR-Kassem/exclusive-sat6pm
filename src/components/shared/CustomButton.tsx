import React from "react";
import { Button } from "@/components/ui/button";
type CustomButtonProps = React.ComponentProps<typeof Button>;

export default function CustomButton({
  children,
  ...props
}: React.PropsWithChildren<CustomButtonProps>) {
  return (
    <Button className="cursor-pointer" {...props}>
      {children}
    </Button>
  );
}
