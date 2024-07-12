import { Pet } from "@/app/page";
import { Slider } from "@/components/Slider";
import { getPet } from "@/lib/api";

export default async function PetPage({ params }: { params: { slug: string } }) {
  const petInfo: Pet = await getPet(params.slug);
  const petType = petInfo.type === 'cat' ? 'Gato' : 'Cachorro';
  const petMedia = petInfo.mediaCollection.items;

  return (
    <div className="flex flex-col">
      <section className="w-full py-10 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8 items-center justify-center text-center">
            <div className="flex flex-col gap-4">
              <h2 className="font-dancing text-3xl font-bold sm:text-5xl text-palette-dark-red">{petInfo.name}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {petInfo.description}
              </p>
              <div className="flex justify-center">
                <span className="text-lg font-bold">{petInfo.age}</span>
                <span className="text-lg font-bold mx-4">•</span>
                <span className="text-lg font-bold">Porte {petInfo.size}</span>
                <span className="text-lg font-bold mx-4">•</span>
                <span className="text-lg font-bold">{(petType)}</span>
              </div>
            </div>
            <div className="flex w-full max-w-5xl">
              <Slider media={petMedia} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}