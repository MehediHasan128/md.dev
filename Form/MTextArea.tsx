import { Controller } from "react-hook-form";
import { cn } from "../lib/utils";

interface TMTextAreaProps {
  name: string;
  placeholder: string;
  className?: string;
  label: string;
}

const MTextArea = ({
  name,
  placeholder,
  className,
  label,
}: TMTextAreaProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label>{label}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            rows={5}
            placeholder={placeholder}
            className={cn(
              "border rounded-md bg-[#060010b0] px-5 py-3 focus:outline-none cursor-target hover:shadow-2xl transition-shadow duration-300 hover:shadow-primary/50 focus:shadow-2xl focus:shadow-primary/50",
              className,
            )}
          />
        )}
      />
    </div>
  );
};

export default MTextArea;
