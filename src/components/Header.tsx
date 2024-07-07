import Link from "next/link";
import { PawPrintIcon } from "./PawPrintIcon";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <PawPrintIcon className="size-6 mr-2" />
        <span className="font-bold text-sm md:text-lg">Patas da Esperança</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/adotar" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Adotar
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Voluntariar
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Doar
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Sobre
        </Link>
      </nav>
    </header>
  )
}