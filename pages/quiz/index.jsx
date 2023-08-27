"use client";
import Header from "@/components/Header";
import { quiz } from "../api/data/index.js";
import React, { useState } from "react";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-10 gap-2">
        <div className="text-white text-center">
          <h1 className="text-3xl tracking-wider font-bold">Başarılar</h1>
          <span>
            Sorular: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </span>
        </div>
        {!showResult ? (
          <div className="bg-white w-[500px] h-[300px] rounded-md px-6">
            <h2 className="font-bold text-center p-2">
              {questions[activeQuestion].question}
            </h2>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx
                    ? "bg-green-300 p-2 border border-green-300 mb-3 cursor-pointer"
                    : "hover:bg-gray-300 p-2 border border-gray-300 mb-3 cursor-pointer"
                }
              >
                <span className="">{answer}</span>
              </li>
            ))}
            {checked ? (
              <button
                className="bg-gray-300 py-1.5 font-bold tracking-wider w-full rounded-md"
                onClick={nextQuestion}
              >
                {activeQuestion === question.length - 1 ? "Bitti" : "İleri"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-gray-200 py-1.5 font-bold tracking-wider w-full rounded-md"
                disabled
              >
                {activeQuestion === question.length - 1 ? "Bitti" : "İleri"}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white w-[500px] h-[200px] rounded-md flex flex-col items-center justify-center gap-1">
            <h3 className="p-1 border px-10 rounded-md border-gray-300">Doğru <span className="text-green-600">{result.correctAnswers}</span></h3>
            <h2 className="p-1 border px-10 rounded-md border-gray-300">Yanlış <span className="text-red-600">{result.wrongAnswers}</span></h2>
            <h1 className="p-1 border px-10 rounded-md border-gray-300">Puan <b>{(result.score / 25) * 100}</b>%</h1>
            <h4 className="p-1 border px-10 rounded-md border-gray-300">Toplam Puan <b>{result.score}</b></h4>
            <button onClick={() => window.location.reload()} className="bg-gray-300 py-1.5 font-bold tracking-wider w-full rounded-md">
              Baştan başla
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
