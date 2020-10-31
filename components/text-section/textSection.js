function TextSection() {
    return (
        <div className="flex flex-col justify-center w-1/2 ml-16">
            <h1 className="font-muli text-gray-600 text-2xl">
                Mapeando comunidades
            </h1>
            <p className="font-muli mt-4 text-gray-500">
                Poblaciones es una plataforma para la consulta y
                georreferenciación de información social de la Argentina.
                Permite consultar y publicar información en forma abierta y
                gratuita.
            </p>

            <button class="mt-8 self-center bg-blue-400 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ir al mapa
            </button>
        </div>
    );
}

export default TextSection;
