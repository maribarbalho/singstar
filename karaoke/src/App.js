import React from "react";
import { useAtomValue } from "jotai";
import CorpoLetra from "./letra/corpo-letra";
import MicrophoneInput from "./microphoneInput";
import NomeMusica from "./nome-musica";
import { lyricsAtom } from "./store";
import MusicaRateInput from "./musica-rate-input";
import MensagemErro from "./mensagem-erro";

export default function App() {
    const lyrics = useAtomValue(lyricsAtom);

    const renderedChild =
        // lyrics === "" ? (
        //     <microphoneInput />
        // ) : (
            <>
                <NomeMusica />
                <CorpoLetra />
                <MusicaRateInput />
            </>
        // );

    return (
        <main className="w-full h-full px-10 flex flex-col justify-center items-center">
            <h1 className="font-bold font-sans text-6xl">KaraokeNow</h1>
            <p className="mb-5">React ⚛️ + Vite ⚡ + Replit 🌀</p>
            {renderedChild}
            <MensagemErro />
        </main>
    );
}