import clsx from "clsx";
import React from "react";
type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
}
export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;
  const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[24px]",
    md: "text-[32px]",
    lg: "text-[40px]",
    xl: "text-[48px]",
    "2xl": "text-[64px]",
  };
  return React.createElement(
    mapTagBySize[size],
    {
      className: clsx(mapClassNameBySize[size], className),
    },
    text
  );
};
