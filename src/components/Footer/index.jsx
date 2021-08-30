import * as S from './styles'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <S.Wrapper>
    <S.LogoTipo>
      <Image layout="fill" src="/assets/logoTipo.png" alt="Logo tipo Quebra" />
    </S.LogoTipo>
    <S.DivCard>
      <S.Card>
        <S.TitleCard>Contato</S.TitleCard>
        <S.Ul>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://wa.me/55719999-9999" target="_blank">
                (71) 9999-9999
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://wa.me/55713333-3333" target="_blank">
                (71) 3333-3333
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard> Precisa de ajuda?</S.TextCard>
          </S.Li>
        </S.Ul>
        <S.Link href="https://wa.me/55719999-9999" target="_blank">
          <S.ButtonContato>Ligue-nos</S.ButtonContato>
        </S.Link>
      </S.Card>
      <S.Card>
        <S.TitleCard>Desenvolvedores</S.TitleCard>
        <S.Ul>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/joaovictorbrito">
                João Victor
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/lucaspereira530">
                Lucas Pereira
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/MoisesRequiao">
                Moises Requião
              </S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="https://github.com/philipe02">Philipe</S.Link>
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
              <S.Link href="#services">Todos os Serviços</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="allServices">Serviços mais usados</S.Link>
            </S.TextCard>
          </S.Li>
          <S.Li>
            <S.TextCard>
              <S.Link href="#professionals">Profissionais</S.Link>
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
                <FontAwesomeIcon icon={faGithub} />
                {/* <i className="fab fa-github-alt"></i> */}
              </S.Icone>
            </S.Li>
            <S.Li>
              <S.Icone>
                <FontAwesomeIcon icon={faFacebook} />
              </S.Icone>
            </S.Li>
            <S.Li>
              <S.Icone>
                <FontAwesomeIcon icon={faInstagram} />
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
