import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://images.unsplash.com/photo-1701422052384-947b60e17ebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwtcXlLMW1ZLW5xc3x8ZW58MHx8fHx8"
        alt="Interior_de_casa"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Porto Alegre, RS</h3>
        <p className="truncate text-gray-600">
          {" "}
          Este apartamento minimalista combina conforto e estilo em um ambiente
          moderno e bem iluminado. Localizado a poucos passos dos principais
          pontos turísticos e gastronômicos da cidade, é a escolha ideal para
          quem valoriza praticidade e bom gosto. A decoração clean e os
          ambientes bem planejados oferecem uma estadia tranquila, seja para
          trabalho ou lazer.
        </p>
      </div>

      <p>
        <span className="font-semibold">R$550</span> por noite
      </p>
    </a>
  );
};

export default Item;
