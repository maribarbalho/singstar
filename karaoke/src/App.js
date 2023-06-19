import React from "react";
import { useAtomValue } from "jotai";
import CorpoLetra from "./letra/corpo-letra";
import MicrophoneInput from "./microphoneInput";
import NomeMusica from "./nome-musica";
import { lyricsAtom } from "./store";
import MusicaRateInput from "./musica-rate-input";
import MensagemErro from "./mensagem-erro";
//import BarraPesquisa from "./singstar/barra-de-pesquisa/src/BarraPesquisa";
import Bora from "./bora";

export default function App() {
    
    const lyrics = useAtomValue(lyricsAtom);

    const renderedChild =
        lyrics === "" ? (
            <MicrophoneInput />
        ) : (
            <>
                <NomeMusica />
                <CorpoLetra />
                <MusicaRateInput />
            </>
        )

    return (
        <main className="w-full h-full px-10 flex flex-col justify-center items-center">
            <h1 className="font-bold font-sans text-6xl">Singstar</h1>
            <p className="mb-5">React ⚛️ + Vite ⚡ + Replit 🌀</p>
            {renderedChild}
            <MensagemErro />
        </main>
    );
}