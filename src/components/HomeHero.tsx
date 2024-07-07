import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <Image
          src="https://images.unsplash.com/photo-1594004844563-536a03a6e532?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="550"
          height="550"
          alt="Rescue Animals"
          className="mx-auto w-full aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Dando uma Segunda Chance aos Animais Resgatados
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              No Patas da Esperança, nossa missão é fornecer um ambiente seguro e amoroso para animais abandonados e abusados, e encontrar lares permanentes para eles.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Doe Agora
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Adote um Pet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}