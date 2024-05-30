import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-9xl font-bold text-white text-center">
            Want to help?
        </h1>
        <h2 className="text-white text-5xl text-center">
            Step 1: Spread the word
            <br />
            <span className="font-light text-3xl text-neutral-400">
                Use the hashtag stopthis all across social media to spread the word!
            </span>
            <br />
            Step 2: Share your reason!
            <br />
            <span className="font-light text-3xl text-neutral-400">If possible, share this website with others or any other website, video or any form of media that shows the pain the Palestinans go through!</span>
            <br />
            Step 3: Donate
            <br />
            <span className="font-light text-3xl text-neutral-400">If possible, donate to the cause! Every dollar helps!</span>
        </h2>
      </div>
    </main>
  );
}
