import { createContext, useState } from "react";

export const EdificioContext = createContext();
EdificioContext.displayName = "Edificios"

export const EdificioProvider = ({ children }) => {
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [idEdificio, setIdEdificio] = useState("")
    const [edificio, setEdificio] = useState([
        {
            "id": 0,
            "edificio": "Biopark",
            "locador": "Biopark",
            "imagem" : "/imagens/edificio1.jpg",
            "apartamentos": [
                {
                    "numero": 1,
                    "locatário": "Sergio",
                    "valor": ""
                },
                {
                    "numero": 2,
                    "locatário": "Disponivel",
                    "valor": "450,00"
                },
                {
                    "numero": 3,
                    "locatário": "Disponivel",
                    "valor": "450,00"
                },
            ]
        },
        {
            "id": 1,
            "edificio": "Toledo",
            "locador": "Biopark",
            "imagem" : "/imagens/edificio1.jpg",
            "apartamentos": [
                {
                    "numero": 1,
                    "locatário": "Erik",
                    "valor": ""
                },
                {
                    "numero": 2,
                    "locatário": "Disponivel",
                    "valor": "450,00"
                },
                {
                    "numero": 3,
                    "locatário": "Disponivel",
                    "valor": "450,00"
                },
            ]
        }
    ]);

    return (
        <EdificioContext.Provider value={{
            edificio,
            setEdificio,
            nome,
            setNome,
            imagem,
            setImagem,
            idEdificio,
            setIdEdificio
        }}>
            {children}
        </EdificioContext.Provider>
    )
}