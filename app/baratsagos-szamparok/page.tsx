"use client";

import { useState } from "react";
import toast from "react-hot-toast";

// Baratságos számpárokat tároló objektum típusának a definiálása
// Objektum mezői: "a" és "b", típusaik: number
type PárItem = { ssz: number, a: number; b: number };

function osztókÖsszeg(n: number): number {
  if (n <= 1) return 0;
  let összeg: number = 1;
  for (let e = 2; e * e < n; e++) {
    if (n % e == 0) {
      összeg += e;
      const osztó_pár: number = n / e;
      if (osztó_pár != e) összeg += osztó_pár;
    }
  }
  return összeg;
}

// Az n paraméter a párok darabszámát határozza meg: Az első n darab pár
// "a" és "b" barárságos pár, ha a == osztókÖsszeg(b) és b == osztókÖsszeg(a)
async function barárságosSzámpárokKeresése(
  count: number,
  setPárok: React.Dispatch<React.SetStateAction<PárItem[]>>,
) {
  let a: number = 220;
  let párokSzáma: number = 0;
  while (párokSzáma < count) {
    const b: number = osztókÖsszeg(a);
    if (b > a && a == osztókÖsszeg(b)) {
      párokSzáma++;
      setPárok((prev) => [{ ssz: párokSzáma, a, b }, ...prev]);
      // Várkozás 1 ezredmásodpercre, hogy lehetőséget kapjon a React render futtatására
      await new Promise(resolve => setTimeout(resolve, 1));
    }
    a++;
  }
}

export default function BaratsagosSzamparokPage() {
  // State változó a párok számának bekérésére
  const [párokSzáma, setPárokSzáma] = useState<number | "">(5);
  // State változó a barátságos számpárok tárolásához
  const [baripárok, setBaripárok] = useState<PárItem[]>([]);
  // State változó a számítási folyamat jelzésére
  const [isWorking, setIsWorking] = useState(false);

  async function keresés() {
    if (párokSzáma != "" && (párokSzáma < 1 || párokSzáma > 50)) {
      toast.error("Kérem 1 és 50 közötti számot adjon meg!");
      return;
    }
    setIsWorking(true);
    setBaripárok([]); // Régi párok törlése
    await barárságosSzámpárokKeresése(párokSzáma as number, setBaripárok);
    setIsWorking(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-center space-y-3 bg-gray-200 p-6">
      <h1 className="text-3xl">Barátságos számpárok</h1>
      <div>
        <label htmlFor="darabszam">Párok száma</label>
        <input
          className="input input-primary"
          type="text"
          value={párokSzáma}
          onChange={(e) => setPárokSzáma(e.target.value == "" ? "" : Number(e.target.value) || "")}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={keresés}>
          {isWorking ? "Keresés folyamatban ..." : "Keresés indítása"}
        </button>
      </div>
      <div className="rounded-xl bg-white p-3 shadow-xl">
        <h1 className="font-bold">Megtalált párok</h1>
        <ul>
          {baripárok.map((pár, i) => (
            <li key={i}>
              {pár.ssz}. ({pár.a} - {pár.b})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
