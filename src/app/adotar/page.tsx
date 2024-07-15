import { getAllPets } from "@/lib/api";
import { ListPets } from "@/components/ListPets";

export default async function AdoptPage() {
  const pets = await getAllPets();

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-10 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-dancing text-palette-dark-red text-3xl font-bold sm:text-5xl">Animais para Adoção</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore nossa seleção de animais resgatados que estão em busca de lares permanentes. Cada um tem uma história única e está esperando para trazer alegria para sua vida.
              </p>
            </div>
          </div>
          <ListPets pets={pets} />
        </div>
      </section>
    </div>
  )
}