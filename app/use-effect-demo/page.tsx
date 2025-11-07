"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UseEffectDemo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  // const [message, setMessage] = useState("");

  useEffect(() => {
    toast.success("Oldal betöltve!");
  }, []);

  useEffect(() => {
    toast("Oldal renderelve!", { icon: "👀" });
  });

  let message = "";
  if (name && age) {
    message = `Szia ${name}, Te ${age} éves vagy!`;
  } else if (name) {
    message = `Szia ${name}! Add meg az életkorodat is!`;
  } else if (age) {
    message = `Megadtad az életkorod (${age}), de mi a neved?`;
  }

  // useEffect(() => {
  //   if (name && age) {
  //     setMessage(`Szia ${name}, Te ${age} éves vagy!`);
  //   } else if (name) {
  //     setMessage(`Szia ${name}! Adjad meg az élekorodat is!`);
  //   } else if (age) {
  //     setMessage(`Beírtad, hogy ${age} éves vagy. Add meg a neved is!`);
  //   } else {
  //     setMessage("Kérlek, add meg a neved és az életkorod is!");
  //   }
  // }, [name, age]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-100 space-y-4 rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1>useEffect demo page</h1>
        <p className="text-2xl text-gray-700">{message}</p>
        <input
          className="input input-primary"
          placeholder="Kérem a neved!"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input input-primary"
          placeholder="Életkorod..."
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value == "" ? "" : Number(e.target.value))}
        />
      </div>
    </main>
  );
}
