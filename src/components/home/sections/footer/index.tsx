function Footer() {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg,rgba(233, 213, 254, 1) 0%, rgba(233, 213, 254, 1) 54%, rgba(240, 199, 223, 1) 100%)",
      }}
      className="flex flex-col items-center justify-center w-full p-10"
    >
      <h2
        className="text-center text-lg font-bold"
        style={{
          color: "#7e22ce",
          fontSize: 25,
          fontFamily:
            'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        }}
      >
        Fadinha Maju
      </h2>
      <p style={{ color: "#9333ea" }}>© 2025 Todos os direitos reservados</p>

      <div className="flex gap-5">
        <a
          style={{ color: "#9333ea", fontWeight: 400, marginTop: 10 }}
          href="#"
        >
          Termos de Uso
        </a>
        <a
          style={{ color: "#9333ea", fontWeight: 400, marginTop: 10 }}
          href="#"
        >
          Privacidade
        </a>
        <a
          style={{ color: "#9333ea", fontWeight: 400, marginTop: 10 }}
          href="#"
        >
          Contato
        </a>
      </div>
      <small style={{ color: "#a24ef0", fontWeight: 400, marginTop: 10 }}>
        Site para maiores de 18 anos. Todo o conteúdo é protegido por direitos
        autorais.
      </small>
    </div>
  );
}

export default Footer;
