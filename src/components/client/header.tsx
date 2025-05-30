import {
  Home,
  GraduationCap,
  BookMarked,
  School,
  Archive,
  KeyRound,
  ShoppingCart,
} from 'lucide-react';
import { useContext } from 'react';
import { cartContext } from '../../context/Cart';
import { CartActionType, IProductCart } from '../../interface/cart';

export default function HeaderNav() {
  const { cartstate, dispatch } = useContext(cartContext);
  const totalItems = cartstate.carts.reduce((sum: number, item: IProductCart) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-md py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-8">
        <NavItem href="/" icon={<Home className="w-6 h-6" />} label="Trang chủ" />
        <NavItem href="/khoa-hoc" icon={<GraduationCap className="w-6 h-6" />} label="Đăng kí học" />
        <NavItem href="/sach" icon={<BookMarked className="w-6 h-6" />} label="Mua sách" />
        <NavItem href="/de-thi" icon={<School className="w-6 h-6" />} label="Đề thi" />
        <NavItem href="/tailieu" icon={<Archive className="w-6 h-6" />} label="Tài liệu" />

        <div className="ml-0 md:ml-auto flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: CartActionType.ChangeStatusCart, payload: true })}
            className="relative flex flex-col items-center text-base text-gray-700 hover:text-yellow-600 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-sm hidden sm:block">Giỏ hàng</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                {totalItems}
              </span>
            )}
          </button>

          <div className="flex flex-col items-center text-base text-gray-700 hover:text-yellow-600 cursor-pointer transition">
            <KeyRound className="w-6 h-6" />
            <p className="text-sm hidden sm:block">Đăng nhập</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center px-3 py-2 rounded-lg text-base text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 transition"
    >
      {icon}
      <span className="text-sm hidden sm:block">{label}</span>
    </a>
  );
}
