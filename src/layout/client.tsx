import React from 'react'
import ClientHeader from '../components/client/header'
import ClientFooter from '../components/client/footer'
import { Outlet } from 'react-router-dom'
import CartProvider from '../context/Cart'

const ClientLayout = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <ClientHeader />
        <main className="flex-grow max-w-7xl mx-auto pt-[90px] w-full">
          <Outlet />
        </main>
        <footer className='pt-[50px]'>
        < ClientFooter />
        </footer>
      </div>
    </CartProvider>
  )
}

export default ClientLayout
