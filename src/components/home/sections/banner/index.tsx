import { Button } from "@/components/ui/button";
import AnimatedDot from "./AnimatedDot";
import { darkTheme } from "@/theme/dark.theme";
import BlurText from "@/components/ui/blurText";

function Banner() {
  return (
    <div
      style={{
        // backgroundColor: darkTheme.backgroundHeader,
        backgroundImage: "url('./images/banner.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen h-screen w-full flex flex-col items-center justify-center relative"
    >
      {/* <img className="absolute left-1/6 w- " src="./banner1.jpg" /> */}
      <AnimatedDot
        color="#b454e9"
        size={10}
        initialX={200}
        initialY={0}
        finalX={200}
        finalY={100}
      />
      <AnimatedDot
        color="#be185d"
        size={15}
        initialX={0}
        initialY={-150}
        finalX={0}
        finalY={0}
      />
      <AnimatedDot
        color="#b454e9"
        size={10}
        initialX={-250}
        initialY={0}
        finalX={-200}
        finalY={150}
      />
      {/* <img className="hidden lg:block absolute left-1/6 w-80 " src={polotno} /> */}
      <div style={{ zIndex: 10 }}>
        <i>
          <p
            className="text-md text-center text-2xl text-shadow-zinc-800 text-shadow-lg"
            style={{ color: darkTheme.foreground }}
          >
            Meu mundo encantado
          </p>
          <p
            className="text-lg text-center mt-10 text-shadow-zinc-800 text-shadow-lg"
            style={{ color: darkTheme.foreground, maxWidth: "500px" }}
          >
            Bem-vindo ao meu reino mágico, onde compartilho momentos especiais e
            encantadores. Entre no meu universo místico cheio de surpresas e
            encantos.
          </p>
        </i>
        <div className="flex px-2 gap-5 mt-10 justify-center">
          <Button
            style={{
              borderRadius: 30,
              padding: "20px 40px",
              background: darkTheme.bgButton,
            }}
            className="text-white cursor-pointer"
          >
            Crie sua conta e veja mais
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
