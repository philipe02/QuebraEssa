import React, { useState } from 'react'

const UserContext = React.createContext([{}, () => {}])

export const userInitialState = {
  id: null,
  username: '',
  email: '',
  'first-name': '',
  'last-name': '',
  adress: '',
  city: '',
  country: '',
  'postal-code': '00000000'
}

export const userTeste = {
  id: 1,
  username: 'pedro',
  email: 'quebra@essa.com',
  'first-name': 'Pedro',
  'last-name': 'Kislansky',
  adress: 'Rua São Pedro',
  city: 'Salvador',
  country: 'Brasil',
  'postal-code': '41390000'
}

const UserProvider = (props) => {
  const [usuarioAtual, setUsuarioAtual] = useState(userInitialState)

  return (
    <UserContext.Provider value={[usuarioAtual, setUsuarioAtual]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
