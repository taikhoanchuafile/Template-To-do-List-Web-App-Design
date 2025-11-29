import { useNavigate } from "react-router";
import Modal from "./Modal";
import { useState } from "react";

const TaskCategory = () => {
  const navigate = useNavigate();
  const [openNewTask, setOpenNewTask] = useState(false);
  const [model, setModel] = useState("add");
  const [category, setCategory] = useState("status");
  return (
    <div className="ml-10 md:ml-85 lg:ml-95 mr-10 2xl:mr-18 w-full max-w-[959px] max-h-[837px] border border-n-4 rounded-2xl shadow-boder">
      {/* dialog priority*/}
      <Modal open={openNewTask} onClose={() => setOpenNewTask(false)}>
        <div
          className="flex flex-col bg-n-1 rounded-button shadow-border-0 px-15 py-12 sm:w-full sm:h-full max-w-[500px] max-h-[500px] lg:max-w-[918px] lg:max-h-[708px]"
          onClick={(e) => e.stopPropagation()} // chặn click xuyên
        >
          <div className="flex justify-between items-center">
            <h2 className="logo text-base underline underline-offset-4 decoration-2 decoration-primary">
              {model === "add" ? "Add" : "Edit"} Task{" "}
              {category === "status" ? "Status" : "Priority"}
            </h2>
            <button
              className="border-none p-0 bg-n-1 text-black underline logo text-sm"
              onClick={() => {
                setOpenNewTask(false);
                setModel("add");
              }}
            >
              Go Back
            </button>
          </div>

          <div className="p-4 border border-n-5 mt-10 flex-1">
            <form action="">
              <div className="">
                <label className="sub-text-msb-sm" htmlFor="category">
                  Task {category === "status" ? "Status" : "Priority"} Title
                </label>
                <input
                  className="block mt-2 rounded-md p-2 border border-n-5 max-w-[511px] w-full"
                  type="text"
                />
              </div>
              <div className="mt-8 flex gap-1">
                <button
                  onClick={(e) => {
                    setOpenNewTask(false);
                    e.preventDefault();
                  }}
                  className="sub-text text-sm px-10 py-2 rounded-md bg-foreign"
                >
                  {model === "add" ? "Create" : "Update"}
                </button>
                <button
                  onClick={(e) => {
                    setOpenNewTask(false);
                    e.preventDefault();
                  }}
                  className="sub-text text-sm px-10 py-2 rounded-md bg-foreign"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/* Phan dau */}
      <div className="px-7 py-4">
        <div className="flex justify-between items-center">
          <h2 className="logo text-2xl underline underline-offset-4 decoration-2 decoration-primary">
            Task Categories
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="border-none p-0 bg-n-1 text-black underline logo text-sm"
          >
            Go Back
          </button>
        </div>
        <button
          onClick={(e) => {
            navigate("/createcategory");
            e.preventDefault();
          }}
          className="mt-5 px-4 py-2 text-inter-500 text-sm bg-foreign"
        >
          Add Category
        </button>

        {/* task status */}
        <div className="mt-11">
          <div className="flex justify-between">
            <h2 className="logo text-base underline decoration-2 decoration-primary">
              Task status
            </h2>
            <div
              onClick={() => {
                setOpenNewTask(true);
                setCategory("status");
                setModel("add");
              }}
              className="flex gap-1 items-center text-inter-400 group cursor-pointer"
            >
              <img
                className="size-3 group-hover:hidden"
                src="/iconAddTask.svg"
                alt="icon add task"
              />
              <img
                className="size-3 hidden group-hover:inline"
                src="/iconAddTaskHover.svg"
                alt="icon add task hover"
              />
              <p className="group-hover:text-primary">Add Task Status</p>
            </div>
          </div>

          {/* table */}
          <div className="border border-n-4 rounded-menu shadow-boder mt-4">
            {/* thead */}
            <div className="grid grid-cols-3 px-5 py-4 sub-text-msb-sm text-base capitalize">
              <div>SN</div>
              <div>Task Status</div>
              <div className="text-center">Action</div>
            </div>
            {/* tbody */}
            <div className="border-t border-n-4 sub-text capitalize">
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>1</div>
                <div>Completed</div>
                <div className="flex flex-row justify-center gap-2 md:gap-7">
                  <button
                    onClick={() => {
                      setOpenNewTask(true);
                      setCategory("status");
                      setModel("edit");
                    }}
                    className="px-2 sm:px-5 py-2 flex rounded-lg bg-foreign"
                  >
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 flex rounded-lg bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>2</div>
                <div>In Progress</div>
                <div className="flex justify-center gap-2 md:gap-7">
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>3</div>
                <div>Not Started</div>
                <div className="flex justify-center gap-2 md:gap-7">
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 flex rounded-lg bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* phan 2 */}
      <div className="p-7 mt-4 border-t border-n-4">
        <div>
          <div className="flex justify-between">
            <h2 className="logo text-base underline decoration-2 decoration-primary">
              Task Priority
            </h2>
            <div
              onClick={() => {
                setOpenNewTask(true);
                setCategory("priority");
                setModel("add");
              }}
              className="flex gap-1 items-center text-inter-400 group cursor-pointer"
            >
              <img
                className="size-3 group-hover:hidden"
                src="/iconAddTask.svg"
                alt="icon add task"
              />
              <img
                className="size-3 hidden group-hover:inline"
                src="/iconAddTaskHover.svg"
                alt="icon add task hover"
              />
              <p className="group-hover:text-primary">Add Task Priority</p>
            </div>
          </div>

          {/* table */}
          <div className="border border-n-4 rounded-menu shadow-boder mt-4">
            {/* thead */}
            <div className="grid grid-cols-3 px-5 py-4 sub-text-msb-sm text-base capitalize">
              <div>SN</div>
              <div>Task Priority</div>
              <div className="text-center">Action</div>
            </div>
            {/* tbody */}
            <div className="border-t border-n-4 sub-text capitalize">
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>1</div>
                <div>Extreme</div>
                <div className="flex justify-center gap-2 md:gap-7">
                  <button
                    onClick={() => {
                      setOpenNewTask(true);
                      setCategory("priority");
                      setModel("edit");
                    }}
                    className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign"
                  >
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>2</div>
                <div>Moderate</div>
                <div className="flex justify-center gap-2 md:gap-7">
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 px-5 py-4 items-center">
                <div>3</div>
                <div>Low</div>
                <div className="flex justify-center gap-2 md:gap-7">
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img
                      className="size-4"
                      src="/iconNote.svg"
                      alt="icon note"
                    />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="px-2 sm:px-5 py-2 rounded-lg flex bg-foreign">
                    <img className="size-4" src="/iconBin.svg" alt="icon bin" />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCategory;
