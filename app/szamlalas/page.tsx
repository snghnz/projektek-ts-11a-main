"use client";

type StatItem = {
    óra: number;
    áthaladók: number;
}

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

function Patrik(mérések: number[]): number{
 //hf
}
function patrikido(index: number): string{
  return "6:30"
}

export default function SzamlalasPage(){
    const mérések: number[] = [36, 48, 39, -1, 30, 43, -1, 76, 67, 82, 73, 75, 64, 73, 69, 63]
    const összesÁthaladás: number = szumÁthaladások(mérések);

    const stat: StatItem[] = [];
    for (let óra = 6;  óra <= 9; óra++){
        stat.push({óra, áthaladók: áthaladóKerékpárosok(mérések, óra)})
    }

    const áthaladásMax = Math

    return(
      <div className="flex min-h-screen flex-col items-center bg-gray-200 p-6 text-gray-800">
      <h1 className="text-3xl font-bold">Forgalomszámlálás</h1>
      <div className="max-v-lg w-full rounded-2xl bg-white shadow-md">
        <h2 className="font-bold">2. feladat</h2>
        <p>Összesen <span className="font-bold">{összesÁthaladás}</span>. kerékpárost számoltak</p>
      </div>
      <div className="mt-3 w-full p-2">
        <h2 className="font-bold">3. feladat</h2>
        <h2 className="font-bold">Óránkénti mérések</h2>
        <div>
          {stat.map(e => (
            <div key={e.óra}>
              <div className="flex justify-between text-md">
                <span>{e.óra}:00</span>
                <span>{e.áthaladók} fő</span>
              </div>
              <div className="h-3 rounded-full bg-blue-200 shadow-md">
                <div className="h-3 rounded-full bg-blue-500 shadow-md" style={{width: `${e.áthaladók / áthaladásMax *100}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}