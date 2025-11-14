function Össztömeg(tömegek: number[]): number{
    let max: number = 0;
    tömegek.forEach((e) => {
        max += e;
    });
    return max; 
}

function dobozol(tömegek: number[]): number[] {
  const dobozok: number[] = [];
  let aktIndex: number = 0;
  dobozok.push(0); // Első üres dobozt létrehozom
  tömegek.forEach((t) => {
    if (dobozok[aktIndex] + t <= 20) {
      dobozok[aktIndex] += t; // Ha még belefér az aztuális dobozba
    } else {
      dobozok.push(t); // Új dobozt kellet nyitni a tárgy tárolásához
      aktIndex++;
    }
  });
  return dobozok;
}

export default function SzallitasPage(){
    const tömegek: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2]
    const összeg: number = Össztömeg(tömegek)
    const dobozok: number[] = dobozol(tömegek)
    return(
        <div className="flex min-h-screen flex-col items-center space-y-6 bg-gray-200 p-6 text-gray-800">
            <h1 className="text-3xl font-bold">Szállítás</h1>
            <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
                <h2 className="font-bold">2. feladat</h2>
                <p>A tárgyak tömegének összege: {összeg}</p>
            </div>
            <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
                <h2 className="font-bold">3. feladat</h2>
                <h2 className="font-bold">Dobozok telítettsége</h2>
                <div>
          {dobozok.map((e, i) => (
            <div key={i}>
              <div className="text-md flex justify-between">
                <span>{i + 1}.</span>
                <span>{e} kg</span>
              </div>
              <div className="h-3 rounded-full bg-blue-200 shadow-md">
                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{ width: `${(e / 20) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
          <h2 className="font-bold">Dobozok száma: {dobozok.length} db</h2>
        </div>
            </div>
        </div>
    );
}