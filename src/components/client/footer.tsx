
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaEdit,
} from "react-icons/fa";

const ClientFooter = () => {
  return (
    <footer className="bg-[#3a2700] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-10">
        {/* Left: Avatar + Name + Social */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/60"
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <h2 className="text-xl font-bold">Toán Thầy Thuận</h2>
          </div>
          {/* Social icons */}
          <div className="flex gap-3">
            <a className="bg-[#b38300] w-10 h-10 flex items-center justify-center rounded-full text-xl hover:opacity-80" href="#"><FaFacebookF /></a>
            <a className="bg-[#b38300] w-10 h-10 flex items-center justify-center rounded-full text-xl hover:opacity-80" href="#"><FaYoutube /></a>
            <a className="bg-[#b38300] w-10 h-10 flex items-center justify-center rounded-full text-xl hover:opacity-80" href="#"><FaTiktok /></a>
            <a className="bg-[#b38300] w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold hover:opacity-80" href="#">Zalo</a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="mt-6 md:mt-0 text-sm space-y-3">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>70 Nguyễn Đức Cảnh – Tương Mai, Hoàng Mai, Hà Nội</span>
          </div>
          <div className="flex items-start gap-2">
            <FaEdit className="mt-1" />
            <span>Chịu trách nhiệm nội dung: Hồ Thức Thuận</span>
          </div>
          <div className="flex items-start gap-2">
            <FaEnvelope className="mt-1" />
            <span>hothucthuan@gmail.com</span>
          </div>
          <div className="flex items-start gap-2">
            <FaPhoneAlt className="mt-1" />
            <span>0869998668</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-300 mt-6">
        Phát triển bởi <a href="#" className="underline">NewTeam Dev</a>
      </div>
    </footer>
  );
};

export default ClientFooter;
