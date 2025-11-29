const SideNav = () => {
  const sides = [
    {
      href: "/vitaltask",
      src: "/iconVital.svg",
      alt: "icon Vital Task",
      label: "Vital Task",
    },
    {
      href: "/mytask",
      src: "/iconMyTask.svg",
      alt: "icon My Task",
      label: "My Task",
    },
    {
      href: "taskcategory",
      src: "/iconTaskCategories.svg",
      alt: "icon Task Categories",
      label: "Task Categories",
    },
    {
      href: "#",
      src: "/iconSetting.svg",
      alt: "icon Setting",
      label: "Setting",
    },
    {
      href: "#",
      src: "/iconHelp.svg",
      alt: "icon Help",
      label: "Help",
    },
  ];
  return (
    <div className="absolute z-10 inset-0 max-w-[250px] lg:max-w-[330px] p-5 bg-primary text-n-1 -translate-x-full opacity-0 md:translate-x-0 md:opacity-100 peer-focus:translate-x-0 peer-focus:opacity-100 transition-all duration-500">
      {/* avatar */}
      <a href="/accountinformation">
        <div className="w-fit absolute left-1/2 -translate-x-1/2 top-7 -translate-y-1/2 flex flex-col gap-3 items-center logo ">
          <img className="size-21" src="/avatar.svg" alt="avatar" />
          <div className="space-y-1 text-center">
            <h2 className="text-base">Sundar Gurung</h2>
            <p className="text-xs">sundargurung360@gmail.com</p>
          </div>
        </div>
      </a>

      <nav className="mt-27 w-full flex flex-col justify-between">
        <ul className="space-y-2">
          <li className="bg-n-1 text-primary">
            <a className="flex gap-4 items-center" href="/">
              <img
                className="size-6"
                src="/iconDashboard.svg"
                alt="icon dashboard"
              />
              Dashboard
            </a>
          </li>
          {sides.map((side, index) => {
            return (
              <li key={index}>
                <a className="flex gap-4 items-center" href={side.href}>
                  <img className="size-6" src={side.src} alt={side.alt} />
                  {side.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="absolute p-4 bottom-8 left-5" type="button">
        <div className="flex gap-4 items-center">
          <img src="/iconLogout.svg" alt="icon logout" />
          Logout
        </div>
      </button>
    </div>
  );
};

export default SideNav;
