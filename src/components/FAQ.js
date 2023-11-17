import Question from "./Question"
import data from "../data"
import { useState } from "react";
import { LayoutGroup } from "framer-motion";

export default function FAQ() {
    const [questions, setQuestions] = useState(data);

    return (
      <div className="flex-col px-4 xl:px-12">
        <h1 className="text-center text-4xl pt-12 pb-16 font-bold">Frequently Asked Questions 📝</h1>
        <div className="grid gap-4">
          <LayoutGroup>
            {questions.length ? (
              questions.map((props, i) => (
                <Question key={`${props.question.substring(0, 20)}`} {...props} open={i === 0} />
              ))
            ) : (
              <p>No questions</p>
            )}
          </LayoutGroup>
        </div>
      </div>
    );
}