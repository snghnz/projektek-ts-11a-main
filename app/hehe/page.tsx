"use client";

import BackToMain from "@/components/BackToMain";

import React, { useState } from "react";






export default function hehePage(){
  type Operation = "add" | "sub" | "mul" | "div";

 useState
  const [operation, setOperation] = useState<Operation>("add");
  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [resultMessage, setResultMessage] = useState<string>("");

  const generateNumbers = () => {
    const randA = Math.floor(Math.random() * 10);
    const randB = Math.floor(Math.random() * 10);
    setA(randA);
    setB(randB);
    setUserAnswer("");
    setResultMessage("");
  };

  const checkAnswer = () => {
    if (a === null || b === null) return;

    let correct: number;

    switch (operation) {
      case "add":
        correct = a + b;
        break;
      case "sub":
        correct = a - b;
        break;
      case "mul":
        correct = a * b;
        break;
      case "div":
        correct = Number((a / b).toFixed(2)); // rounded
        break;
    }

    const given = Number(userAnswer);

    if (given === correct) {
      setResultMessage("✅ Correct!");
    } else {
      setResultMessage(`❌ Wrong. Correct answer is: ${correct}`);
    }
  }
  
    return(
      
        
        <div className="flex flex-col min-h-screen items-center justify-center bg-pink-300">
            <h1 className=" font-extrabold">
                <span>A</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span> </span>
                <span>b</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
                <span>d</span>
                </h1>
                <div>
                  <select value={operation} onChange={(e) => setOperation(e.target.value as Operation)}>
                    
                    <option value="1">válassz</option>
                    <option value="2">összeadás</option>
                    <option value="3">kivonás</option>
                    <option value="4">osztás</option>
                    <option value="5">szorzás</option>
                  </select>

                  <button onClick={generateNumbers}>Generate Numbers</button>

      {a !== null && b !== null && (
        <>
          <h3>
            Solve: {a}{" "}
            {operation === "add"
              ? "+"
              : operation === "sub"
              ? "−"
              : operation === "mul"
              ? "×"
              : "÷"}{" "}
            {b}
          </h3>

          <input
            type="text"
            value={userAnswer}
          
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={checkAnswer}>Check</button>

          <p>{resultMessage}</p>
        </>
      )}
                </div>
        </div>
       
    );
  }
