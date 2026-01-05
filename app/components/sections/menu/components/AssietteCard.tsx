import { IconBrandWhatsapp, IconPhoneCall } from "@tabler/icons-react";
import {Props} from "@/types/types";

export default function AssietteCard({
  image,
  title,
  price,
  currency,
  description,
  whatsapp,
  phone,
}: Props) {
  return (
    <div className="group w-full relative bg-white rounded-xl shadow-md p-2 flex items-start gap-3 overflow-hidden">
      <img
        src={image}
        alt="Item image"
        className="w-24 md:w-28 lg:w-32 xl:w-40 h-24 md:h-28 lg:h-32 xl:h-40 rounded-lg object-cover shrink-0"
      />

      <div className="flex-1 flex flex-col gap-1 lg:gap-2">
        <div className="flex flex-col">
          <h3 className="text-sm lg:text-lg font-heading font-bold text-gray-900">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-yellow-400 text-xs lg:text-sm">
            ★ ★ ★ ★ ★
          </div>
        </div>

        <p className="text-xs text-gray-400 line-clamp-2">{description}</p>

        <div className="flex items-center gap-2 lg:gap-5">
          <p className=" text-green-500 font-semibold lg:text-base text-xs">
            {`${title === "Riz Afghan" ? "Grand" : "Prix Menu"}`} {`${currency} ${price.primary}`}
          </p>
          <p className="text-gray-500 text-xs lg:text-base font-semibold">
            {`${title === "Riz Afghan" ? "Petit" : "Prix Seul"}`} {`${currency} ${price.secondary}`}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-transparent p-2">
        <div className="flex gap-2 w-full">
          <a
            href={whatsapp}
            className="w-full py-2 px-2 bg-green-500 hover:bg-green-600 border-2 border-green-500 hover:border-green-600 text-white font-bold text-sm/0 rounded-lg hover:cursor-pointer transition-all duration-100"
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              <IconBrandWhatsapp size={20} />
              Order on Whatsapp{" "}
            </div>
          </a>

          <a
            href={phone}
            className="py-2 px-2  bg-white text-gray-500 rounded-lg border border-gray-300 hover:cursor-pointer hover:bg-gray-100 transition duration-300 font-bold text-sm/0"
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              <IconPhoneCall size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
