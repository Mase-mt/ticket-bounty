import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex justify-center items-center w-full flex-col">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
      <h2 className="text-xl font-semibold">Loading...</h2>
    </div>
  );
};

export { Spinner };
