export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-purple-400 uppercase tracking-widest">
            Contact
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Have a project, idea, or opportunity? Let’s connect and build something impactful.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-300">

            <p>📧 ishurbt1@gmail.com</p>
            <p>📧 ishanrbt13@gmail.com</p>
            <p>📧 ishan.k@vtechsolutions.com</p>

            <p>📞 +91 7413966256</p>
            <p>📍 Kota, Rajasthan, India</p>

          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">

            <a href="https://github.com/Ishan10123" target="_blank" className="hover:text-white text-gray-400">
              GitHub
            </a>

            <a href="https://linkedin.com/in/" target="_blank" className="hover:text-white text-gray-400">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/thenameisishan__" target="_blank" className="hover:text-white text-gray-400">
              Instagram
            </a>

            <a href="https://www.facebook.com/people/Ishan-Kaushik/" target="_blank" className="hover:text-white text-gray-400">
              Facebook
            </a>

          </div>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/917413966256?text=Hi Ishan, I visited your portfolio and would like to connect."
            target="_blank"
            className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-lg transition"
          >
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white/5 border border-gray-800 backdrop-blur-lg p-6 rounded-2xl">

          <form
            action="https://formsubmit.co/ishurbt1@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* hidden configs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />

            {/* NAME */}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-purple-500"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-purple-500"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-purple-500"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}