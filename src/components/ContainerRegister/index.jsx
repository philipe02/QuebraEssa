import * as S from './styles'
import Link from 'next/link'

const ContainerRegister = () => (
  <S.Wrapper>
    <S.SectionRegistrar>
      <S.DivContainerRegister>
        <S.TitleRegister className="h1 w-50">
          Ganhe dinheiro e procure clientes para os seus serviços.
        </S.TitleRegister>
        <Link href="/Register">
          <S.Register>Registre-se</S.Register>
        </Link>
      </S.DivContainerRegister>
      <div className="">
        <S.imgRegistrar src="/assets/engenheiroo.png" />
      </div>
    </S.SectionRegistrar>
  </S.Wrapper>
)
export default ContainerRegister
