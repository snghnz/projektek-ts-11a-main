"use client";

import { useState } from "react";

function ezMegszerkeszthető(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && c + b > a;
}

function ezDerékszögű(a: number, b: number, c: number) {
  // 1. Megoldás sort():
  // const old: number[] = [a, b, c];
  // old.sort();
  // return old[0] ** 2 + old[1] ** 2 == old[2] ** 2

  // 2. Matematikai megoldás:
  // const átfogó = Math.max(a, b, c);
  // const szum = a + b + c;
  // const befogó1 = szum - átfogó - Math.min(a, b, c); // nagyobb befogó
  // const befogó2 = szum - átfogó - befogó1; // rövidebb befogó
  // return befogó1 ** 2 + befogó2 ** 2 == átfogó ** 2;

  // 3. Megoldás filter()-el
  // const átfogó = Math.max(a, b, c);
  // const befogók = [a, b, c].filter((e) => e != átfogó);
  // const [b1, b2] = befogók; // tömb destrukturálás
  // return b1 ** 2 + b2 ** 2 == átfogó ** 2;

  // 4. Megoldás íf-ek használatával
  const átfogó = Math.max(a, b, c);
  if (a == átfogó) return b ** 2 + c ** 2 == a ** 2;
  if (b == átfogó) return a ** 2 + c ** 2 == b ** 2;
  return a ** 2 + b ** 2 == c ** 2;
}

function kerület(a: number, b: number, c: number) {
  return a + b + c;
}

// function területDerékszög(a: number, b: number, c: number) {
//   const oldalak: number[] = [a, b, c];
//   oldalak.sort();
//   return (oldalak[0] * oldalak[1]) / 2;
// }

// function területHeron(a: number, b: number, c: number) {
//   const s: number = kerület(a, b, c) / 2;
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

function terület(a: number, b: number, c: number) {
  if (ezDerékszögű(a, b, c)) {
    const átfogó = Math.max(a, b, c);
    const befogók = [a, b, c].filter((e) => e != átfogó);
    const [b1, b2] = befogók; // tömb destrukturálás
    return (b1 * b2) / 2;
  } else {
    const s: number = kerület(a, b, c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export default function HaromszogPage() {
  const [_a, set_a] = useState("3");
  const [_b, set_b] = useState("4");
  const [_c, set_c] = useState("5");

  let ker: number = 0;
  let ter: number = 0;

  const a: number = _a == "" ? NaN : Number(_a); // Number("") == 0, de mi NaN konstans szeretnénk
  const b: number = _b == "" ? NaN : Number(_b);
  const c: number = _c == "" ? NaN : Number(_c);

  let hiba: string = ""; // feltételezzük, hogy nincs hiba, üres sztring

  // Sikeres volt az átalakítás?
  // if (
  //   isNaN(a) ||
  //   isNaN(b) ||
  //   isNaN(c)
  // )
  //   hiba = 'Konverziós hiba';

  if ([a, b, c].some((e) => isNaN(e))) {
    hiba = "Konverziós hiba!";
  } else if (ezMegszerkeszthető(a, b, c)) {
    ker = kerület(a, b, c);
    ter = terület(a, b, c);
  } else {
    hiba = "Nem szerkeszthető";
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col gap-y-5 rounded-lg bg-white p-5 shadow-lg">
        <h1 className="text-2xl font-bold">Háromszög területe és kerülete</h1>
        <p>
          a =
          <input
            className="input input-primary"
            type="text"
            value={_a}
            onChange={(e) => set_a(e.target.value)}
          />
        </p>
        <p>
          b =
          <input
            className="input input-primary"
            type="text"
            value={_b}
            onChange={(e) => set_b(e.target.value)}
          />
        </p>
        <p>
          c =
          <input
            className="input input-primary"
            type="text"
            value={_c}
            onChange={(e) => set_c(e.target.value)}
          />
        </p>
        <div>
          {hiba ? (
            <h1>{hiba}</h1>
          ) : (
            <div>
              {ezDerékszögű(a, b, c) ? (
                <h1>Derékszögű a háromszög</h1>
              ) : (
                <h1>Általános háromszög</h1>
              )}
              <h1>Kerület: {ker}</h1>
              <h1>Terület: {ter}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
