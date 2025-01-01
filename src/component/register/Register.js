import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Register = ({ isOpenRegister, onClose, onLoginClick }) => {
  if (!isOpenRegister) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute w-10 h-10 rounded-full right-4 top-4 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X color="#000" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-[28px] text-gray-900 font-bold mb-2">
            Đăng ký tài khoản
          </h2>
        </div>
        <div>
          <div className="mb-3">
            <button className="w-full p-3 border rounded-full hover:bg-gray-50 flex items-center justify-center space-x-3 relative">
              <img
                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform=''%3e%3cg%20fill-rule='evenodd'%3e%3cpath%20d='m17.64%209.2a10.341%2010.341%200%200%200%20-.164-1.841h-8.476v3.481h4.844a4.14%204.14%200%200%201%20-1.8%202.716v2.264h2.909a8.777%208.777%200%200%200%202.687-6.62z'%20fill='%234285f4'/%3e%3cpath%20d='m9%2018a8.592%208.592%200%200%200%205.956-2.18l-2.909-2.258a5.43%205.43%200%200%201%20-8.083-2.852h-3.007v2.332a9%209%200%200%200%208.043%204.958z'%20fill='%2334a853'/%3e%3cpath%20d='m3.964%2010.71a5.321%205.321%200%200%201%200-3.42v-2.332h-3.007a9.011%209.011%200%200%200%200%208.084z'%20fill='%23fbbc05'/%3e%3cpath%20d='m9%203.58a4.862%204.862%200%200%201%203.44%201.346l2.581-2.581a8.649%208.649%200%200%200%20-6.021-2.345%209%209%200%200%200%20-8.043%204.958l3.007%202.332a5.364%205.364%200%200%201%205.036-3.71z'%20fill='%23ea4335'/%3e%3c/g%3e%3cpath%20d='m0%200h18v18h-18z'%20fill='none'/%3e%3c/g%3e%3c/svg%3e"
                className="w-5 h-5 absolute left-[16px]"
                alt="Google"
              />
              <span className="text-[14px] font-semibold line-[40px] text-[#000] ">
                Đăng ký với Google
              </span>
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#dce0e3] focus:outline-none text-[#000]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select User
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#dce0e3] focus:outline-none text-[#000]">
              <option></option>
              <option>Hospital User</option>
              <option>General User</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#dce0e3] focus:outline-none text-[#000]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#dce0e3] focus:outline-none text-[#000]"
            />
          </div>
          <button className="w-full bg-[#f05123] p-3 rounded-lg font-semibold hover:bg-[#d63f11] transition-colors duration-200">
            Đăng ký
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Bạn đã có tài khoản?
            <Link
              to=""
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onLoginClick();
              }}
              className="text-[#f05123] font-semibold underline ml-1"
            >
              Đăng nhập
            </Link>
          </p>
          <Link
            to=""
            className="text-[#f05123] font-semibold underline block mt-2"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <div className="mt-6 text-center text-sm text-[#666]">
          <p>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
            <Link to="" className="underline ml-1">
              điều khoản sử dụng
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
