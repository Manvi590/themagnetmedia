import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden border bg-background text-center font-semibold",
          className,
        )}
        {...props}
      >
        {/* Primary label - absolutely centered so sliding doesn't shift layout */}
        <span className="absolute inset-0 z-20 flex items-center justify-center transform transition-transform duration-500 will-change-transform pointer-events-none group-hover:-translate-x-full group-hover:opacity-0">
          {text}
        </span>

        {/* Overlay with text + arrow that slides in from the right */}
        <div className="absolute inset-0 z-30 flex items-center justify-center gap-2 text-primary-foreground transform translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 pointer-events-none">
          <span className="pointer-events-none">{text}</span>
          <ArrowRight className="pointer-events-none" />
        </div>

        {/* Decorative expanding background - minimal and centered to avoid layout shifts */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-0 h-0 rounded-md bg-primary transition-all duration-500 group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-10"></div>
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
