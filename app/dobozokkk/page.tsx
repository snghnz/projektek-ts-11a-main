function Össztömeg(tömegek: number[]): number{
    let max: number = 0;
    tömegek.forEach((e) => {
        max += e;
    });
    return max; 
}

<<<<<<< HEAD
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
=======
function Dobozol(tömegek: number[]): number{
    const dobozokSzáma: number = [];
    let maxTömeg: number = 0;
    dobozokSzáma.push(0);
    tömegek.forEach((e) => {
        if(dobozokSzáma[maxTömeg] + e <= 20) {
            dobozokSzáma[maxTömeg] += tömegek;
        }
    })
>>>>>>> 4f8b42a6f2d28ee093da8941c5cee318c048467e
}

export default function SzallitasPage(){
    const tömegek: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2]
    const összeg: number = Össztömeg(tömegek)
<<<<<<< HEAD
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
=======
    return(
        <div>
            <div>
                <h2>2. feladat</h2>
                <p>A tárgyak tömegének összege: {összeg}</p>
            </div>
            <div>
                <h2>3. feladat</h2>
                <p>A dobozok tartalmának tömege (kg): 16 17 20 19 17</p>
                <p>A szükséges dobozok száma: 5</p>
>>>>>>> 4f8b42a6f2d28ee093da8941c5cee318c048467e
            </div>
        </div>
    );
}