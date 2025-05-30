
import { IProduct } from '../../../interface/product'

import "../../../css/item.css"
import {  useState } from 'react'

type Props = {
  product: IProduct
}

const ProductItem = ({ product }: Props) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false)
  
  // Generate random order ID (6 digits)
  const randomOrderId = Math.floor(100000 + Math.random() * 900000)
  // VietQR API configuration with updated payment description
  const vietQRUrl = `https://img.vietqr.io/image/MB-696625112005-compact2.png?amount=${product.price}&addInfo=${encodeURIComponent(`ThanhToanDonHang${randomOrderId}`)}`

  // const AddToCart = async (id: number) => {
  //   const token = localStorage.getItem("token")
  //   const config = {
  //     headers: { "Authorization": "Bearer " + token }
  //   }
  //   const cartdata = {
  //     "productId": id,
  //     "quantity": 1
  //   }
  //   try {
  //     const { data } = await api.post('carts', cartdata, config)
  //     dispatch({ type: CartActionType.UpdateCart, payload: data.data.Items })
  //     message.success(data.message)
  //     dispatch({ type: CartActionType.ChangeStatusCart, payload: true })
  //   } catch (error) {
  //     message.error('Có lỗi xảy ra khi thêm vào giỏ hàng')
  //   }
  // }

  const handlePayment = () => {
    setIsPaymentModalOpen(true)
  }

  const handleConfirmPayment = () => {
    setIsPaymentModalOpen(false)
    setIsThankYouModalOpen(true)
  }

  return (
    <>
      <div key={product.id} className="course-card">
        <img src={product.images} className="course-img" />
        <div className="course-body">
          <p className="course-title-sm">{product.name}</p>
          <div className="course-price">
            <div className="course-price flex justify-between items-center">
              <span className="course-price-new font-bold text-lg text-gray-800">{product.price}</span>
              <div className="flex space-x-2">
                <button
                  onClick={handlePayment}
                  className="bg-red-700 text-white px-4 py-1 rounded hover:bg-red-800 transition"
                >
                  Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Thanh Toán</h2>
            <div className="mb-4">
              <img 
                src={vietQRUrl} 
                alt="VietQR Code" 
                className="w-48 h-48 mx-auto"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Số tiền thanh toán</label>
              <input 
                type="text" 
                value={product.price} 
                readOnly 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nội dung thanh toán</label>
              <input 
                type="text" 
                value={`ThanhToanDonHang${randomOrderId}`} 
                readOnly 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirmPayment}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {isThankYouModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Cảm ơn bạn!</h2>
            <p className="mb-4">Thanh toán của bạn đã được xác nhận thành công.</p>
            <button
              onClick={() => setIsThankYouModalOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductItem