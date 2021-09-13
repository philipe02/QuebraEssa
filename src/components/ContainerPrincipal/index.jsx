import * as S from './styles'
import Indicacoes from '../Indicacoes'

const Principal = () => (
  <S.Wrapper>
    <S.DivIntroducao>
      <S.TextIntroducao>
        Facilidade no seu dia a dia. O que você precisa está aqui.
      </S.TextIntroducao>
    </S.DivIntroducao>
    <section className="mt-5">
      <S.DivGridContrate>
        <div>
          <S.TextHelp>
            Está precisando de ajuda? Tudo bem! Contrate alguém perto de você.
          </S.TextHelp>
        </div>
        <div>
          <S.Logo src="/assets/usedServices/imgIntroducao.png" />
        </div>
      </S.DivGridContrate>
    </section>
    <Indicacoes />
    <S.SectionRecomendacoes className="container mt-5 mb-5">
      <S.Title className="mb-5 h1 text-center">Nossas recomendações</S.Title>
      <S.DivEfeito></S.DivEfeito>
      <S.DivRecomendacoes>
        <div>
          <S.ImgRecomendacoes src="/assets/sobre/imgSobre.jpg" />
        </div>

        <S.DivIndicacoes>
          <S.Title className="text-center font-weight-bold">Indicações</S.Title>
          <p className="h3 text-center">
            Para uma melhor experiencia indique os serviços aos seus amigos.
          </p>
        </S.DivIndicacoes>
      </S.DivRecomendacoes>
      <S.DivRecomendacoes className="d-flex  justify-content-end">
        <div>
          <S.ImgRecomendacoes src="/assets/legal.jpg" />
        </div>
        <S.DivAvaliacoes>
          <S.Title className="text-center font-weight-bold">
            Avalie os serviços
          </S.Title>
          <p className="h3 text-center">
            Avalie Nossos Serviços. No sentido de aumentar a satisfação dos
            nossos clientes e de corresponder às suas necessidades.
          </p>
        </S.DivAvaliacoes>
        <S.DivEfeito2></S.DivEfeito2>
      </S.DivRecomendacoes>
    </S.SectionRecomendacoes>

    <S.SectionDepoimentos className="mb-5">
      <S.Title className="text-center mb-5">Descubra coisas para fazer</S.Title>
      <S.DivGridDepoimentos>
        <S.DivCardDepoimentos>
          <S.imgDepoimentos src="/assets/depoimentos/violao.jpg" />
          <S.TitleDepoimentos className="text-center font-weight-bold">
            Mais de 5mil pessoas faturam dando aulas de violão
          </S.TitleDepoimentos>
        </S.DivCardDepoimentos>
        <S.DivCardDepoimentos>
          <S.imgDepoimentos src="/assets/depoimentos/culinaria.jpg" />
          <S.TitleDepoimentos className="text-center font-weight-bold">
            Mais de 10 mil pessoas faturam dando aulas de culinaria
          </S.TitleDepoimentos>
        </S.DivCardDepoimentos>
        <S.DivCardDepoimentos>
          <S.imgDepoimentos src="/assets/depoimentos/ingles.jpg" />
          <S.TitleDepoimentos className="text-center font-weight-bold">
            Mais de 25 mil pessoas faturam dando aulas de inglês
          </S.TitleDepoimentos>
        </S.DivCardDepoimentos>
      </S.DivGridDepoimentos>
    </S.SectionDepoimentos>
  </S.Wrapper>
)

export default Principal
