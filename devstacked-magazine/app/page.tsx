import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold mb-8">
        Turning Ideas Into Digital Reality
      </h1>
      <p className="text-lg mb-16">
        Your go-to source for the latest in web development, programming, and
        technology trends.
      </p>
      <Image
        src="/magazine-cover.jpg"
        alt="DevStacked Magazine Cover"
        width={600}
        height={800}
        className="rounded-lg shadow-lg"
      />
    </main>
  );
}
