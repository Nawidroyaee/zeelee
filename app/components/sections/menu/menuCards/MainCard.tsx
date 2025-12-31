import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";

export default function MainCard() {
  return (
    <div className="max-w-sm p-3 bg-white rounded-2xl shadow-xs border border-gray-200">
      <div className="flex justify-center overflow-hidden rounded-lg">
        <img
          src="/burger.png"
          alt="Item image"
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="text-center p-3">
        <div className="flex justify-center gap-1 text-yellow-400 text-lg">
          ★ ★ ★ ★ ★
        </div>

        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
          Classic Chicken Burger
        </h3>

        <hr className="mx-6 mt-6 mb-2 border-gray-200" />

        <div className="flex flex-row items-center justify-center gap-5 mb-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="font-bold text-green-600">Prix Menu</p>
            <p className="font-bold text-green-600">€ 9.50</p>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="font-bold text-gray-500">Prix Seul</p>
            <p className="font-bold text-gray-500">€ 7.50</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Juicy grilled chicken breast served with fresh lettuce, tomato, and
          our signature house sauce.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href="#"
            className="w-full py-2 bg-green-500 hover:bg-green-600 border-2 border-green-500 hover:border-green-600 text-white font-bold text-sm/0 rounded-full hover:cursor-pointer transition-all duration-100"
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              <IconBrandWhatsapp size={20} />
              Order on Whatsapp{" "}
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2  bg-white text-green-500 rounded-full border-2 border-green-500 hover:cursor-pointer hover:bg-green-50 transition duration-300 font-bold text-sm/0"
          >
            <div className="flex flex-row gap-1 items-center justify-center">
              <IconPhone size={20} />
              Call us{" "}
            </div>
          </a>
        </div>

        {/*<div className="flex justify-center gap-6">*/}
        {/*  <div>*/}
        {/*    <p className="text-xs text-gray-500">Without extra</p>*/}
        {/*    <p className="text-lg font-bold text-gray-900">$6.50</p>*/}
        {/*  </div>*/}

        {/*  <div>*/}
        {/*    <p className="text-xs text-gray-500">With fries</p>*/}
        {/*    <p className="text-lg font-bold text-primary-600">$8.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
