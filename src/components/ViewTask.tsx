const ViewTask = () => {
  return (
    <div className="md:ml-100 mx-19 p-6 w-full max-w-[959px] max-h-[837px] border border-n-4 shadow-boder overflow-auto">
      <div className="flex gap-4">
        <img className="size-53" src="Rectangle-10.svg" alt="Rectangle-10" />
        <div className="space-y-4">
          <h2 className="logo text-2xl">Attend Nischal’s Birthday Party</h2>
          <p className="text-inter-400 text-black">
            Priority: <span className="text-status-2">Moderate</span>
          </p>
          <p className="text-inter-400 text-black">
            Status: <span className="text-status-1">Not Started</span>
          </p>
          <p className="text-inter-400">Created on 20/06/2023</p>
        </div>
      </div>
      <p className="text-inter-400 text-base mt-14">
        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
        Elements)
      </p>
      <ol className="list-decimal list-inside mt-7">
        <li className="desc-title font-normal text-n-6">
          A cake, with candles to blow out. (Layer cake, cupcake, flat sheet
          cake)
        </li>
        <li className="desc-title font-normal text-n-6">The birthday song.</li>
        <li className="desc-title font-normal text-n-6">
          A place to collect gifts.
        </li>
      </ol>
      <ul className="mt-8">
        <li className="desc-title">Optional:</li>
        <li className="desc-title font-normal text-n-6">
          Paper cone-shaped party hats, paper whistles that unroll
        </li>
        <li className="desc-title font-normal text-n-6">
          Games, activities (carry an object with your knees, then drop it into
          a milk bottle.)
        </li>
        <li className="desc-title font-normal text-n-6">
          Lunch: sandwich halves, or pizza slices, juice, pretzels, potato
          chips…THEN cake & candles and the song
        </li>
      </ul>
      <div className="flex gap-3 justify-end absolute bottom-8 right-25">
        <button className="p-2">
          <img src="/iconBin.svg" alt="bin icon" />
        </button>
        <button className="p-2">
          <img src="/iconNote.svg" alt="note icon" />
        </button>
        <button className="px-3 py-2">
          <img src="/iconChamThang.svg" alt="note icon" />
        </button>
      </div>
    </div>
  );
};

export default ViewTask;
