import * as S from './styles'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'
import React, { useState, useEffect } from 'react'
import { getAllClientes } from 'service/clientes'
import { useRouter } from 'next/router'

const ContainerDetalheAmigo = () => {
  const [currentCliente, setCurrentCliente] = useState('')

  const { query } = useRouter()
  const idUrl = query.id
  useEffect(() => {
    getAllClientes().then(({ data }) => {
      var filtrado = data.content.filter((obj) => obj.cpf.includes(idUrl))
      console.log(filtrado)
      setCurrentCliente(filtrado)
    })
  }, [idUrl])
  return (
    <S.WrapperDetalheAmigo>
      <S.DivDetalhesAmigos>
        <S.DivVoltar className="top-bar-container">
          <Link href="/Principal/BuscarAmigos">
            <FiArrowLeft size={30} color="#fff" />
          </Link>
        </S.DivVoltar>
      </S.DivDetalhesAmigos>
      {currentCliente &&
        currentCliente.map((cliente) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <S.DivBlocoDetalhe>
              <S.DivBlocoImg>
                <S.ImgAmigo src="https://picsum.photos/200" />
                <S.Name>{cliente.nome}</S.Name>
              </S.DivBlocoImg>
              <S.DivCampoInput>
                <div className="form-group">
                  <S.TextRecomendacao>Recomendações</S.TextRecomendacao>
                  <S.DivPost className="input-container">
                    <S.ImgAmigoPost src="https://picsum.photos/200" />
                    <S.NamePost>{cliente.nome}</S.NamePost>
                    <S.TextPost>
                      Contratei Rodrigo e recomendo um otimo profissional
                    </S.TextPost>
                    <S.DivRecomendacao>
                      <S.divImage>
                        <S.ImgRecomendacao
                          className=" pt-lg-8 d-flex align-items-center"
                          style={{
                            backgroundImage:
                              'url(' +
                              'https://st.depositphotos.com/1000291/1404/i/600/depositphotos_14041185-stock-photo-portrait-of-house-painter-worker.jpg' +
                              ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <S.DivTextRecomendacao>
                          <h1 className="text-dark font-weight-bold">
                            Rodrigo
                          </h1>
                          <h2 className="text-dark">Pintor</h2>
                        </S.DivTextRecomendacao>
                      </S.divImage>
                      <S.DivButton>
                        <S.Estrelas>Nota: 10</S.Estrelas>
                        <S.Button>
                          <FiArrowRight size={20} color="#fff" />
                        </S.Button>
                      </S.DivButton>
                    </S.DivRecomendacao>
                  </S.DivPost>
                  <S.DivPost className="input-container">
                    <S.ImgAmigoPost src="https://picsum.photos/200" />
                    <S.NamePost>{cliente.nome}</S.NamePost>
                    <S.TextPost>
                      Paulo é um profissional dedicado recomendo
                    </S.TextPost>
                    <S.DivRecomendacao>
                      <S.divImage>
                        <S.ImgRecomendacao
                          className=" pt-lg-8 d-flex align-items-center"
                          style={{
                            backgroundImage:
                              'url(' +
                              'https://diegoribeiro.adv.br/wp-content/uploads/2019/07/C%C3%B3pia_de_Eletricista__voc%C3%AA_sabia_que_pode_se_aposentar_mais_cedo__1.png' +
                              ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <S.DivTextRecomendacao>
                          <h1 className="text-dark font-weight-bold">Paulo</h1>
                          <h2 className="text-dark">Eletricista</h2>
                        </S.DivTextRecomendacao>
                      </S.divImage>
                      <S.DivButton>
                        <S.Estrelas>Nota: 10</S.Estrelas>
                        <S.Button>
                          <FiArrowRight size={20} color="#fff" />
                        </S.Button>
                      </S.DivButton>
                    </S.DivRecomendacao>
                  </S.DivPost>
                </div>
              </S.DivCampoInput>
            </S.DivBlocoDetalhe>
          </div>
        ))}
    </S.WrapperDetalheAmigo>
  )
}
export default ContainerDetalheAmigo
