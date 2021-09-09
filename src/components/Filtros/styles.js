import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #fff;
  border: 1px solid #e6e6f0;
`

export const Title = styled.h1`
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
`
export const FormContainer = styled.div`
  margin: 1rem;
  .form-control.avaliacao {
    width: 7rem;
  }
`

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.4rem;
`
export const Rating = styled.div`
  .rating {
    width: 180px;
  }

  .rating__star {
    cursor: pointer;
    color: #dabd18b2;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
`

export const Select = styled.select`
  font-size: 1.4rem;
`

export const Option = styled.option``

export const Input = styled.input`
  font-size: 1.4rem;
`

export const Button = styled.button`
  margin-right: 1rem;
  font-size: 1.4rem;
`
