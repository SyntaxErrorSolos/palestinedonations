'use client'
import { useEffect } from "react"



export default function Home() {
    useEffect(() => {
      const proof = document.getElementById("proof");
      proof.addEventListener("click", function() {
        window.open("https://savegaza.vercel.app/howtohelp")
      })
    }, [
  
    ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
    <div className="text-white text-center">
      <h1>
        Document will load in a few seconds. 
        Information shared in this document <span className="font-bold">is</span> outdated. <br />The death toll is <span className="font-bold">much higher</span> and the situation is way worse. <br /><span id="proof">Click here to help!</span>
      </h1>
      <iframe src="https://docs.google.com/gview?url=https://d3i6fh83elv35t.cloudfront.net/static/2024/01/192-20231228-app-01-00-en.pdf&embedded=true" className="w-full max-w-screen-lg mx-auto mt-8" style={{ height: '75vh' }}></iframe>
    </div>
  </main>
  
  );
}
