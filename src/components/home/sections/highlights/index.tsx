"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { darkTheme } from "@/theme/dark.theme";

type Props = {
  images: (string | Blob | undefined)[];
};

function HighLights({ images }: Props) {
  return (
    <section className="mt-20 flex flex-col items-center">
      <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <h2
          className="text-center text-xl font-bold"
          style={{ color: darkTheme.foreground, fontSize: 30 }}
        >
          Destaques Mágicos
        </h2>
      </motion.div>
      <motion.div
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <p
          className="text-md text-center mt-5"
          style={{ color: darkTheme.foreground, maxWidth: "500px" }}
        >
          Bem-vindo ao meu reino mágico, onde compartilho momentos especiais e
          encantadores. Entre no meu universo místico cheio de surpresas e
          encantos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-5 mb-10 flex gap-5 flex-wrap justify-center"
      >
        {images.map((image, index) => (
          <Card
            style={{ backgroundColor: "#ecd6fa" }}
            key={index}
            className="overflow-hidden rounded-sm max-w-11/12"
          >
            <div className="relative">
              <img
                style={{ filter: "blur(10px)" }}
                alt="brand-image"
                src={image}
                className="w-full max-h-48"
              />
              <Button
                style={{
                  borderRadius: 30,
                  padding: "20px 40px",
                  background: darkTheme.bgButton,
                  border: "none",
                }}
                className="border-none absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                Assine para Ver
              </Button>
            </div>
            <CardContent>
              <h3
                style={{ color: darkTheme.backgroundHeader }}
                className="text-lg font-bold uppercase mb-5"
              >
                Magia ao Luar
              </h3>
              <p style={{ color: "#6117a7" }}>
                Momentos especiais sob a luz da lua cheia.
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-5 mb-10 flex gap-5 flex-wrap justify-center"
      >
        <Button
          style={{
            borderRadius: 30,
            padding: "20px 40px",
            background:
              "linear-gradient(90deg,rgba(255, 78, 147, 1) 0%, rgba(197, 87, 199, 1) 64%, rgba(178, 83, 237, 1) 100%)",
          }}
        >
          Ver Mais Conteúdo
        </Button>
      </motion.div>
    </section>
  );
}

export default HighLights;
