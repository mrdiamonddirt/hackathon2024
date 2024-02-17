import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ReviewFluence</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div>
          <img src="Logo.png" alt="ReviewFluence Logo" className="h-32 w-auto" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">ReviewFluence</h1>
      </header>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-8">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-1 my-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <ul>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 1</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 2</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 3</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 4</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 5</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 6</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 7</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 8</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 9</button></li>
              <li><button className="w-1/2 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">Product 10</button></li>
            </ul>
          </div>
          <div className="col-span-2">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Welcome to ReviewFluence</h2>
              <p>ReviewFluence aggregates product reviews into concise summaries, streamlining the user's research process by condensing multiple reviews into one, saving valuable time. 💡</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <ul>
                <li>Positive</li>
                <li>Neutral</li>
                <li>Negative</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Summarisation</h2>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 ReviewFluence. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
