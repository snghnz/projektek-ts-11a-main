"use client";

import { useState } from "react";
import BackToMain from "@/components/BackToMain";
import { IncrementButton } from "./IncrementButton";

export default function CounterPage() {
  // let counter: number = 0;
  // useState egy React Hook, ami egy változót és egy függvényt ad vissza egy tömbben
  // a változó értékének beállítására
  // tömb destruktúrálással vesszük ki a tömbből a két (counter, setCounter) elemet:
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-200">
      <div className="flex flex-col items-center justify-center gap-y-3 rounded-xl bg-pink-100 p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Egyszerű számláló</h1>
        <p className="text-5xl font-bold text-shadow-pink-800 text-pink-900">{counter}</p>
        <IncrementButton onIncrement={() => setCounter((p) => p + 1)} />
        <BackToMain />
      </div>
    </div>
  );
}
