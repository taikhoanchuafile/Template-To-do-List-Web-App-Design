import { useState } from "react";
import { useNavigate } from "react-router";

const AccountInfomation = () => {
  const navigate = useNavigate();
  const [isUpdate, setUpdate] = useState(false);
  return (
    <div className="ml-10 md:ml-85 lg:ml-95 mr-10 2xl:mr-18 w-full max-w-[959px] max-h-[837px] border border-n-4 rounded-2xl shadow-boder px-7 py-4 mx-18">
      <div className="flex justify-between items-center">
        <h2 className="logo text-2xl underline underline-offset-4 decoration-2 decoration-primary">
          Account Information
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
      {/* form */}
      <div className="max-w-[902px] max-h-[534px] mt-7 px-9 py-11 border border-n-5 rounded-xl ">
        <form action="">
          <div className="space-y-4 w-full max-w-[511px]">
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="firstname">
                First Name
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="firstname"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="lastname"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="email">
                Email Address
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="email"
                id="email"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="contact-number">
                Contact Number
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="number"
                id="contact-number"
              />
            </div>
            <div className="space-y-2">
              <label className="sub-text-msb-sm" htmlFor="position">
                Position
              </label>
              <input
                className="p-1 block w-full rounded-md border border-n-5"
                type="text"
                id="position"
              />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-1">
              {isUpdate ? (
                <button className="text-sm bg-foreign rounded-md px-6 py-2">
                  Save Change
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setUpdate(true);
                  }}
                  className="text-sm bg-foreign rounded-md px-6 py-2"
                >
                  Update Indo
                </button>
              )}

              {isUpdate ? (
                <button
                  onClick={(e) => {
                    setUpdate(false);
                    e.preventDefault();
                  }}
                  className="text-sm bg-foreign rounded-md px-6 py-2"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    navigate("/changepassword");
                    e.preventDefault();
                  }}
                  className="text-sm bg-foreign rounded-md px-6 py-2"
                >
                  Change Password
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfomation;
