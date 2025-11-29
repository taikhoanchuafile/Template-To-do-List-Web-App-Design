const SignIn = () => {
  return (
    <div className="w-full h-full relative bg-[url(/bg-signup.webp)] bg-center bg-cover bg-no-repeat flex items-center justify-center rounded-card-0">
      <div className="bg-primary absolute inset-0 opacity-92 rounded-card-0"></div>
      <div className="relative z-10 px-12 py-36 bg-n-1 shadow-border-0 w-full max-w-[1236px] h-full max-h-[767px] flex gap-2 rounded-card-0">
        <div className="w-full space-y-17 md:max-w-[559px] h-full max-h-[474px]">
          <div className="space-y-6">
            <h1>Sign In</h1>
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
                src="/mdi_password.svg"
                alt="icon password"
              />
              <input
                className="w-full sub-text"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex gap-4 items-center">
              <input className="size-5" type="checkbox" id="check-idea" />
              <label className="sub-text" htmlFor="check-idea">
                Remember me
              </label>
            </div>
            <button className="w-full md:w-fit">Login</button>
          </div>

          <div className="space-y-4 text-center md:text-start">
            <div className="flex gap-5 items-center justify-center md:justify-start">
              <p className="sub-text">Or, Login with</p>
              <div className="*:img:size-7 flex gap-3">
                <a href="#">
                  <img src="/FB.svg" alt="icon facebook" />
                </a>
                <a href="#">
                  <img src="/GOOGLE.svg" alt="icon google" />
                </a>
                <a href="#">
                  <img src="/X.svg" alt="icon X" />
                </a>
              </div>
            </div>
            <p className="sub-text">
              Don't have account?{" "}
              <span>
                <a href="/signup" className="text-link">
                  Create One
                </a>
              </span>
            </p>
          </div>
        </div>
        {/* <div className="md:flex hidden flex-1 items-end"></div> */}
        <div className="md:flex hidden absolute -bottom-12 right-3 md:opacity-20 xl:opacity-100 -z-10">
          <img
            className="size-153 max-h-[90%]"
            src="/bg-signin.svg"
            alt="img signin"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
