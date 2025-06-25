"use client";
import { Card, CardContent } from "@/components/ui/card";
import { darkTheme } from "@/theme/dark.theme";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Plano Silver",
    price: "R$ 29,90",
    features: ["Acesso a fotos básicas", "Conteúdo exclusivo limitado"],
  },
  {
    title: "Plano Bronze",
    price: "R$ 35,00",
    features: ["Acesso completo às fotos", "Vídeos exclusivos"],
  },
  {
    title: "Plano Gold",
    price: "R$ 50,00",
    features: [
      "Acesso total a todo conteúdo",
      "Ensaios fotográficos exclusivos",
      "Vídeos premium",
    ],
  },
];

function Subscription() {
  return (
    <section className="mt-15 flex flex-col items-center mb-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2
          className="text-xl font-bold text-center w-full"
          style={{ color: darkTheme.foreground, fontSize: 30 }}
        >
          Planos de Assinatura
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p
          className="text-md text-center mt-5 mb-10"
          style={{ color: darkTheme.foreground, maxWidth: "500px" }}
        >
          Escolha o plano perfeito para explorar meu mundo mágico e ter acesso a
          conteúdos exclusivos.
        </p>
      </motion.div>

      <div className="mt-5 mb-10 flex gap-5 flex-wrap justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1, type: "spring" }}
            className="mt-5 mb-10 flex gap-5 flex-wrap justify-center"
          >
            <Card
              key={index}
              className="pt-0 w-80 overflow-hidden rounded-sm cursor-pointer"
            >
              <div
                style={{ backgroundColor: "#f5e7fb" }}
                className="py-5 px-10 relative flex flex-col items-center"
              >
                <h2
                  className="font-bold"
                  style={{ color: "#7e22ce", fontSize: 22 }}
                >
                  {plan.title}
                </h2>
                <p
                  className="font-bold"
                  style={{ fontSize: 35, color: "#db2777" }}
                >
                  {plan.price}
                  <span
                    style={{ color: "#c46ef7", fontSize: 20, fontWeight: 400 }}
                  >
                    /mês
                  </span>
                </p>
              </div>
              <CardContent>
                {plan.features.map((feature, index) => (
                  <p style={{ color: "#f5e7fb" }} key={index}>
                    <span style={{ color: "#ec4899" }}>✦</span> {feature}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Subscription;
