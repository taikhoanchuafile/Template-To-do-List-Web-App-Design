import CardTodo from "./CardTodo";

const MyTaskContent = () => {
  return (
    <div className="md:ml-80 lg:ml-90 px-10 2xl:px-19 max-w-[1075px] flex flex-col 2xl:flex-row gap-4">
      {/* phan 1 */}
      <div className="px-7 py-5 rounded-base shadow-border border border-n-4 2xl:max-w-[423px] max-h-[837px]">
        <h2 className="sub-text font-semibold underline underline-offset-4 decoration-primary decoration-2">
          My Task
        </h2>
        <div className="mt-4 flex justify-center flex-col lg:flex-row 2xl:flex-col gap-2">
          {/* bg-n-5 */}
          <CardTodo />
          <CardTodo />
        </div>
      </div>
      {/* phan 2 */}
      <div className="relative px-5 py-4 rounded-base shadow-border border border-n-4 2xl:max-w-[511px] max-h-[837px]">
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
          <b>Task Title:</b> Document Submission. <br />
          <b>Objective: </b>To submit required documents for something important
          <br />
          <b>Task Description: </b>Review the list of documents required for
          submission and ensure all necessary documents are ready. Organize the
          documents accordingly and scan them if physical copies need to be
          submitted digitally. Rename the scanned files appropriately for easy
          identification and verify the accepted file formats. Upload the
          documents securely to the designated platform, double-check for
          accuracy, and obtain confirmation of successful submission. Follow up
          if necessary to ensure proper processing.
          <br />
          <b>Additional Notes: </b>Ensure that the documents are authentic and
          up-to-date. Maintain confidentiality and security of sensitive
          information during the submission process. If there are specific
          guidelines or deadlines for submission, adhere to them diligently.
          <br />
          <b>Deadline for Submission: </b>End of Day
        </div>
        <div className="flex gap-3 justify-end absolute bottom-4 right-5">
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

export default MyTaskContent;
