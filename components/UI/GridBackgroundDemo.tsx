import { cn } from "@/lib/utils";


const GridBackgroundDemo = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[30px_30px]",
          "bg-[linear-gradient(to_right,#e4e4e733_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e733_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

export default GridBackgroundDemo;
