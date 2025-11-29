type Props = {
  setOpenNewTask?: (value: boolean) => void;
  setModel?: (value: string) => void;
};

const CardTodo = ({ setOpenNewTask, setModel }: Props) => {
  return (
    <div className="relative border border-n-5 rounded-menu xl:max-w-[402px] xl:max-h-[166px] pl-10 pr-8 py-3">
      <div className="absolute top-3 left-3">
        <img src="/iconRoundRed.svg" alt="icon round red" />
      </div>

      <div className="absolute top-2 right-3">
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
      <a href="/viewtask" className="space-y-5">
        <div className="flex gap-2 items-end">
          <div className="flex flex-col gap-3">
            <h2 className="logo text-base text-black">
              Attend Nischal’s Birthday Party
            </h2>
            <p className="font-inter font-normal text-sm leading-[122%] tracking-normal text-n-6 line-clamp-3">
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
          </div>
          <img src="/Rectangle-10.svg" alt="Rectangle 10" />
        </div>
        <div className="flex gap-7">
          <div className="flex gap-3">
            <p className="text-inter-400 text-black text-[0.6rem]">
              Priority: <span className="text-priority-1">Moderate</span>
            </p>
            <p className="text-inter-400 text-black text-[0.6rem]">
              Status: <span className="text-status-1">Not Stated</span>
            </p>
          </div>
          <p className="text-inter-400 text-[0.6rem]">Created on: 20/06/2023</p>
        </div>
      </a>
    </div>
  );
};

export default CardTodo;
