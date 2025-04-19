import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
          Sign In
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-center text-[17px]">
          Enter your email and password to sign in
        </Typography>

        <form action="#" className="text-left">
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="you@email.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              id="password"
              size="lg"
              placeholder="********"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity} className="cursor-pointer">
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>

          {/* Sign In Button */}
          <Button color="gray" size="lg" className="mt-4" fullWidth>
            Sign In
          </Button>

          {/* Forgot Password */}
          <div className="mt-3 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium hover:underline text-sm"
            >
              Forgot password?
            </Typography>
          </div>

          {/* Google Sign In */}
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />
            Sign in with Google
          </Button>

          {/* Link to Create Account */}
          <Typography
            variant="small"
            color="gray"
            className="mt-6 text-center font-normal"
          >
            Not registered?{" "}
            <Link to={'/signup'} className="font-medium text-gray-900 hover:underline">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
