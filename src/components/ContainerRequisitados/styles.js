import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: 'Poppins', sans-serif;
  section {
    margin-top: 52px;
  }
  img {
    object-fit: cover;
  }
`
export const SectionRequisitos = styled.section`
  margin-top: 52px;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 23px;
`
export const DivServicoRequisitados = styled.div`
  display: flex;
  justify-content: center;
`

export const ImgService = styled.img`
  width: 285px;
  height: 285px;
  border-radius: 20px;
  @media (max-width: 1226px) {
    width: 200px;
    height: 200px;
  }
`
export const NameImgServive = styled.p`
  margin-top: 9px;
  margin-left: 29px;
  font-weight: bold;
  font-size: 13pt;
`
