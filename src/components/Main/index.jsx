import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => (
  <S.Wrapper>
    <S.Introducao>
      <Image
        src="/assets/imgIntroducao.jpg"
        alt="imagem aperto de maos"
        layout="fill"
      />
    </S.Introducao>
    <S.DivText>
      <S.Title>Nós te ajudamos a procurar um serviço!.</S.Title>
      <S.Description>
        O Quebra Essa possui diversas categorias de serviços para você conhecer.
        Veja as oportunidades que nós te oferecemos.
      </S.Description>
      <S.Button>
        <Link href="#about">Ver mais</Link>
      </S.Button>
    </S.DivText>
    <S.SectionSobre id="about">
      <S.DivSobre>
        <S.DivImgSobre>
          <Image
            src="/assets/sobre/imgSobre.jpg"
            layout="fill"
            alt="imagem equipe"
          />
        </S.DivImgSobre>
        <S.DivTextSobre>
          <S.TitleSobre>O que é o Quebra Essa?</S.TitleSobre>
          <S.DescriptionSobre>
            Quebra essa é uma empresa brasileira, com sede em Salvador, que tem
            o intuito em conectar clientes a prestadores de serviços.
          </S.DescriptionSobre>
        </S.DivTextSobre>
      </S.DivSobre>
    </S.SectionSobre>
    <S.SectionServices>
      <S.TitleSection>Todos os serviços</S.TitleSection>
      <S.DivGrid>
        <a href="/servico/Manicure">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Manicure.png"
                layout="fill"
                alt="manicure"
              />
            </S.DivImgIcon>
            <S.NameIcons>Manicure</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Programador">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Programador.png"
                layout="fill"
                alt="programador"
              />
            </S.DivImgIcon>
            <S.NameIcons>Programador</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Jardinagem">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Jardinagem.png"
                layout="fill"
                alt="jardinagem"
              />
            </S.DivImgIcon>
            <S.NameIcons>Jardinagem</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Mecanico">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Mecanico.png"
                layout="fill"
                alt="mecanico"
              />
            </S.DivImgIcon>
            <S.NameIcons>Mecanico</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Fisioterapia">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Fisioterapia.png"
                layout="fill"
                alt="fisioterapia"
              />
            </S.DivImgIcon>
            <S.NameIcons>Fisioterapia</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Arquiteto">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Arquiteto.png"
                layout="fill"
                alt="arquiteto"
              />
            </S.DivImgIcon>
            <S.NameIcons>Arquiteto</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Fotografo">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Fotografo.png"
                layout="fill"
                alt="fotografo"
              />
            </S.DivImgIcon>
            <S.NameIcons>Fotografo</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Contador">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Contador.png"
                layout="fill"
                alt="contador"
              />
            </S.DivImgIcon>
            <S.NameIcons>Contador</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Garcom">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Garcom.png"
                layout="fill"
                alt="garçom"
              />
            </S.DivImgIcon>
            <S.NameIcons>Garçom</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Esteticista">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Esteticista.png"
                layout="fill"
                alt="esteticista"
              />
            </S.DivImgIcon>
            <S.NameIcons>Esteticista</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Pintor">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Pintor.png"
                layout="fill"
                alt="pintor"
              />
            </S.DivImgIcon>
            <S.NameIcons>Pintor</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Engenheiro">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Engenheiro.png"
                layout="fill"
                alt="engenheiro"
              />
            </S.DivImgIcon>
            <S.NameIcons>Engenheiro</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/Motorista">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/Motorista.png"
                layout="fill"
                alt="motorista"
              />
            </S.DivImgIcon>
            <S.NameIcons>Motorista</S.NameIcons>
          </S.DivIcon>
        </a>
        <a href="/servico/DesignerGrafico">
          <S.DivIcon>
            <S.DivImgIcon>
              <Image
                src="/assets/iconesServices/DesignerGrafico.png"
                layout="fill"
                alt="designer grafico"
              />
            </S.DivImgIcon>
            <S.NameIcons>Designer grafico</S.NameIcons>
          </S.DivIcon>
        </a>
      </S.DivGrid>
    </S.SectionServices>
    <S.SectionOportunidade>
      <Image
        src="/assets/oportunidade.jpg"
        layout="fill"
        alt="aperto de maos"
      />
      <S.DivOportunidade>
        <S.TitleOportunidade>Oportunidades de serviços</S.TitleOportunidade>
        <S.TextOportunidade>Faça parte do Quebra essa</S.TextOportunidade>
        <S.ButtonRegister>
          <Link href="/register">Registre-se</Link>
        </S.ButtonRegister>
      </S.DivOportunidade>
    </S.SectionOportunidade>
    <S.SectionServiceUse>
      <S.TitleSection>Serviços mais usados</S.TitleSection>
      <S.DivGridServiceUse>
        <S.DivCardServiceUse1>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/Manicureservice.jpg"
              layout="fill"
              alt="manicure"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Manicure</S.NameCard>
          <S.DescriptionCardServiceUse>
            A manicure é um tratamento cosmético de beleza para as unhas e mãos
            realizado em casa ou em um salão de beleza.
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse1>
        <S.DivCardServiceUse2>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/JardinagemService.jpg"
              layout="fill"
              alt="jardinagem"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Jardinagem</S.NameCard>
          <S.DescriptionCardServiceUse>
            Jardinagem é uma atividade profissional ou recreativa que tem o
            objetivo de embelezar determinados locais.
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse2>
        <S.DivCardServiceUse3>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/Fotografoservice.jpg"
              layout="fill"
              alt="fotografo"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Fotografo</S.NameCard>
          <S.DescriptionCardServiceUse>
            O fotógrafo é o profissional que tira e elabora fotografias, sejam
            elas estáticas ou dinâmicas, podendo ser especializado em diversos
            segmentos.
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse3>
        <S.DivCardServiceUse4>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/DesignerGraficoservice.jpg"
              layout="fill"
              alt="designer grafico"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Designer grafico</S.NameCard>
          <S.DescriptionCardServiceUse>
            Design Gráfico é a área de conhecimento e a prática profissional
            específicas relativas ao ordenamento estético-formal de elementos.
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse4>
        <S.DivCardServiceUse5>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/ProgramadorService.jpg"
              layout="fill"
              alt="programador"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Programador</S.NameCard>
          <S.DescriptionCardServiceUse>
            Em ciências da computação; programador, desenvolvedor, codificador
            ou engenheiro de software é alguém que escreve, desenvolve ou faz
            manutenção de software.
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse5>
        <S.DivCardServiceUse6>
          <S.DivImgServiceUse>
            <Image
              src="/assets/usedServices/PintorService.jpg"
              layout="fill"
              alt="pintor"
            />
          </S.DivImgServiceUse>
          <S.NameCard>Pintor</S.NameCard>
          <S.DescriptionCardServiceUse>
            O Pintor é o profissional encarregado de preparar e aplicar a tinta
            na superfície que irá receber pintura
          </S.DescriptionCardServiceUse>
        </S.DivCardServiceUse6>
      </S.DivGridServiceUse>
    </S.SectionServiceUse>
    <S.SectionProfessional>
      <S.TitleSection>Alguns dos nossos profissionais</S.TitleSection>
      <S.DivGridProfessional>
        <S.DivCardProfessional>
          <S.DivImgProfessional>
            <Image
              src="/assets/professional/FisioterapiaProfessional.jpg"
              layout="fill"
              alt="fisioterapia"
            />
            <S.DivTextCardProfessional>
              <S.NameCardProfessional>Ricardo Almeida</S.NameCardProfessional>
              <S.TextCardProfessional>Fisioterapia</S.TextCardProfessional>
            </S.DivTextCardProfessional>
          </S.DivImgProfessional>
        </S.DivCardProfessional>
        <S.DivCardProfessional>
          <S.DivImgProfessional>
            <Image
              src="/assets/professional/MotoristaProfessional.jpg"
              layout="fill"
              alt="motorista"
            />
            <S.DivTextCardProfessional>
              <S.NameCardProfessional>Samuel Dantas</S.NameCardProfessional>
              <S.TextCardProfessional>Motorista</S.TextCardProfessional>
            </S.DivTextCardProfessional>
          </S.DivImgProfessional>
        </S.DivCardProfessional>
        <S.DivCardProfessional>
          <S.DivImgProfessional>
            <Image
              src="/assets/professional/ManicureProfessional.jpg"
              layout="fill"
              alt="manicure"
            />
            <S.DivTextCardProfessional>
              <S.NameCardProfessional>Luisa Brito</S.NameCardProfessional>
              <S.TextCardProfessional>Manicure</S.TextCardProfessional>
            </S.DivTextCardProfessional>
          </S.DivImgProfessional>
        </S.DivCardProfessional>
      </S.DivGridProfessional>
    </S.SectionProfessional>
  </S.Wrapper>
)

export default Main
