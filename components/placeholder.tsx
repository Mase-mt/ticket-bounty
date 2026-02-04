import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type LabelProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div/>,
}: LabelProps) => {
  return (
    <div className="flex-1 flex flex-col self-center items-center justify-center gap-2">
      {cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center font-semibold">{label}</h2>
      {cloneElement(button as ReactElement<{className?: string}>,{
        className: "h-10"
      })}
    </div>
  );
};

export { Placeholder };
