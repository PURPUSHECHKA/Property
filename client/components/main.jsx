import React, { useState } from 'react'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

import Footer from './footer'

const Main = () => {
  const [value, setValue] = useState()

  return (
    <div className="bg-gray-300">
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="container-md mx-auto bg-cyan-700 rounded-lg p-14">
          <h1 className="text-center font-bold text-white text-4xl">
            Сведения об объекте недвижимости
          </h1>
          <p className=" flex mx-auto font-bold text-white justify-center text-sm my-6 max-w-lg">
            Введите адрес объекта недвижимости в произвольной форме
          </p>
          <div className="sm:flex items-center bg-white rounded-lg px-2 py-1 justify-between">
            <AddressSuggestions
              type="text"
              placeholder="Введите адрес объекта недвижимости"
              token="70b8dda637580dd14625d9296f24945f2a6fc4f9"
              value={value}
              onChange={setValue}
            />
            <button
              type="button"
              className="bg-cyan-700 text-white text-base font-bold rounded-lg px-4 py-2"
            >
              Поиск
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
