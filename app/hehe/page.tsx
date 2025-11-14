import BackToMain from "@/components/BackToMain";

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

export default function hehePage(){
    return(
        
        <div className="flex flex-col min-h-screen bg-pink-300">
            <h1 className=" font-extrabold">
                <span>A</span>
                <span>r</span>
                <span>e</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>b</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
                <span>d</span>
                </h1>
        </div>
        
    );
}