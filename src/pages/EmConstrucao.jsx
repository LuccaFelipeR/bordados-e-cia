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
            Site em construção
          </span>
        </header>


        <section className="hero">

          <div className="hero-conteudo">

            <p className="etiqueta">
              Londrina • Paraná
            </p>

            <h1>
              Uma nova
              <br />

              experiência

              <span>
                está sendo bordada.
              </span>
            </h1>

            <p className="descricao">
              Estamos preparando um novo espaço para apresentar nossa história,
              nossos serviços e tudo o que fazemos no universo do bordado.
            </p>

            <div className="acoes">

              <a
                href="#"
                className="botao botao-principal"
              >
                Fale conosco
              </a>

              <a
                href="#"
                className="botao botao-secundario"
              >
                Instagram
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
              Tradição, experiência
              <br />
              e atenção aos detalhes.
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
            Bordados & Cia
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