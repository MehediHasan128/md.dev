"use client";

import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

interface TMInputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  label: string;
  required?: boolean;
}

const MInput = ({ type, name, placeholder, className, label, required }: TMInputProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label>{label}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={cn(
              "border rounded-md w-full bg-[#060010b0] px-5 py-3 focus:outline-none cursor-target hover:shadow-2xl transition-shadow duration-300 hover:shadow-primary/50 focus:shadow-2xl focus:shadow-primary/50",
              className,
            )}
            required={required}
          />
        )}
      />
    </div>
  );
};

export default MInput;
