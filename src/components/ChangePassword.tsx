import { useNavigate } from "react-router";

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="ml-10 md:ml-85 lg:ml-95 mr-10 2xl:mr-18 w-full max-w-[959px] max-h-[837px] border border-n-4 rounded-2xl shadow-boder px-7 py-4 mx-18">
      <div className="flex justify-between items-center">
        <h2 className="logo text-2xl underline underline-offset-4 decoration-2 decoration-primary">
          Change Password
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="border-none p-0 bg-n-1 text-black underline logo text-sm"
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-4 mt-8">
        <img src="/avatar.svg" alt="avatar image" />
        <div className="space-y-1">
          <h3 className="logo text-xl">Sundar Gurung</h3>
          <p className="text-inter-400 text-base text-black">
            sundargurung360@gmail.com
          </p>
        </div>
      </div>
      <div className="max-w-[902px] max-h-[534px] my-7 px-9 py-11 border border-n-5 rounded-xl ">
        <form action="">
          <div className="space-y-4 w-full max-w-[511px]">
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="current-passwor">
                Current Password
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="current-password"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="new-passwor">
                New Password
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="new-password"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="confirm-passwor">
                Confirm Password
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="confirm-password"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-1">
              <button
                onClick={(e) => {
                  navigate("/accountinformation");
                  e.preventDefault();
                }}
                className="text-sm bg-foreign rounded-md px-6 py-2"
              >
                Update Password
              </button>
              <button
                onClick={(e) => {
                  navigate("/accountinformation");
                  e.preventDefault();
                }}
                className="text-sm bg-foreign rounded-md px-6 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
