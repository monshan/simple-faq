"use client"

import { useState } from "react";
import Question from "@/components/Question";
import data from "@/data";


export default function Home() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="w-screen h-screen">
      <h1 className="">Frequently Asked Questions</h1>
      <div className="grid gap-4">
        {questions.length ? (
          questions.map((props, i) => (
            <Question key={`${props.question.substring(0, 20)}`} {...props} />
          ))
        ) : (
          <p>No questions</p>
        )}
      </div>
    </div>
  );
}