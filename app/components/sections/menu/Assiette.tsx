import { IconBrandWhatsapp, IconPhoneCall } from "@tabler/icons-react";

export default function Assiette() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl lg:text-5xl font-bold text-start mx-10 font-heading text-gray-900 mb-5 lg:mb-10">
        Assiette:
      </h1>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-3 flex-wrap px-5 lg:px-10">
        {/*cards*/}
        <div className="group w-full relative bg-white rounded-xl shadow-md p-2 flex items-center gap-3 overflow-hidden">
          <img
            src="/sandwich-froid.png"
            alt="Item image"
            className="w-40 h-36 rounded-lg object-cover shrink-0"
          />

          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col">
              <h3 className="text-lg font-heading font-bold text-gray-900">
                Chicken Burger Deluxe
              </h3>

              <div className="flex items-center gap-1 text-yellow-400 text-md">
                ★ ★ ★ ★ ★
              </div>
            </div>

            <p className="text-xs text-gray-600 line-clamp-2">
              Juicy grilled chicken breast with fresh lettuce, tomato and our
              special house sauce.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-green-500 font-semibold text-base">
                Prix Menu €8.00
              </span>
              <span className="text-gray-500 text-sm">Menu €10.50</span>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-transparent p-2"
          >
            <div className="flex gap-2 w-full">
              <a
                href="#"
                className="w-full py-2 px-2 bg-green-500 hover:bg-green-600 border-2 border-green-500 hover:border-green-600 text-white font-bold text-sm/0 rounded-lg hover:cursor-pointer transition-all duration-100"
              >
                <div className="flex flex-row gap-1 items-center justify-center">
                  <IconBrandWhatsapp size={20} />
                  Order on Whatsapp{" "}
                </div>
              </a>

              <a
                href="#"
                className="py-2 px-2  bg-white text-gray-500 rounded-lg border border-gray-300 hover:cursor-pointer hover:bg-gray-100 transition duration-300 font-bold text-sm/0"
              >
                <div className="flex flex-row gap-1 items-center justify-center">
                  <IconPhoneCall size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
