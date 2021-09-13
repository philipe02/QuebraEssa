import * as S from './styles'

export default function Register() {
  return (
    <section className="row">
      <S.DivQuebraEssa className="col">Quebra Essa</S.DivQuebraEssa>
      <form className="col">
        <div className="form-group">
          <label htmlFor="exampleInputEndereco1">Endereço</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEndereco1"
            aria-describedby="endereco"
            placeholder="Digite seu endereço"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputTelefone1">Telefone</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTelefone1"
            placeholder="Telefone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="Email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNome1">Nome</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNome1"
            placeholder="Nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlDescription1">Descrição</label>
          <textarea
            className="form-control"
            id="exampleFormControlDescription1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputCpf1">CPF</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputCpf1"
            placeholder="CPF"
          />
        </div>
      </form>
    </section>
  )
}
