import React, { useEffect, useRef } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { currentWordAtom, newWordAtom } from "../store"

export default function Palavra({ index, word }) {
  const elementRef = useRef(null)
  const currentWord = useAtomValue(currentWordAtom)
  const setNewWord = useSetAtom(newWordAtom)

  useEffect(() => {
    if (index !== currentWord || elementRef.current === null) return
    // Scroll the higlighted word into view
    elementRef.current.scrollIntoView()
  }, [currentWord])

  // Override the value for the current word when clicked
  const onClick = () => {
    setNewWord(index)
  }

  let highlight

  const distanceToCurrent = Math.abs(index - currentWord)

  if (index === currentWord) {
    highlight = "text-purple-800 font-bold border-2 p-2 rounded-xl"
  } else if (distanceToCurrent == 1) {
    highlight = "text-purple-400"
  } else {
    highlight = "text-gray-700"
  }

  return (
    <span
      ref={elementRef}
      className={`cursor-pointer translate-y-20 ${highlight}`}
      onClick={onClick}
      title="Skip here"
    >
      {word}
    </span>
  )
}
