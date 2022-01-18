import React from 'react'

const Header = () => {
  return (
    <div className="position fixed top-1 left-0 right-0 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div Name="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-white">
              {/* <thead className="bg-gray-50">
              </thead> */}
              <tbody className="bg-cyan-600">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-2xl text-white font-light leading-normal">
                          Что-нибудь интересное
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white text-6xl font-thin">
                    13
                    <div className="text-sm inline-block leading-normal"> <strong>Friday</strong> December 4 </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-white font-bold leading-normal">
                    Подсказки или меню
                    <ul className="font-thin text-xs py-2">
                      <li>12:00 Title of Event</li>
                      <li>12:50 Title of Event</li>
                      <li>12:30 Title of Event</li>
                    </ul>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
