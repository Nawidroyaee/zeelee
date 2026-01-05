import { IconBrandWhatsapp, IconPhoneCall } from "@tabler/icons-react";
import {Props} from "@/types/types";

export default function MainCard({
  image,
  title,
  price,
  currency,
  description,
  whatsapp,
  phone,
}: Props) {
  return (
    <div className="max-w-sm p-3 bg-white rounded-2xl shadow-xs border border-gray-200">
      <div className="flex justify-center overflow-hidden rounded-lg">
        <img
          src={`${image}`}
          alt="Item image"
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="text-center p-3">
        <div className="flex justify-center gap-1 text-yellow-400 text-lg">
          ★ ★ ★ ★ ★
        </div>

        <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <hr className="mx-6 mt-6 mb-2 border-gray-200" />

        <div className="flex flex-row items-center justify-center gap-5 mb-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="font-bold text-green-600">Prix Menu</p>
            <p className="font-bold text-green-600">{`${currency} ${price.prixMenu}`}</p>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="font-bold text-gray-500">Prix Seul</p>
            <p className="font-bold text-gray-500">{`${currency} ${price.prixSeul}`}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex items-center gap-2">
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
