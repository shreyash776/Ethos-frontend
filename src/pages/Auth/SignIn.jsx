import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signIn } from "../../features/auth/authApi"; // Ensure this is correct
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/BackgroundImages/logo.gif";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError("Invalid password format");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      const result = await dispatch(signIn({ email, password }));

      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Sign-in successful!");
        navigate("/");
      } else {
        toast.error(result.payload || "Sign-in failed, please try again.");
      }
    } else {
      toast.error("Please fix the validation errors.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-transparent to-black bg-opacity-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div
        className={`absolute top-0  md:relative  w-full shadow-lg p-8 transform transition-transform duration-500 pt-24
        col-span-1 backdrop-blur-sm h-full  ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <h1 className="text-xl font-semibold text-center text-white py-2">
          Sign In
        </h1>
        <p className="text-center text-gray-300 text-xs font-mono pb-5">
          The beauty of technology lies in its ability to take fleeting moments
          and reconstruct them into something lasting, something extraordinary.
        </p>
        <form onSubmit={handleSubmit} id="signInForm" className="space-y-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              required
              className="mt-1 block w-full px-4 py-3 border outline-none rounded-md shadow-sm bg-gray-800 border-blue-100 text-white focus:border-blue-500"
            />
            <div className="h-6">
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm bg-gray-800 outline-none border-blue-100 text-white focus:border-blue-500"
            />
            <div className="h-6">
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label
              htmlFor="remember"
              className="flex items-center text-sm font-medium text-gray-300"
            >
              <input type="checkbox" id="remember" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-5">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-white text-xs">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
        >
          Sign In with Google
        </button>
      </div>

    
      <div className="flex items-center justify-end md:col-span-1 lg:col-span-2 bg-black md:order-last order-first ">
        <img
          src={backgroundImage}
          className="w-full h-screen object-cover"
          alt="background"
        />
      </div>
    </div>
  );
};

export default SignIn;