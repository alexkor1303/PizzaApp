import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}
export const Categories: React.FC<Props> = ({ className }) => {
  const activeIndex = 0;
  const categories = [
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десреты",
  ];
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-xl", className)}>
      {categories.map((category, index) => {
        return (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              activeIndex === index &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            key={index}>
            <button>{category}</button>
          </a>
        );
      })}
    </div>
  );
};
