import * as S from './styles'
import Image from 'next/image'
import imglogoTipo from '../../assets/logoTipo.png'

const Footer = () => (
  <S.Wrapper>
    <S.LogoTipo>
      <Image src={imglogoTipo} alt="My Image" />
    </S.LogoTipo>
    <S.DivCard>
      <S.Card>
        <S.TitleCard>Contato</S.TitleCard>
        <S.Ul>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://wa.me/55719999-9999">(71) 9999-9999</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://wa.me/55713333-3333">(71) 3333-3333</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard> Precisa de ajuda?</S.TextCard>
          </S.Li>
        </S.Ul>
        <S.Link href="https://wa.me/55719999-9999">
          <S.ButtonContato>Ligue-nos</S.ButtonContato>
        </S.Link>
      </S.Card>
      <S.Card>
        <S.TitleCard>Desenvolvedores</S.TitleCard>
        <S.Ul>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/philipe02">Philipe</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/MoisesRequiao">Moises</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/joaovictorbrito">
                João Victor
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/lucaspereira530">Lucas</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/CristicoF">Rodrigo</S.Link>
            </S.TextCard>
          </S.Li>
        </S.Ul>
      </S.Card>
      <S.Card>
        <S.TitleCard>Todos os links</S.TitleCard>
        <S.Ul>
          <S.Li>
            <S.TextCard>
              <S.Link href="#home">Home</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="#services">Serviços</S.Link>
            </S.TextCard>
          </S.Li>
        </S.Ul>
      </S.Card>
      <S.Card>
        <S.TitleCard>Redes socias</S.TitleCard>
        <S.Ul>
          <S.SocialNetworks>
            <S.Li>
              <S.Icone>
                <i className="fab fa-github-alt"></i>
              </S.Icone>
            </S.Li>
            <S.Li>
              <S.Icone>
                <i className="fab fa-facebook"></i>
              </S.Icone>
            </S.Li>
            <S.Li>
              <S.Icone>
                <i className="fab fa-instagram"></i>
              </S.Icone>
            </S.Li>
          </S.SocialNetworks>
        </S.Ul>
      </S.Card>
    </S.DivCard>
    <S.DivCopywriting>
      <S.Copywriting>&copy;2021</S.Copywriting>
    </S.DivCopywriting>
  </S.Wrapper>
)

export default Footer
