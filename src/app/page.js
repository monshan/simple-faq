"use client"

import Question from "@/components/Question"
import data from "@/data"
import { useEffect, useState } from "react"

export default function Home () {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setQuestions(data)
      setLoading(false);
    }, 1500);
  }, [])

  return (
    <div className="w-screen h-full">
      <h1>Frequently Asked Questions</h1>
      { questions.length ? 
        questions.map(({ question, answer}) => <Question key={`ques_${question.substring(0, 10)}`} answer={answer} />) :
        <p>No questions</p> 
      }
    </div>
  )
}