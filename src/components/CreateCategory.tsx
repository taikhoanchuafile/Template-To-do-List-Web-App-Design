import { useNavigate } from "react-router";
const CreateCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="md:ml-90 lg:ml-100 mr-10 2xl:mr-18 w-full max-w-[959px] max-h-[837px] border border-n-4 rounded-2xl shadow-boder px-6 py-4 mx-18">
      <div className="flex justify-between items-center">
        <h2 className="logo text-2xl underline underline-offset-4 decoration-2 decoration-primary">
          Create Categories
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="border-none p-0 bg-n-1 text-black underline logo text-sm"
        >
          Go Back
        </button>
      </div>
      <form action="">
        <div className="mt-6">
          <label className="sub-text-msb-sm" htmlFor="category">
            Category Name
          </label>
          <input
            className="block mt-2 rounded-md p-2 border border-n-5 max-w-[511px] w-full"
            type="text"
          />
        </div>
        <div className="mt-8 flex gap-1">
          <button
            onClick={(e) => {
              navigate("/taskcategory");
              e.preventDefault();
            }}
            className="sub-text text-sm px-10 py-2 rounded-md bg-foreign"
          >
            Create
          </button>
          <button
            onClick={(e) => {
              navigate("/taskcategory");
              e.preventDefault();
            }}
            className="sub-text text-sm px-10 py-2 rounded-md bg-foreign"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
