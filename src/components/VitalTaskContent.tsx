import CardTodo from "./CardTodo";

const VitalTaskContent = () => {
  return (
    <div className="md:ml-80 lg:ml-90 px-10 2xl:px-19 max-w-[1075px] flex flex-col 2xl:flex-row gap-4">
      {/* phan 1 */}
      <div className="px-7 py-5 rounded-base shadow-border border border-n-4  2xl:max-w-[423px] max-h-[837px]">
        <h2 className="sub-text font-semibold underline underline-offset-4 decoration-primary decoration-2">
          Vital Task
        </h2>
        <div className="mt-4 flex justify-center flex-col lg:flex-row 2xl:flex-col gap-2">
          {/* bg-n-5 */}
          <CardTodo />
          <CardTodo />
        </div>
      </div>
      {/* phan 2 */}
      <div className=" px-5 py-4 rounded-base shadow-border border border-n-4 2xl:max-w-[511px] max-h-[837px] overflow-auto">
        <div className="flex gap-4">
          <img className="size-40" src="Rectangle-10.svg" alt="Rectangle-10" />
          <div className="space-y-4 mt-16">
            <h3 className="logo text-base">Attend Nischal’s Birthday Party</h3>
            <p className="text-inter-400 text-black">
              Priority: <span className="text-status-1">Extreme</span>
            </p>
            <p className="text-inter-400 text-black">
              Status: <span className="text-status-1">Not Started</span>
            </p>
            <p className="text-inter-400">Created on 20/06/2023</p>
          </div>
        </div>
        <div className="desc-article mt-5 ">
          <p className="mt-8">
            Take the dog to the park and bring treats as well.
          </p>

          <p className="mt-9">
            Take Luffy and Jiro for a leisurely stroll around the neighborhood.
            Enjoy the fresh air and give them the exercise and mental
            stimulation they need for a happy and healthy day. Don't forget to
            bring along squeaky and fluffy for some extra fun along the way!
          </p>

          <ol className="list-decimal list-inside mt-10">
            <li>Listen to a podcast or audiobook </li>
            <li>Practice mindfulness or meditation</li>
            <li>Take photos of interesting sights along the way</li>
            <li>Practice obedience training with your dog</li>
            <li>Chat with neighbors or other dog walkers</li>
            <li>Listen to music or an upbeat playlist</li>
          </ol>
        </div>
        <div className="flex gap-3 justify-end absolute bottom-8 right-25">
          <button className="p-2">
            <img src="/iconBin.svg" alt="bin icon" />
          </button>
          <button className="p-2">
            <img src="/iconNote.svg" alt="note icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VitalTaskContent;
