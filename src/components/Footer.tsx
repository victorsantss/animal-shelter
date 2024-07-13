import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-between flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Patas e Focinhos. Todos os direitos reservados.</p>
      <p className="text-xs text-muted-foreground">Feito com 💙 por <Link className="underline hover:text-[blue]" href="https://victorsantss.vercel.app">Victor Santos</Link></p>
    </footer>
  )
}