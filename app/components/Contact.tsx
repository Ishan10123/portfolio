export default function Contact() {
  const contactDetails = [
    {
      icon: "📧",
      title: "Personal Email",
      value: "ishurbt1@gmail.com",
      href: "mailto:ishurbt1@gmail.com",
    },
    {
      icon: "💼",
      title: "Work Email",
      value: "ishan.k@vtechsolutions.com",
      href: "mailto:ishan.k@vtechsolutions.com",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 7413966256",
      href: "tel:+917413966256",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kota, Rajasthan, India",
      href: "https://maps.google.com/?q=Kota,Rajasthan",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/Ishan10123",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ishankaushik/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/thenameisishan__",
    },

  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[0.25em] text-sm text-purple-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            I'm always interested in discussing AI Engineering,
            Generative AI, AI Agents, automation, backend development,
            and exciting opportunities. Whether you're hiring,
            collaborating, or just want to connect, I'd love to hear from you.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for Full-Time Opportunities
          </div>

          <div className="mt-10 space-y-4">

            {contactDetails.map((item) => (

              <a
                key={item.title}
                href={item.href}
                target={item.title === "Location" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-white/5 p-4 hover:border-purple-500 transition"
              >

                <div className="text-2xl">
                  {item.icon}
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {item.title}
                  </p>

                  <p className="text-gray-200">
                    {item.value}
                  </p>

                </div>

              </a>

            ))}

          </div>

          {/* SOCIAL */}

          <div className="mt-10 flex flex-wrap gap-4">

            {socials.map((social) => (

              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-700 px-5 py-2 text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                {social.name}
              </a>

            ))}

          </div>

          {/* WhatsApp */}

          <a
            href="https://wa.me/917413966256?text=Hi%20Ishan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-xl bg-green-500 px-6 py-3 font-medium text-black hover:bg-green-400 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT */}

        <div className="rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-xl p-8">

          <h3 className="text-2xl font-semibold text-white">
            Send a Message
          </h3>

          <p className="mt-2 text-gray-400 text-sm">
            I'll usually get back to you within 24 hours.
          </p>

          <form
            action="https://formsubmit.co/ishurbt1@gmail.com"
            method="POST"
            className="mt-8 space-y-5"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or opportunity..."
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-4 font-semibold text-white hover:scale-[1.02] transition"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}