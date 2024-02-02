import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [arrayOfAnswers, setArrayOfAnswers] = useState<string[]>([]);

  type Question = {
    question: string;
    type: string;
    options: ["Yes", "No"];
    conditions?: string[];
  };

  const questions: Question[] = [
    {
      question: "Are you a female?",
      type: "simple",
      options: ["Yes", "No"],
    },
    {
      question: "Are you aged between 18 and 65?",
      type: "simple",
      options: ["Yes", "No"],
    },
    {
      question: "Have you been diagnosed with any of the following?",
      conditions: [
        "Kidney or liver problems",
        "Heart problems such as an irregular or fast heartbeat or angina",
        "Epilepsy",
      ],
      type: "list",
      options: ["Yes", "No"],
    },
    {
      question: "Do you drink alcohol?",
      type: "simple",
      options: ["Yes", "No"],
    },
    {
      question: "Are you using any other treatments for alergy?",
      type: "simple",
      options: ["Yes", "No"],
    },
  ];

  const showNextQuestion = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1);
  };
  const saveAnswer = (value: string) => {
    const results = [...arrayOfAnswers];
    results.push(value);
    setArrayOfAnswers(results);
    showNextQuestion();
  };

  class Answer {
    question: string;
    answer: string;
    options: string[];
    conditions?: string[];

    constructor(_question: Question, _index: number) {
      (this.question = _question.question),
        (this.answer = arrayOfAnswers[_index]),
        (this.options = _question.options),
        (this.conditions = _question.conditions);
      if (typeof _question.conditions === "undefined") {
        delete this.conditions;
      }
    }
  }

  const sendForReview = () => {
    const result = [];
    const submission = questions.map((question, index) => {
      return new Answer(question, index);
    });
    result.push(submission);
    console.log(submission, "result");
    window.alert("Results were submitted! In this case console logged");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly">
      {/* NAVBAR WITH LOGO */}
      <Navbar />
      {/* MINI CARD WITH CONDITION TO CURE */}
      <div className="mt-15 flex flex-col w-full h-min justify-around items-center">
        <Card title="Allergy" image="../src/assets/allergyImage.jpg" />
      </div>

      {/* QUESTIONS */}
      <div className="px-10 mb-20">
        {questions[questionIndex] === undefined ? (
          <p className="font-bold text-md w-auto">
            Thank you! Submit your answers now and your application will be
            reviewed shortly.
          </p>
        ) : questions[questionIndex].type === "list" ? (
          <>
            <p className="font-bold text-md">
              {questions[questionIndex].question}
            </p>
            <ul className="list-disc text-left">
              {questions[questionIndex].conditions?.map((option, index) => (
                <li key={index} className="ml-4 text-sm font-normal w-full">
                  {option}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="font-bold text-md">
            {questions[questionIndex].question}
          </p>
        )}
        {arrayOfAnswers.length === questions.length ? (
          <div className="flex items-center justify-center mt-3">
            <button onClick={() => sendForReview()}>Submit</button>
          </div>
        ) : (
          <div className="flex items-center justify-evenly mt-3">
            {questions[questionIndex].options.map((option, index) => {
              return (
                <button key={index} onClick={() => saveAnswer(option)}>
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
