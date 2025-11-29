type Props = {
  setModel?: (value: string) => void;
  setOpenNewTask?: (value: boolean) => void;
};

const CardCompletedTask = ({ setModel, setOpenNewTask }: Props) => {
  return (
    <div className="relative  border border-n-5 rounded-menu xl:max-w-[338px] xl:max-h-[134px] pl-8 pr-3 py-3">
      <div className="absolute top-3 left-3">
        <img src="/iconRoundBlue.svg" alt="icon round blue" />
      </div>
      <div className="absolute top-0 right-3">
        <button className="p-0 peer bg-n-1">
          <img src="/3dot.svg" alt="icon ..." />
        </button>
        <div className="absolute p-1 text-inter-400 text-black space-y-1 bg-n-1 border border-n-7 rounded-input opacity-0 peer-focus:opacity-100 transition duration-500 ">
          <div className="hover:bg-n-5 cursor-pointer">Vital</div>
          <div
            onClick={() => {
              setModel?.("edit");
              setOpenNewTask?.(true);
            }}
            className="hover:bg-n-5 cursor-pointer"
          >
            Edit
          </div>
          <div className="hover:bg-n-5 cursor-pointer">Delete</div>
          <div className="hover:bg-n-5 cursor-pointer">Finish</div>
        </div>
      </div>
      <a href="" className="">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="logo text-base text-black">Walk the dog</h2>
            <p className="font-inter font-normal text-sm leading-[122%] tracking-normal text-n-6 line-clamp-3">
              Take the dog to the park and bring treats as well.
            </p>
            <p className="text-inter-400 text-black text-[0.6rem]">
              Status: <span className="text-status-3">Completed</span>
            </p>
            <p className="text-inter-400 text-[0.6rem]">
              Completed 2 days ago.
            </p>
          </div>
          <img src="/Rectangle-10.svg" alt="Rectangle 10" />
        </div>
      </a>
    </div>
  );
};

export default CardCompletedTask;
