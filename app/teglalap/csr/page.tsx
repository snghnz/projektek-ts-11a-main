"use client";

// ez egy Client Side Rendered (CSR) oldal
import { useState } from "react";

export default function TeglalapClientPage() {
  
  // useState hook a reaktív változók létrehozásához
  // reaktív -> ha változik az értékük, újrarenderelődik a komponens, látható a változás az oldalon
  const [a, setA] = useState<number>(3); // explicit megadtuk a típusát
  const [b, setB] = useState(4); // implicit módon a 4-ből következtet a típusra

  const kerület = 2 * (a + b); // "a" vagy "b" változása esetén újra lefut a függvény
  const terület = a * b; // így a kerület és terület is mindig új értéket kap

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="shadow-lg0 flex w-100 flex-col gap-y-3 rounded-lg bg-white p-5 font-mono">
        <p>Téglalap kerülete és területe</p>
        <p>
          a oldal:
          <input
            className="input ml-2 h-9 w-36 input-primary"
            min={0}
            step="any"
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </p>
        <p>
          b oldal:
          <input
            className="input ml-2 h-9 w-36 input-primary"
            min={0}
            step="any"
            type="number"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </p>
        {/* Kétágú elágazás feltételes (?:) operátorral */}
        {a > 0 && b > 0 ? (
          <div>
            <p>Kerület: {kerület}</p>
            <p>Terület: {terület}</p>
          </div>
        ) : (
          <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
        )}
      </div>
    </div>
  );
}
