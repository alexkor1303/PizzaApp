import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, UserRound } from "lucide-react";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className={"flex items-center justify-between py-8"}>
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logotype" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">NINJU ПИЦЦА</h1>
            <p className="text-sm text-gray-400 leading-3">
              Лучшая пицца в Москве!
            </p>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-1">
          <Button variant="outline" className="flex items-center gap-2">
            <UserRound size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>500 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
