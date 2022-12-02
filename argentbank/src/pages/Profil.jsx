import React from 'react'
import Account from '../components/Account/Account'
import Header from '../components/Header/Header'
import { accountData } from '../services/data'

function Profil() {
  return (
    <main className="main sign-in bg-dark">
      <Header />
      <input
        className="edit-button"
        type="submit"
        value="Edit Name"
        // onClick={HandleEditProfile}
      />
      {accountData.map((item) => (
        <Account
          key={item.id}
          title={item.title}
          amount={item.amount}
          description={item.description}
        />
      ))}
    </main>
  )
}

export default Profil
