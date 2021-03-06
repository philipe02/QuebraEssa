import styled from 'styled-components'

export const Wrapper = styled.footer`
  min-height: 20%;
  position: relative;
  width: 100%;
  padding: 6rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  position: relative;
  width: 199.37px;
  height: 60.78px;
  margin-bottom: 40px;
  object-fit: cover;
`

export const DivContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  bottom: 0;
`
export const DivCard = styled.div`
  text-align: center;
  align-items: center;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    grid-template-columns: 240px 240px;
  }
  @media (max-width: 900px) {
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: 240px 240px;
  }
`
export const Card = styled.div`
  height: 200px;
  margin: 0px 33px;
  @media (max-width: 900px) {
    height: 259px;
  }
`
export const TitleCard = styled.h1`
  color: #212353;
  font-size: 17px;
  margin-top: 50px;
`
export const TextCard = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  color: #272525e3;
`
export const Ul = styled.ul`
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  color: #393940;
  list-style-type: none;
  text-decoration: none;
`
export const Li = styled.li`
  margin-top: 11px;
  list-style-type: none;
  text-decoration: none;
`
export const Link = styled.a`
  padding: 20px;
  color: #2d2d2f;
  font-weight: bold;
  &:hover {
    color: #615d5c;
  }
`
export const ButtonContato = styled.button`
  width: 110.56px;
  height: 39.09px;
  font-weight: 00;
  /* font-weight: bold; */
  font-size: 15px;
  background-color: #9c69e2;
  color: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #9986b2;
  }
`
export const DivCopywriting = styled.div`
  padding: 0px;
  width: 100%;
  text-align: center;
  height: 40px;
  border-top: solid #c1c3e2 1px;
  margin-top: 100px;
`
export const Copywriting = styled.h4`
  font-size: 13px;
  margin-top: 9px;
  color: #6a6a77;
`
export const SocialNetworks = styled.div`
  padding: 0;
  display: flex;
  align-items: center;

  justify-content: center;
  text-align: center;
  margin: 0 auto;
`
export const Icone = styled.div`
  font-size: 12pt;
  margin-left: 9px;
  margin-top: 0;

  background-color: #9c69e2;
  padding: 1px 10px;
`
