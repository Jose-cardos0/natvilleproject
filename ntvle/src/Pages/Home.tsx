//logo

//slider
import { Slider } from "../Components/Slider";

//3d
import { Cheese3D } from "../Components/Cheese";

export function Home() {
  return (
    <main>
      <header
        className="bg-center bg-cover min-h-screen min-w-full
       flex items-center justify-center bg-[#56bac8]"
      >
        <Slider />
      </header>
      <section
        className="h-3/6 
      bg-[#56bac8] flex items-center justify-center "
      >
        <h1 className="text-white font-bold text-6xl">
          CONHEÇA <br /> NOSSO CARRO <br />
          CHEFE
        </h1>
        <Cheese3D />
      </section>
    </main>
  );
}
