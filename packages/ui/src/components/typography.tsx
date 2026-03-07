import type { ComponentProps } from "react";
import { cn } from "#lib/utils";

export const H1 = ({ children, className, ...props }: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 font-semibold text-3xl tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-semibold text-2xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...props }: ComponentProps<"h4">) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 font-semibold text-xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

type ParagraphVariant = "default" | "lead" | "muted";

export const P = ({
  children,
  variant = "default",
  className,
  ...props
}: ComponentProps<"p"> & { variant?: ParagraphVariant }) => {
  return (
    <p
      className={cn(
        "leading-7",
        variant === "lead" && "text-xl",
        variant === "muted" && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const Code = ({
  children,
  className,
  ...props
}: ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
};
