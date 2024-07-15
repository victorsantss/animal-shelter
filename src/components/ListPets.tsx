'use client'

import { Pet } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { PaginationComponent } from "./PaginationComponent";
import { useEffect, useState } from "react";

export function ListPets({ pets }: { pets: Pet[] }) {
  const petsNumberOfPages = Math.ceil(pets.length / 6);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPage, setPetsPage] = useState(pets.slice(0, 6));

  useEffect(() => {
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    setPetsPage(pets.slice(startIndex, endIndex));
  }, [currentPage, pets]);

  const handlePreviousPageButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageButton = () => {
    if (currentPage < petsNumberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="mx-auto mt-12 grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        {petsPage.map((pet: Pet) => (
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
              className="inline-flex h-8 items-center justify-center rounded-md bg-palette-dark-orange px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-palette-dark-orange/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Adote {pet.name}
            </Link>
          </div>
        ))}
      </div>

      <hr className="border-t border-muted-foreground my-8" />

      <h6 className="text-center text-sm font-medium">Mostrando {petsPage.length} de {pets.length} Resultados</h6>

      <div className="flex justify-center">
        <PaginationComponent
          previousPageFunction={handlePreviousPageButton}
          nextPageFunction={handleNextPageButton}
          currentPage={currentPage}
          numberOfPages={petsNumberOfPages}
        />
      </div>
    </>
  )
}