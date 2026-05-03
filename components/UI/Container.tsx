import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-[95%] md:w-[90%] mx-auto pt-20 md:pt-42", className)}>
      {children}
    </div>
  );
};

export default Container;
