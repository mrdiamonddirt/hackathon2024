import Header from "../components/Header";
import Barchart from "@/components/Barchart"
import Items from "@/components/Items"
// import Linechart from "@/components/Linechart"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  // const session = useSession()


  return (
    <>

      <Header />


      <main className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
             <Items />
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div className="col-span-2 flex">
              <div>
                <h2 className="text-xl font-semibold mb-4">Summarisation</h2>

                <p>
                  ReviewFluence aggregates product reviews into concise
                  summaries, streamlining the user's research process by
                  condensing multiple reviews into one, saving valuable time. 💡
                </p>
              </div>
              <div className="text-xl relative font-semibold mb-4 col-span-3 flex flex-col items-center">
                <img src="Logo.png" alt="ReviewFluence Logo" />
                <h2>Product Name</h2>
                <p className="text-center">Product description</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <ul className="text-lg font-semibold mb-2">Positive</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Neutral</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Negative</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mb-8 flex mx-auto items-center justify-center">
         <Barchart />
         {/* <Linechart /> */}
         
          <img
            src="thumbnail_line_plot.png"
            alt="line_plot"
            className="h-32 w-auto"
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; Hackathon 2024 ReviewFluence.
        </div>
      </footer>
    </>
  );
}
