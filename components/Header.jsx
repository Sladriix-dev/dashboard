import React from 'react'

const Header = ({title = "Dashboard"}) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>{title}</h2>
        <h2>Bon retour, Kev</h2>
    </div>
  )
}

export default Header
