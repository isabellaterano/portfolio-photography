export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <div className="border-4 border-zinc-950 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
