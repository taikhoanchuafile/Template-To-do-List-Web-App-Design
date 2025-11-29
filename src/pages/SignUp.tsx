const SignUp = () => {
  return (
    <div className="w-full h-full relative bg-[url(/bg-signup.webp)] bg-center bg-cover bg-no-repeat flex items-center justify-center rounded-card-0">
      <div className="bg-primary absolute inset-0 opacity-92 rounded-card-0"></div>
      <div className="relative z-10 px-12 pt-9 pb-7 bg-n-1 shadow-border-0 w-full max-w-[1236px] h-full max-h-[767px] flex justify-end rounded-card-0">
        <div className="md:flex hidden absolute -z-10 left-0 bottom-0 md:opacity-20 xl:opacity-100">
          <img className="w-108 h-163" src="/bg-signup.svg" alt="img signup" />
        </div>
        <div className="w-full md:max-w-[559px] h-full max-h-[702px] flex flex-col gap-5">
          <h1>Sign Up</h1>
          <div className="input-wrapper">
            <img
              className="size-7 "
              src="/icon-park-solid_edit-name.svg"
              alt="icon firtname"
            />
            <input
              className="w-full sub-text"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div className="input-wrapper">
            <img
              className="size-7"
              src="/icon-park-outline_edit-name.svg"
              alt="icon last name"
            />
            <input
              className="w-full sub-text"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="input-wrapper">
            <img className="size-7" src="/mdi_user.svg" alt="icon username" />
            <input
              className="w-full sub-text"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="input-wrapper">
            <img
              className="size-7"
              src="/ic_baseline-email.svg"
              alt="icon email"
            />
            <input
              className="w-full sub-text"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="input-wrapper">
            <img
              className="size-7"
              src="/mdi_password.svg"
              alt="icon password"
            />
            <input
              className="w-full sub-text"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="input-wrapper">
            <img
              className="size-7 "
              src="/mdi_password-outline.svg"
              alt="icon confirm password"
            />
            <input
              className="w-full sub-text"
              type="password"
              placeholder="confirm Password"
            />
          </div>
          <div className="flex gap-6 items-center mt-3">
            <input className="size-5" type="checkbox" id="check-idea" />
            <label className="sub-text" htmlFor="check-idea">
              I agree to all terms
            </label>
          </div>
          <button>Register</button>
          <p className="sub-text text-center md:text-start">
            Already have an account?{" "}
            <span>
              <a href="/signin" className="text-link">
                Sign In
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
