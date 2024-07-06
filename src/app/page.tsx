import { DogIcon } from "@/components/DogIcon";
import { FanIcon } from "@/components/FanIcon";
import { GiftIcon } from "@/components/GiftIcon";
import { PawPrintIcon } from "@/components/PawPrintIcon";
import { SchoolIcon } from "@/components/SchoolIcon";
import { VoteIcon } from "@/components/VoteIcon";
import { getLast3Pets } from "@/lib/api";
import Image from "next/image"
import Link from "next/link"

interface Pet {
  sys: {
    id: string;
  };
  name: string;
  slug: string;
  age: string;
  description: string;
  mediaCollection: {
    items: {
      url: string;
    }[];
  };
}

export default async function Home() {
  const pets = await getLast3Pets();

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PawPrintIcon className="size-6 mr-2" />
          <span className="font-bold text-lg">Patas da Esperança</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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
      <main className="flex-1">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Últimos Resgatados
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conheça Nossos Animais para Adoção</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossa seleção de animais resgatados que estão em busca de lares permanentes. Cada um tem uma história única e está esperando para trazer alegria para sua vida.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {pets.map((pet: Pet) => (
                <div key={pet.sys.id} className="grid gap-1">
                  <Image
                    src={pet.mediaCollection.items[0].url}
                    width="300"
                    height="300"
                    alt={pet.name}
                    className="aspect-square overflow-hidden rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">{pet.name} - {pet.age}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-4">{pet.description}</p>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Adote {pet.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Envolva-se
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Maneiras de Apoiar Nossa Missão</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Existem muitas maneiras de ajudar a fazer a diferença na vida dos animais resgatados. Seja voluntário, ofereça lar temporário ou doe para apoiar nossos esforços.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <VoteIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Voluntário</h3>
                <p className="text-sm text-muted-foreground">
                  Junte-se à nossa equipe de voluntários dedicados e ajude a cuidar dos nossos animais resgatados.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Saiba Mais
                </Link>
              </div>
              <div className="grid gap-1">
                <FanIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Lar Temporário</h3>
                <p className="text-sm text-muted-foreground">Ofereça um lar temporário para um animal resgatado e ajude-o a se preparar para a adoção.</p>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Saiba Mais
                </Link>
              </div>
              <div className="grid gap-1">
                <GiftIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Doação</h3>
                <p className="text-sm text-muted-foreground">
                  Suas doações nos ajudam a fornecer cuidados médicos, alimentação e abrigo para os animais.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nosso Impacto
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Fazendo a Diferença, Um Resgate de Cada Vez
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desde nossa fundação, resgatamos e reabilitamos centenas de animais, fornecemos cuidados veterinários e educamos a comunidade sobre a posse responsável de animais de estimação.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <PawPrintIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Resgate & Reabilitação</h3>
                <p className="text-sm text-muted-foreground">
                  Resgatamos e encontramos lares amorosos para mais de 500 animais necessitados.
                </p>
              </div>
              <div className="grid gap-1">
                <DogIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Cuidados Veterinários</h3>
                <p className="text-sm text-muted-foreground">
                  Nossa clínica veterinária no local fornece cuidados de alta qualidade para nossos animais resgatados.
                </p>
              </div>
              <div className="grid gap-1">
                <SchoolIcon className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">Educação Comunitária</h3>
                <p className="text-sm text-muted-foreground">
                  Realizamos workshops e eventos para promover a posse responsável de animais de estimação e o bem-estar animal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Patas da Esperança. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Política de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Termos de Serviço
          </Link>
        </nav>
      </footer>
    </div>
  )
}