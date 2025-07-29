import React from 'react'
import { Link } from 'react-router-dom'
 function Navbar() {
  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2 font-medium text-gray-600">Customer Name</th>
              <th className="p-2 font-medium text-gray-600">Product(s)</th>
              <th className="p-2 font-medium text-gray-600">Platform</th>
              <th className="p-2 font-medium text-gray-600">Total Amount</th>
              <th className="p-2 font-medium text-gray-600">Payment Method</th>
              <th className="p-2 font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>

            {/* Order 1 */}
            <tr className="border-b">
              <td className="p-2 flex items-center gap-3">
                {/* Аватар клиента */}
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА АВАТАР Donald Rodriguez */}
                </div>
                <div>
                  <div className="font-medium">Donald Rodriquez</div>
                  <div className="text-gray-500 text-xs">Indonesia</div>
                </div>
              </td>
              <td className="p-2 flex items-center gap-3">
                {/* Фото товара */}
                <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА ИЗОБРАЖЕНИЕ футболки */}
                </div>
                <div>
                  <div>Oversized Cotton T-shirt</div>
                  <div className="text-gray-500 text-xs">Size XL · Color White</div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  Shopee
                </div>
              </td>
              <td className="p-2">$128,50</td>
              <td className="p-2">ShopeePay</td>
              <td className="p-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Completed</span>
              </td>
            </tr>

            {/* Order 2 */}
            <tr className="border-b">
              <td className="p-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА АВАТАР Frank Williams */}
                </div>
                <div>
                  <div className="font-medium">Frank Williams</div>
                  <div className="text-gray-500 text-xs">United Arab Emirates</div>
                </div>
              </td>
              <td className="p-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА ИЗОБРАЖЕНИЕ кроссовок */}
                </div>
                <div>
                  <div>High-Top Leather Sneakers</div>
                  <div className="text-gray-500 text-xs">Size 42 · Color Black</div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                  Amazon
                </div>
              </td>
              <td className="p-2">$89,99</td>
              <td className="p-2">PayPal</td>
              <td className="p-2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">On the Way</span>
              </td>
            </tr>

            {/* Order 3 */}
            <tr className="border-b">
              <td className="p-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА АВАТАР Matthew Brooks */}
                </div>
                <div>
                  <div className="font-medium">Matthew Brooks</div>
                  <div className="text-gray-500 text-xs">Australia</div>
                </div>
              </td>
              <td className="p-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА ИЗОБРАЖЕНИЕ худи */}
                </div>
                <div>
                  <div>Cozy Fleece Hoodie with Front Pocket</div>
                  <div className="text-gray-500 text-xs">Size S · Color Navy Blue</div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  Shopee
                </div>
              </td>
              <td className="p-2">$65,00</td>
              <td className="p-2">ShopeePay</td>
              <td className="p-2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">On the Way</span>
              </td>
            </tr>

            {/* Order 4 */}
            <tr>
              <td className="p-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА АВАТАР Gary Smith */}
                </div>
                <div>
                  <div className="font-medium">Gary Smith</div>
                  <div className="text-gray-500 text-xs">Spain</div>
                </div>
              </td>
              <td className="p-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden">
                  {/* ВСТАВЬТЕ СЮДА ИЗОБРАЖЕНИЕ бейсболки */}
                </div>
                <div>
                  <div>Adjustable Cotton Baseball Cap</div>
                  <div className="text-gray-500 text-xs">One Size · Color Red</div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  Woocommerce
                </div>
              </td>
              <td className="p-2">$45,00</td>
              <td className="p-2">ShopeePay</td>
              <td className="p-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded text-xs">Return/Refund</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}

export default Navbar