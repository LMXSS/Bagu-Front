import { Card } from "@/components/ui/card";

function Footer() {
  return (
    <Card className="flex flex-col items-center justify-center w-full p-10">
      <h2
        className="text-center text-lg font-bold"
        style={{
          fontSize: 25,
          fontFamily:
            'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        }}
      >
        Fadinha Maju
      </h2>
      <p>© 2025 Todos os direitos reservados</p>

      <div className="flex gap-5">
        <a style={{ fontWeight: 400, marginTop: 10 }} href="#">
          Termos de Uso
        </a>
        <a style={{ fontWeight: 400, marginTop: 10 }} href="#">
          Privacidade
        </a>
        <a style={{ fontWeight: 400, marginTop: 10 }} href="#">
          Contato
        </a>
      </div>
      <small style={{ fontWeight: 400, marginTop: 10 }}>
        Site para maiores de 18 anos. Todo o conteúdo é protegido por direitos
        autorais.
      </small>
    </Card>
  );
}

export default Footer;
