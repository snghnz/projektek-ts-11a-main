"use client";

function szumÁthaladások(mérések: number[]): number {
  let összeg: number = 0;
  mérések.forEach((e) => {
    if (e != -1) összeg += e;
  });
  return összeg;
}

function áthaladóKerékpárosok(mérések: number[], óra: number){
    const startIndex = (óra - 6) * 4;
    let összeg: number = 0;
    for (let i = 0; i < startIndex + 4; i++) {
        if (mérések[i] !=  -1) összeg += mérések[i]  
    }
    return összeg;
}

export default function SzamlalasPage(){
    const mérések: number[] = [36, 48, 39, -1, 30, 43, -1, 76, 67, 82, 73, 75, 64, 73, 69, 63]
    const összesÁthaladás: number = szumÁthaladások(mérések);
    return(
        <div className="flex min-h-screen flex-col items-center bg-gray-200 p-6 text-gray-800">
      <h1 className="text-3xl font-bold">Forgalomszámlálás</h1>
      <div className="max-v-lg w-full rounded-2xl bg-white shadow-md">
        <h2 className="font-bold">2. feladat</h2>
        <p>Összesen <span className="font-bold">{összesÁthaladás}</span>. kerékpárost számoltak</p>
      </div>
    </div>
    );
}