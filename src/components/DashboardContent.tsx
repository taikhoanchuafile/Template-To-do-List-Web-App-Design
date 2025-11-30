import { useState } from "react";
import CardCompletedTask from "./CardCompletedTask";
import CardTodo from "./CardTodo";
import ProgressBar from "./ProgressBar";
import { ChevronDown } from "lucide-react";
import Modal from "./Modal";

const DashboardContent = () => {
  const [openInvite, setOpenInvite] = useState(false);
  const [openNewTask, setOpenNewTask] = useState(false);
  const [model, setModel] = useState("add");

  return (
    <div className="md:ml-90 px-10 xl:px-19 pb-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end sm:justify-between">
        <div className="hidden sm:flex gap-4">
          <h1 className="font-inter font-medium text-4xl leading-8 tracking-normal whitespace-nowrap">
            Welcome back, Sundar
          </h1>
          <img src="/hand-wave.svg" alt="icon hand" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 relative">
            <img
              className="size-9 hidden xl:inline"
              src="/a1.svg"
              alt="avatar 1"
            />
            <img
              className="size-9  hidden xl:inline"
              src="/a2.svg"
              alt="avatar 1"
            />
            <img
              className="size-9  hidden xl:inline"
              src="/a3.svg"
              alt="avatar 1"
            />
            <img
              className="size-9 hidden xl:inline"
              src="/a4.svg"
              alt="avatar 1"
            />
            <img className="size-9" src="/a5.svg" alt="avatar 1" />
            <img
              className="size-9 absolute right-0"
              src="/number.svg"
              alt="number"
            />
          </div>
          <button
            onClick={() => setOpenInvite(true)}
            className="flex gap-2 text-inter-500 text-sm px-4 py-3 border border-primary rounded-input text-primary bg-n-1"
          >
            <img className="w-5 h-3" src="/iconGroup.svg" alt="icon group" />
            Invite
          </button>
        </div>
      </div>

      {/* diablog Invite */}
      <Modal open={openInvite} onClose={() => setOpenInvite(false)}>
        <div
          className="bg-n-1 rounded-button shadow-border-0 p-6 w-full h-full max-w-[602px] max-h-[579px]"
          onClick={(e) => e.stopPropagation()} // chặn click xuyên
        >
          <div className="flex justify-between items-center">
            <h2 className="logo text-base underline underline-offset-4 decoration-2 decoration-primary">
              Send an invite to a new member
            </h2>
            <button
              className="border-none p-0 bg-n-1 text-black underline logo text-sm"
              onClick={() => setOpenInvite(false)}
            >
              Go Back
            </button>
          </div>
          <div className="flex flex-1 px-3 py-4 mt-7 flex-col border border-n-4">
            {/* Email */}
            <div className="space-y-2">
              <label className="logo text-sm" htmlFor="email">
                Email
              </label>
              <div className="flex gap-1">
                <input
                  className="p-3 w-full border border-n-5 rounded-md"
                  type="email"
                  placeholder="neerajgurung99@gmail.com"
                  id="email"
                />
                <button className="px-6 py-2 sub-text text-xs bg-foreign shrink-0">
                  Send Invite
                </button>
              </div>
            </div>

            {/* Member */}
            <div className="mt-7 mb-13 space-y-2">
              <label className="logo text-sm">Member</label>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full object-center object-cover size-11"
                    src="/avatar.svg"
                    alt="avatar icon"
                  />
                  <div>
                    <h2 className="logo text-sm">Upashna Gurung</h2>
                    <p className="text-inter-400">uppaeygrg332@gmail.com</p>
                  </div>
                </div>
                <button className="border-none p-0 bg-n-1 text-black flex items-center gap-3 sub-text text-xs">
                  Can edit <ChevronDown className="size-5" />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full object-center object-cover size-11"
                    src="/avatar.svg"
                    alt="avatar icon"
                  />
                  <div>
                    <h2 className="logo text-sm">Upashna Gurung</h2>
                    <p className="text-inter-400">uppaeygrg332@gmail.com</p>
                  </div>
                </div>
                <button className="border-none p-0 bg-n-1 text-black flex items-center gap-3 sub-text text-xs">
                  Can edit <ChevronDown className="size-5" />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full object-center object-cover size-11"
                    src="/avatar.svg"
                    alt="avatar icon"
                  />
                  <div>
                    <h2 className="logo text-sm">Upashna Gurung</h2>
                    <p className="text-inter-400">uppaeygrg332@gmail.com</p>
                  </div>
                </div>
                <button className="border-none p-0 bg-n-1 text-black flex items-center gap-3 sub-text text-xs">
                  Can edit <ChevronDown className="size-5" />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full object-center object-cover size-11"
                    src="/avatar.svg"
                    alt="avatar icon"
                  />
                  <div>
                    <h2 className="logo text-sm">Upashna Gurung</h2>
                    <p className="text-inter-400">uppaeygrg332@gmail.com</p>
                  </div>
                </div>
                <button className="border-none p-0 bg-n-1 text-black flex items-center gap-3 sub-text text-xs">
                  Can edit <ChevronDown className="size-5" />
                </button>
              </div>
            </div>

            {/* Project link */}
            <div className="space-y-2">
              <label className="logo text-sm" htmlFor="link">
                Project Link
              </label>
              <div className="flex gap-1">
                <input
                  className="p-3 w-full border border-n-5 rounded-md"
                  type="text"
                  placeholder="https://sharelinkhereandthere.com/34565yy29"
                  id="link"
                />
                <button className="px-6 py-2 sub-text text-xs bg-foreign shrink-0">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* diablog add new task */}
      <Modal open={openNewTask} onClose={() => setOpenNewTask(false)}>
        <div
          className="bg-n-1 rounded-button shadow-border-0 p-6 sm:px-15 sm:py-12 w-full h-full max-w-[918px] max-h-[708px]"
          onClick={(e) => e.stopPropagation()} // chặn click xuyên
        >
          <div className="flex justify-between items-center">
            <h2 className="logo text-base underline underline-offset-4 decoration-2 decoration-primary">
              {model === "add" ? "Add new task" : "Edit task"}
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

          <form
            action=""
            className="w-full h-full max-w-[794px] lg:max-h-[476px] mt-10"
          >
            <div className="flex gap-4 flex-1 px-4 py-3  flex-col border border-n-4 ">
              <div className="space-y-2">
                <label className="sub-text-msb-sm" htmlFor="firstname">
                  Title
                </label>
                <input
                  className="p-1 block w-full max-w-[511px] rounded-md border border-n-5"
                  type="text"
                  id="firstname"
                />
              </div>
              <div className="space-y-2">
                <label className="sub-text-msb-sm" htmlFor="date">
                  Date
                </label>
                <input
                  className="p-1 block w-full max-w-[511px] rounded-md border border-n-5 "
                  type="date"
                  id="date"
                />
              </div>
              <div className="sub-text-msb-sm">
                Priority
                <div className="mt-2 flex gap-4 sm:gap-13 flex-wrap">
                  <div className="flex gap-2 items-center">
                    <div className="size-2 rounded-full bg-status-1"></div>
                    <label className="text-inter-400 text-sm" htmlFor="extreme">
                      Extreme
                    </label>
                    <input type="checkbox" value="extreme" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="size-2 rounded-full bg-status-2"></div>
                    <label
                      className="text-inter-400 text-sm"
                      htmlFor="moderate"
                    >
                      Moderate
                    </label>
                    <input type="checkbox" value="moderate" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="size-2 rounded-full bg-status-3"></div>
                    <label className="text-inter-400 text-sm" htmlFor="low">
                      Low
                    </label>
                    <input type="checkbox" value="low" />
                  </div>
                </div>
              </div>

              {/* modal-cuoi */}
              <div className="flex flex-wrap gap-2 md:gap-9 ">
                <div className="logo text-sm flex flex-col gap-2">
                  Task Description
                  <textarea
                    cols={100}
                    rows={50}
                    placeholder="Start writing here....."
                    className="resize-none p-4 w-full max-w-[511px] max-h-[205px] border border-n-5 rounded-md"
                  />
                </div>
                <div className="logo text-sm flex flex-col gap-2">
                  Upload Image
                  <div
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                    className="w-full h-full px-9 py-6 max-w-[214px] max-h-[205px] border border-n-5 rounded-md flex flex-col items-center cursor-pointer"
                  >
                    <img src="/iconPicture.svg" alt="icon upload" />
                    <p className="mt-6 sub-text font-normal text-xs">
                      Drag&Drop files here
                    </p>
                    <p className="mt-2 sub-text font-normal text-xs">or</p>
                    <div className="mt-2 sub-text text-sm px-3 py-1 border border-n-5 rounded-md">
                      Brower
                    </div>
                    <input
                      className="hidden"
                      type="file"
                      name=""
                      id="fileInput"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                setOpenNewTask(false);
                setModel("add");
                e.preventDefault();
              }}
              className="mt-10 ml-5 px-4 py-2 bg-foreign"
            >
              Done
            </button>
          </form>
        </div>
      </Modal>

      {/* Content */}
      <div className="overflow-auto px-6 py-5 border border-n-4 shadow-boder">
        <div className="flex flex-col-reverse gap-3 xl:flex-row">
          {/* left */}
          <div className="shadow-border-0 rounded-menu ">
            <div className="flex gap-4 flex-col px-6 pt-5 pb-9">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="text-primary flex gap-1 items-center text-inter-500">
                    <img
                      className="size-7"
                      src="/iconTodo.svg"
                      alt="icon todo"
                    />
                    To-Do
                  </div>
                  <div
                    onClick={() => setOpenNewTask(true)}
                    className="flex gap-1 pr-4 items-center text-inter-400 group cursor-pointer"
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
                    <p className="group-hover:text-primary">Add Task</p>
                  </div>
                </div>
                <p className="text-inter-400">
                  <span className="text-black mr-3">20 June</span>.Today
                </p>
              </div>
              {/* 2 card dau */}
              <div className="flex flex-col gap-2">
                <CardTodo setModel={setModel} setOpenNewTask={setOpenNewTask} />
                <CardTodo setModel={setModel} setOpenNewTask={setOpenNewTask} />
              </div>
            </div>
            {/* card cuoi */}
            <div className="px-6 pb-5 pt-9 border-t border-n-4">
              <CardTodo setModel={setModel} setOpenNewTask={setOpenNewTask} />
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-5">
            {/* phần đầu */}
            <div className="p-6 space-y-2 shadow-border-0 rounded-menu xl:max-w-[426px] sm:max-h-[263px]">
              <div className="text-primary flex gap-2 items-center text-inter-500">
                <img
                  className="size-7"
                  src="/iconTaskStatus.svg"
                  alt="icon task status"
                />
                Task Status
              </div>
              {/* Progressbar */}
              <ProgressBar />
            </div>
            <div className="p-6 py-6 shadow-border-0 rounded-menu w-full xl:max-w-[423px] h-full max-h-[436px]">
              <div className="text-primary flex gap-2 items-center text-inter-500">
                <img className="size-7" src="/iconBook.svg" alt="icon book" />
                Completed Task
              </div>

              <div className="mt-5 mx-4 flex flex-col gap-3">
                <CardCompletedTask
                  setModel={setModel}
                  setOpenNewTask={setOpenNewTask}
                />
                <CardCompletedTask
                  setModel={setModel}
                  setOpenNewTask={setOpenNewTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
