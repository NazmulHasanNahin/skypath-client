import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
          Sign Up
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-center text-[17px]">
          Create your account to explore the world with Skypath
        </Typography>

        {/* ✅ Only Name, Email, Password kept inside the form */}
        <form action="#" className="text-left">
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Name
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
            />
          </div>

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
                <i onClick={togglePasswordVisibility} className="cursor-pointer">
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>

          <Button color="gray" size="lg" className="mt-4" fullWidth>
            Create Account
          </Button>
        </form>


        {/* Google Sign Up */}
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
          Sign up with Google
        </Button>

        {/* Already have an account */}
        <Typography
          variant="small"
          color="gray"
          className="mt-6 text-center font-normal"
        >
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-gray-900 hover:underline">
            Sign in
          </Link>
        </Typography>
      </div>
    </section>
  );
};

export default Signup;
