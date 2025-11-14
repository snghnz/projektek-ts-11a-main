"use client";

import { useState } from "react";
import AlignmentBar from "@/app/flexbox/AlignmentBar";
import BackToMain from "@/components/BackToMain";

export type AlignOptions = {
  label: string; // pi.: Top
  value: string; // Tailwind classname: "items-start"
};

export default function FlexboxDemo() {
  const [vertical, setVertical] = useState("items-center");
  const [horizontal, setHorizontal] = useState("justify-center");
  // Feladat megoldása:

  const [divDb, setDivDb] = useState<number>(3);

  // className="flex" -> a főtengely vízszintes (ebben a feladatban vízszintes)
  // className="flex flex-col" -> a főtengely függőleges

  // Főtengelyre merőleges igazítások
  const verticalAlign: AlignOptions[] = [
    { label: "Top", value: "items-start" },
    { label: "Center", value: "items-center" },
    { label: "Bottom", value: "items-end" },
  ];

  // Főtengely irányú igaztítások
  const horizontalAlign: AlignOptions[] = [
    { label: "Left", value: "justify-start" },
    { label: "Center", value: "justify-center" },
    { label: "Right", value: "justify-end" },
    { label: "Space Between", value: "justify-between" },
    { label: "Space Around", value: "justify-around" },
  ];

  function setH(v: string) {
    setHorizontal(v);
    setDivDb((p) => p + 1);
  }

  function setV(v: string) {
    setVertical(v);
    setDivDb((p) => p + 1);
  }

  return (
    <div className="flex h-screen flex-col">
      <AlignmentBar
        aktValue={vertical}
        alignments={verticalAlign}
        setAlignment={setV}
        title="Vertical"
      />
      <div className={`flex flex-1 flex-wrap ${vertical} ${horizontal} gap-4 bg-pink-300 p-4`}>
        {/* AligmentBar helye */}

        {/* [...Array(3)] -> [undefined, undefined, undefined] */}
        {[...Array(divDb)].map((_, i) => (
          <div
            className="text-white1 flex h-24 w-24 items-center justify-center rounded-xl border border-pink-700 bg-pink-700 text-3xl font-bold shadow-xl"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <AlignmentBar
        aktValue={horizontal}
        alignments={horizontalAlign}
        setAlignment={setH}
        title="Horizontal"
      />
      <div className="flex flex-col justify-center items-center"><BackToMain /></div>
    
    </div>
  );
}
