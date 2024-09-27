import { useDispatch } from "react-redux";
import { signUp } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/BackgroundImages/logo.gif";
import { useEffect, useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  const [isVisible, setIsVisible] = useState(false);

  const handleValidation = (name, value) => {
    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      errorMessage = "This field is required.";
    } else {
      switch (name) {
        case "email":
          if (!emailRegex.test(value)) {
            errorMessage = "Please enter a valid email address.";
          }
          break;
        case "password":
          if (value.length < 6) {
            errorMessage = "Password must be at least 6 characters.";
          }
          break;
        case "confirmPassword":
          if (value !== formValues.password) {
            errorMessage = "Passwords do not match.";
          }
          break;
        default:
          break;
      }
    }

   
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    handleValidation(name, value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    let isValid = true;
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        handleValidation(key, formValues[key]);
        isValid = false;
      }
    });

    if (isValid) {
      
      const formData = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      };
      dispatch(signUp(formData));
      navigate("/");
    }
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-l from-gray-900 via-transparent to-black bg-opacity-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="flex items-center justify-end md:col-span-1 lg:col-span-2  min-h-screen">
        <img
          src={backgroundImage}
          className="w-full h-screen object-cover transform scale-x-[-1]"
          alt="background"
        />
      </div>

      <div
        className={`absolute top-0  md:relative  w-full  backdrop-blur-sm shadow-lg p-8 transform transition-transform duration-500 pt-20  
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >
        <h1 className="text-xl font-semibold text-center text-white py-2">
          Sign Up
        </h1>
        <p className="text-center text-gray-300 text-xs font-mono pb-5">
          Unlock the power of possibility. Your new adventure starts here.
        </p>

        <form onSubmit={handleSubmit} id="signUpForm" className="space-y-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className=" block w-full px-4 py-3 border border-gray-100 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none  focus:border-blue-500"
            />
            <p
              className={`text-red-500 text-xs pt-1 min-h-[20px] ${
                errors.name ? "visible" : "invisible"
              }`}
            >
              {errors.name}
            </p>
          </div>

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
              name="email"
              required
              onChange={handleChange}
              className=" block w-full px-4 py-3 border border-gray-100 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            <p
              className={`text-red-500 text-xs pt-1 min-h-[20px] ${
                errors.email ? "visible" : "invisible"
              }`}
            >
              {errors.email}
            </p>
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
              name="password"
              required
              onChange={handleChange}
              className=" block w-full px-4 py-3 border border-gray-100 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            <p
              className={`text-red-500 text-xs pt-1 min-h-[20px] ${
                errors.password ? "visible" : "invisible"
              }`}
            >
              {errors.password}
            </p>
          </div>

        
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={handleChange}
              className=" block w-full px-4 py-3 border border-gray-100 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            <p
              className={`text-red-500 text-xs pt-1 min-h-[20px] ${
                errors.confirmPassword ? "visible" : "invisible"
              }`}
            >
              {errors.confirmPassword}
            </p>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
