'use client'

import { useState } from "react";

export function AdoptionForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsFormVisible(true)} className="inline-flex h-8 items-center justify-center rounded-md bg-palette-dark-orange px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-palette-dark-orange/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">Preencher Formulário de Adoção!</button>

      {isFormVisible && (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe2lSdrhY3oiQwK2HnmDzKUg6Q2O4p340wfzoucFTxYaWwbbw/viewform?embedded=true"
          width="100%"
          height="500"
        >
          Carregando…
        </iframe>
      )}
    </>
  )
}