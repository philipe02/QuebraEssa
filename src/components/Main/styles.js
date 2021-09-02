import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #fff;
  width: 100%;
  overflow-x: hidden;
`
export const Introducao = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  font-family: 'Abhaya Libre ExtraBold';
  animation: zoom 25s;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`
export const DivText = styled.div`
  width: 545px;
  position: absolute;
  top: 30%;
  left: 15%;
`
export const Title = styled.h1`
  font-size: 60px;
  line-height: 88px;
`
export const TitleSection = styled.h1`
  font-size: 23px;
  color: #212353;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Acme';
`
export const Button = styled.button`
  width: 142px;
  height: 44px;
  margin-top: 20px;
  font-size: 19px;
  background-color: #9c69e2;
  color: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #9986b2;
  }
  a:first-child {
    color: #fff;
  }
`
export const LinkButton = styled.p`
  color: #fff;
`
export const SectionSobre = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 70px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`
export const DivSobre = styled.div`
  width: 800px;
  background-color: #f063b845;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 20px 0px;
  }
`
export const DivImgSobre = styled.div`
  position: relative;
  width: 400px;
  float: left;
  height: 400px;
  img:first-child {
    border-radius: 25px;
  }
`
export const DivTextSobre = styled.div`
  float: right;
  width: 420px;
  margin-left: 50px;
`
export const TitleSobre = styled.h1`
  font-size: 30px;
  color: #212353;
  margin-top: 22%;
`
export const DescriptionSobre = styled.h2`
  font-size: 20px;
  color: rgb(76 72 72);
  margin-top: 30px;
  font-weight: 500;
  line-height: 37px;
`
export const SectionServices = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`
export const TitleService = styled.h1`
  font-size: 23px;
  color: #212353;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`
export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
  }
`
export const DivIcon = styled.div`
  cursor: pointer;
  border: solid #0000001c 1px;
  height: 123px;
  width: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    background-color: #a0949b45;
  }
`
export const DivImgIcon = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  img:first-child {
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
`
export const NameIcons = styled.p`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  color: rgb(76 72 72);
  margin-top: 10px;
  font-weight: bold;
`
export const SectionOportunidade = styled.section`
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 80px;
`
export const DivOportunidade = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 7rem 38px 0px;
  width: 90rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  grid-template-areas:
    'TitleOportunidade TitleOportunidade'
    'TextOportunidade TextOportunidade'
    'ButtonRegister ButtonRegister ';
  @media (max-width: 914px) {
    margin: 0 0 0 8%;
    flex-direction: column;
    display: block;
    width: 100vw;
    line-height: 5rem;
    left: 60%;
  }
`
export const TitleOportunidade = styled.h1`
  grid-area: TitleOportunidade;
  width: 400;
  font-size: 34pt;
  text-transform: uppercase;
  @media (max-width: 825px) {
    font-size: 26pt;
  }
`
export const TextOportunidade = styled.p`
  grid-area: TextOportunidade;
  font-size: 15pt;
`
export const ButtonRegister = styled.button`
  grid-area: ButtonRegister;
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  a:first-child {
    color: #000;
  }
  @media (max-width: 768px) {
    width: 173px;
    height: 48px;
    margin: auto 27px;
    font-size: 16px;
  }
  &:hover {
    background-color: #9986b2;
  }
`
export const SectionServiceUse = styled.section`
  position: relative;
  width: 100%;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin: 30px auto;
    flex-direction: column;
    position: relative;
    width: 100%;
    img:first-child {
      width: 50px;
      height: 50px;
    }
  }
`
export const DivGridServiceUse = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 98rem;
  font-family: 'DM Serif Display';
  color: #081f32;
  @media (max-width: 979px) {
    display: grid;
    margin: 0 auto;
    flex-direction: column;
    position: relative;
    width: 100vw;
    grid-template-columns: repeat(2, 1fr);
    img:first-child {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    img:first-child {
      width: 50px;
      height: 50px;
    }
  }
`
export const DivCardServiceUse1 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const DivCardServiceUse2 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 601px) {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;
  }
`
export const DivCardServiceUse3 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const DivCardServiceUse4 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const DivCardServiceUse5 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 601px) {
    height: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const DivCardServiceUse6 = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const DivImgServiceUse = styled.div`
  img:first-child {
    border-top-left-radius: 9%;
    border-top-right-radius: 9%;
  }
  position: relative;
  width: 300px;
  height: 190px;
`
export const NameCard = styled.h1`
  font-size: 15pt;
  color: #081f32;
  margin-top: 15px;
  margin: 15px;
`
export const DescriptionCardServiceUse = styled.p`
  font-size: 11pt;
  color: #6e798c;
  margin: 0 15px;
  width: 80%;
  @media (max-width: 600px) {
    width: 50%;
  }
`
export const SectionProfessional = styled.section`
  position: relative;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const DivGridProfessional = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 979px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80vh;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 80vh;
  }
`
export const DivCardProfessional = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivImgProfessional = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0 25px;
  img:first-child {
    border-radius: 25px;
  }
  @media (max-width: 600px) {
    position: block;
    width: 300px;
  }
`
export const DivTextCardProfessional = styled.div`
  position: absolute;
  background-color: #fff;
  border-top-left-radius: 15%;
  border-bottom-right-radius: 15%;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 5px 5px #0000002e;
`
export const NameCardProfessional = styled.h1`
  font-size: 14pt;
  color: rgb(49 48 48);
  margin-bottom: 9px;
`
export const TextCardProfessional = styled.h2`
  font-size: 12pt;
  color: rgb(49 48 48);
`
