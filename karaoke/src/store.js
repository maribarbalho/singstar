import { atom } from "jotai";

// Armazena os erros retornados pelas funções serverless
export const errorAtom = atom("");

// Armazena o título da música
export const titleAtom = atom("");

// Medido em palavras por minuto
export const songRateAtom = atom(160);

// Exibindo letras
export const lyricsAtom = atom("");
export const currentWordAtom = atom(0);

// Permite alterar o index da próxima palavra a ser destacada
export const newWordAtom = atom(-1);

// Atom somente para escrita, atualiza o index da palavra destacada
export const nextWordAtom = atom(null, (get, set) => {
    // Obter todas as palavras nas letras
    const words = [...get(lyricsAtom).matchAll(/[\w']+/g)].map(
        (match) => match[0]
    );
    set(currentWordAtom, (prev) => {
        // Sobrescrever o novo index da palavra com qualquer valor em `newWordAtom`
        const newWord = get(newWordAtom);
        if (newWord !== -1) {
            set(newWordAtom, -1);
            return newWord;
        }

        return (prev + 1) % words.length;
    });
});