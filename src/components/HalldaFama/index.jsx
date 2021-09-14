/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'

const HalldaFama = () => {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="w-50 mx-auto carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <h1 className="text-center fw-bold"> Hall da Fama</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <S.ImagemCarrosel
            src="/assets/marceneiro.jpg"
            className="d-block w-100"
            alt="marceneiro hall"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/Eletricista.jpg"
            className="d-block w-100"
            alt="Eletricista hall"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/Pedreiro.jpg"
            className="d-block w-100"
            alt="Pedreiro hall"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default HalldaFama
