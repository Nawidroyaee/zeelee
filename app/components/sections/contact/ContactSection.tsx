"use client";

export default function ContactSection() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-xl lg:text-3xl font-bold text-center mb-2">
        Contact Us
      </h2>
      <p className="text-center text-gray-500 mb-8 text-xs lg:text-sm">
        Have a question or want to work with us? Fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-5 border border-gray-100"
      >
        {/* Hidden honeypot */}
        <input type="text" name="company" className="hidden" />

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1  text-gray-500">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1  text-gray-500">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1  text-gray-500">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={1000}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-green-500 text-white py-3 font-medium hover:bg-green-600 transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          {"Send Message"}
        </button>
      </form>
    </section>
  );
}
