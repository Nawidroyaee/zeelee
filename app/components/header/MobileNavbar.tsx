interface Props {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

export default function MobileNavbar({ openDrawer, setOpenDrawer }: Props) {
  return (
    <>
      <div
        className={`py-5 absolute ${openDrawer ? "right-0" : "-right-72"} top-0 md:hidden bg-white h-dvh w-72 z-50 transition-all duration-300 flex flex-col justify-between items-center`}
      >
        <h3 className="text-center font-bold text-3xl text-green-800 font-heading">
          Zeelee
        </h3>

        <div className="flex flex-col gap-4 items-center">
          <a onClick={() => setOpenDrawer(!openDrawer)} href={"#home"}>
            Home
          </a>
          <a onClick={() => setOpenDrawer(!openDrawer)} href={"#menu"}>
            Menu
          </a>
          <a onClick={() => setOpenDrawer(!openDrawer)} href={"#contact"}>
            Contact
          </a>
        </div>

        <p className="text-center text-xs">Zeelee | All rights reserved</p>
      </div>

      <div
        onClick={() => setOpenDrawer(false)}
        className={`
        absolute top-0 right-0 z-40 w-full h-dvh bg-black
        transition-opacity duration-300 ease-in-out
        ${openDrawer ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      ></div>
    </>
  );
}
