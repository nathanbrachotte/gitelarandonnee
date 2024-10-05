import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";

export const LandingH1 = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "text-5xl font-extrabold tracking-tight lg:text-6xl font-logo text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H1 = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const LandingH2 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl text-primary font-logo",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H2 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H4 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const H5 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      className={cn("text-h6 font-bold text-midnight m:text-h5", className)}
      {...props}
    >
      {children}
    </h5>
  );
};
/**
 * Exporting this to allow `Text` component to be used in Astro files
 * Slot component does not work in Astro files
 * Don't abuse it or N8 will come for you
 */
export const baseTextStyle = "text-base text-midnight";

export const Text = ({
  children,
  className,
  asChild,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }) => {
  const Comp = asChild != null ? Slot : "span";
  return (
    <Comp className={cn(baseTextStyle, className)} {...props}>
      {children}
    </Comp>
  );
};

export const Quote = ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export const Small = ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};
