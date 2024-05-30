'use client'
import { useEffect } from "react"



export default function Home() {
    useEffect(() => {
      const proof = document.getElementById("proof");
      proof.addEventListener("click", function() {
        window.open("http://localhost:3000/howtohelp")
      })
    }, [
  
    ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-white text-center">
          Document will load in a few seconds. 
          Information shared in this document <span className="font-bold">is</span> outdated. <br />The death toll is <span className="font-bold"> much higher</span> and the situation is way worse. <br /><span id="proof">Click here to help!</span>
        </h1>
      <iframe src="https://docs.google.com/gview?url=https://d3i6fh83elv35t.cloudfront.net/static/2024/01/192-20231228-app-01-00-en.pdf&embedded=true"   style={{ width:'1080px', height:'1920px' }} ></iframe>
      </div>
    </main>
  );
}
