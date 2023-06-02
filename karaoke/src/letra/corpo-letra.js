import React, { useEffect, useMemo } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { lyricsAtom, nextWordAtom, songRateAtom } from "../store"
import Separador from "./separador"

export default function CorpoLetra() {
  const lyrics = useAtomValue(lyricsAtom)
  const nextWord = useSetAtom(nextWordAtom)
  const songRate = useAtomValue(songRateAtom)

  const segments = useMemo(() => Separador(lyrics), [lyrics])

  useEffect(() => {
    let request

    // Converts a rate of words per minute to milliseconds per word
    const delay = (60 * 1000) / songRate
    let start
    let previousTime

    const animateWords = time => {
      if (!start) {
        start = time
        previousTime = time
      }

      // If it's been at least `delay` milliseconds since the last word had been highlighted
      if (time - previousTime >= delay) {
        nextWord()
        previousTime = time
      }

      request = window.requestAnimationFrame(animateWords)
    }

    request = window.requestAnimationFrame(animateWords)

    return () => {
      window.cancelAnimationFrame(request)
    }
  }, [songRate])

  return (
    <div className="border-dashed border-4 border-slate-400 rounded-3xl p-2 w-full">
      <p className="text-3xl font-serif leading-loose h-80 overflow-y-auto text-center whitespace-pre-wrap">
        {segments}
      </p>
    </div>
  )
}
