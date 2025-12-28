import Image from "next/image";
export default function HeroSection() {
    return (
        <section
            id="home"
            className="h-dvh container m-auto px-10 lg:px-20  flex flex-col-reverse lg:flex-row items-center lg:pt-0 justify-end lg:justify-center lg:gap-20"
        >
            <div className="w-full lg:w-[40%] flex flex-col gap-5 lg:items-start items-center justify-center">
                <h1 className="text-center lg:text-start text-3xl lg:text-4xl font-bold text-gray-600">Taste the Moment at <span className="text-green-500 font-heading text-6xl lg:text-8xl">Zeelee</span></h1>
                <p className="text-center lg:text-start text-gray-600">From carefully selected ingredients to perfectly balanced flavours, <span className="font-heading  font-bold">Zeelee</span> is made for those who truly love food.</p>
                <a className="px-5 py-2 bg-white text-green-500 rounded-full border-2 border-green-500 hover:bg-green-50 transition duration-300 font-bold" href="#menu">Check out our menu</a>
            </div>
            <div className="w-full lg:w-[60%] flex items-center justify-center">
                <Image
                    src="/heroo.png"
                    alt="Kebab"
                    width={800}
                    height={800}
                    priority
                />
            </div>
        </section>
    )
}