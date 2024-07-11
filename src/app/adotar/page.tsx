import { getAllPets } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Pet } from "../page";

export default async function AdoptPage() {
  const pets = await getAllPets();

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-10 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Animais para Adoção</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore nossa seleção de animais resgatados que estão em busca de lares permanentes. Cada um tem uma história única e está esperando para trazer alegria para sua vida.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {pets.map((pet: Pet) => (
              <div key={pet.sys.id} className="flex gap-1 flex-col justify-between">
                <Image
                  src={pet.mediaCollection.items[0].url}
                  width="300"
                  height="300"
                  alt={pet.name}
                  className="aspect-square overflow-hidden rounded-lg object-cover self-center"
                />
                <h3 className="text-lg font-bold">{pet.name} - {pet.age}</h3>
                <p className="text-sm text-muted-foreground line-clamp-4">{pet.description}</p>
                <Link
                  href={`/adotar/${pet.slug}`}
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Adote {pet.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full md:w-1/4"
              prefetch={false}
            >
              Ver Mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}