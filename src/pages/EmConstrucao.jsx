import './EmConstrucao.css'

function EmConstrucao() {
  return (
    <main className="pagina-construcao">
      <div className="conteudo">

        <header className="cabecalho">
          <div className="marca">
            <span className="marca-principal">
              Bordados
            </span>

            <span className="marca-complemento">
              & Cia
            </span>
          </div>

          <span className="status">
            Site em manutenção
          </span>
        </header>


        <section className="hero">

          <div className="hero-conteudo">

            <p className="etiqueta">
              Londrina • Paraná
            </p>

            <h1>
              Site em
              <span>
                manutenção.
              </span>
            </h1>

            <p className="descricao">
              Estamos preparando nosso novo site para apresentar
              nossos serviços, nossa história e tudo o que fazemos
              no universo do bordado.
            </p>

            <div className="atendimento">
              <p className="atendimento-titulo">
                No momento, atendendo pelo WhatsApp:
              </p>

              <a
                href="https://wa.me/5543999940369"
                target="_blank"
                rel="noreferrer"
                className="telefone"
              >
                (43) 99994-0369
              </a>
            </div>

            <div className="acoes">

              <a
                href="https://wa.me/5543999940369?text=Olá%2C%20vim%20pelo%20site%20da%20Bordados%20%26%20Cia."
                target="_blank"
                rel="noreferrer"
                className="botao botao-principal"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="tel:+5543999940369"
                className="botao botao-secundario"
              >
                Ligar agora
              </a>

            </div>

          </div>


          <div
            className="hero-visual"
            aria-hidden="true"
          >

            <div className="circulo-externo">

              <div className="bastidor">

                <span className="fio fio-1"></span>
                <span className="fio fio-2"></span>
                <span className="fio fio-3"></span>
                <span className="fio fio-4"></span>

                <span className="agulha"></span>

              </div>

            </div>

            <p className="texto-visual">
              Uma nova experiência
              <br />
              está sendo bordada.
            </p>

          </div>

        </section>


        <div
          className="detalhe-bordado"
          aria-hidden="true"
        >
          <span className="linha"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <footer className="rodape">

          <p>
            Bordados & Cia • Londrina - PR
          </p>

          <p>
            Em breve, novidades.
          </p>

        </footer>

      </div>
    </main>
  )
}

export default EmConstrucao