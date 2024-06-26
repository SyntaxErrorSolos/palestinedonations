'use client'
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const proof = document.getElementById("proof");
    proof.addEventListener("click", function() {
      window.open("https://savegaza.vercel.app/genocide")
    })
  }, [

  ]);
  return (
<main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
  <div>
    <h1 className="text-center text-5xl md:text-9xl text-white">
      Youre witnessing a <span className="font-bold bg-gradient-to-r from-[#E4312b]  via-white to-[#149954] bg-clip-text text-transparent">genocide</span>!
    </h1>
    <h2 className="text-3xl md:text-5xl text-center text-white">
      Heres <span className="text-transparent bg-gradient-to-r from-[#005EB8] to-white bg-clip-text hover:underline cursor-pointer" id="proof">proof</span>.
    </h2>
  </div>
</main>

  );
}
