function Össztömeg(tömegek: number[]): number{
    let max: number = 0;
    tömegek.forEach((e) => {
        max += e;
    });
    return max; 
}

function Dobozol(tömegek: number[]): number{
    const dobozokSzáma: number = [];
    let maxTömeg: number = 0;
    dobozokSzáma.push(0);
    tömegek.forEach((e) => {
        if(dobozokSzáma[maxTömeg] + e <= 20) {
            dobozokSzáma[maxTömeg] += tömegek;
        }
    })
}

export default function SzallitasPage(){
    const tömegek: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2]
    const összeg: number = Össztömeg(tömegek)
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
            </div>
        </div>
    );
}