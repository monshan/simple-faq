"use client"

import Question from "@/components/Question"
import data from "@/data"
import { useState } from "react"

export default function Home () {
  const [questions, setQuestions] = useState(data)

  return (
    <div className="w-screen h-screen">
      <h1 className="">Frequently Asked Questions</h1>
      <div className="grid gap-4">
        { questions.length ? 
          questions.map(({ question, answer }, i) => <Question key={`${question.substring(0, 10)}`} question={question} answer={answer} open={i === 0} />) :
          <p>No questions</p> 
        }
      </div>
    </div>
  )
}