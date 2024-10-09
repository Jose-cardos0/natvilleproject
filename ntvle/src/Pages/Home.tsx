//logo
import backgroundheader from "../assets/backgroundheader.svg";

//slider
import { Slider } from "../Components/Slider";

//3d
import { Cheese3D } from "../Components/Cheese";

export function Home() {
  return (
    <main>
      <header
        style={{
          backgroundImage: `url(${backgroundheader})`,
        }}
        className=" bg-center bg-cover min-h-screen min-w-full flex items-center justify-center"
      >
        <Slider />
      </header>
      <section className="min-w-full min-h-screen bg-[#f7f6f4]">
        <h1 className="text-red-600">Home</h1>
        <Cheese3D />
      </section>
    </main>
  );
}
