import { useContext, useState } from 'react';
import { cartContext } from '../../../context/Cart';
import { CartActionType, IProductCart } from '../../../interface/cart';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const ProductsInCart = () => {
  const { cartstate, dispatch } = useContext(cartContext);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleRemove = (id: string) => {
    dispatch({ type: CartActionType.RemoveFromCart, payload: id });
  };

  const total = cartstate.carts.reduce(
    (sum: number, item: IProductCart) =>
      sum + Number(item.productId.price.replace(/\D/g, '')) * item.quantity,
    0
  );

  // VietQR API configuration
  const vietQRUrl = `https://img.vietqr.io/image/MB-696625112005-compact2.png?amount=${total}&addInfo=${encodeURIComponent('Thanh toán giỏ hàng')}`;

  const handlePayment = () => {
    setIsPaymentModalOpen(true);
  };

  const handleConfirmPayment = () => {
    setIsPaymentModalOpen(false);
    setIsThankYouModalOpen(true);
  };

  return (
    <>
      {/* Overlay mờ */}
      <div
        onClick={() => dispatch({ type: CartActionType.ChangeStatusCart, payload: false })}
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
      ></div>

      {/* Sidebar giỏ hàng */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 shadow-lg flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">🛒 Giỏ hàng</h2>
          <button
            onClick={() => dispatch({ type: CartActionType.ChangeStatusCart, payload: false })}
            className="text-xl hover:text-red-600"
          >
            <CloseOutlined />
          </button>
        </div>

        {/* Danh sách sản phẩm */}
        <ul className="flex-1 overflow-y-auto divide-y">
          {cartstate.carts?.map((item: IProductCart, index: number) => (
            <li key={index} className="flex flex-col gap-2 p-4">
              <div className="flex gap-3">
                <img src={item.productId.images} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-medium text-base">{item.productId.name}</h3>
                  <span className="text-red-600 font-semibold">{item.productId.price}</span>
                  <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Không còn nhu cầu?</span>
                <button
                  onClick={() => handleRemove(item.productId._id)}
                  className="text-red-500 hover:underline flex items-center gap-1"
                >
                  <DeleteOutlined /> Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Tổng tiền và thanh toán */}
        <div className="p-4 border-t flex justify-between items-center">
          <span className="font-semibold">Tổng tiền:</span>
          <div className="text-right">
            <div className="text-lg font-semibold text-red-600">{total.toLocaleString('vi-VN')}đ</div>
            <button
              onClick={handlePayment}
              className="mt-1 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Thanh toán ngay
            </button>
          </div>
        </div>
      </motion.div>

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
                value={`${total.toLocaleString('vi-VN')}đ`} 
                readOnly 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nội dung thanh toán</label>
              <input 
                type="text" 
                value="Thanh toán giỏ hàng" 
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
  );
};

export default ProductsInCart;