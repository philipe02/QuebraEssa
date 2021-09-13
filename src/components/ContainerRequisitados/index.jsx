import * as S from './styles'

const Requisitados = () => (
  <S.Wrapper>
    <S.SectionRequisitos id="services" className="mt-5">
      <S.Title className="h1 text-center mb-5">
        Serviços mais requisitados.
      </S.Title>
      <S.DivServicoRequisitados>
        <div className="mx-2">
          <S.ImgService src="/assets/usedServices/JardinagemService.jpeg" />
          <S.NameImgServive>Jardinagem</S.NameImgServive>
        </div>
        <div className="mx-2">
          <S.ImgService src="/assets/usedServices/FotografoService.jpg" />
          <S.NameImgServive>Fotografo</S.NameImgServive>
        </div>
        <div className="mx-2">
          <S.ImgService src="/assets/usedServices/DesignerGraficoService.jpeg" />
          <S.NameImgServive>Designer gráfico</S.NameImgServive>
        </div>
        <div className="mx-2">
          <S.ImgService src="/assets/usedServices/ProgramadorService.jpeg" />
          <S.NameImgServive>Programador</S.NameImgServive>
        </div>
      </S.DivServicoRequisitados>
    </S.SectionRequisitos>
  </S.Wrapper>
)
export default Requisitados
