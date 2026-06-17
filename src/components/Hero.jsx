import portfolioImg from "../assets/images/portfolioImg.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen max-w-5xl mx-auto px-6 flex items-center scroll-mt-24"
    >
      <div className="w-full grid md:grid-cols-5 gap-16 items-center">

        {/* Left — 3 cols */}
        <div className="md:col-span-3">

          {/* Status pill — the one signature detail */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 border border-zinc-200 rounded-full px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for internships
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-none mb-4">
            Ridam<br />Rabi Das
          </h1>

          <p className="text-lg text-zinc-500 font-medium mb-6">
            BCA Student · AI Applications · Web Development
          </p>

          <p className="text-base text-zinc-600 leading-relaxed mb-10 max-w-lg">
            I build AI-powered tools and web applications focused on real utility.
            Currently exploring LLM integration, Chrome extension development,
            and accessible product design.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[#250902] text-white text-sm font-medium rounded-lg hover:bg-[#640d14] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg hover:border-zinc-900 hover:text-white hover:bg-[#ad2831] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg hover:border-zinc-900 hover:text-white hover:bg-[#ad2831] transition-colors"
            >
              Resume ↗
            </a>
          </div>

          <div className="flex gap-5 text-zinc-400">
            <a
              href="https://github.com/ladridam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ridam-rabi-das-a21315317/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

        </div>

        {/* Right — 2 cols */}
        <div className="md:col-span-2 flex flex-col items-center gap-5">

          <img
            src={portfolioImg}
            alt="Ridam Rabi Das"
            className="w-56 h-56 object-cover rounded-2xl border border-zinc-200 shadow-sm"
          />

          <div className="w-full grid grid-cols-2 gap-3">
            <div className="border border-zinc-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-zinc-900">8.32</p>
              <p className="text-xs text-zinc-500 mt-0.5">CGPA</p>
            </div>
            <div className="border border-zinc-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-zinc-900">2</p>
              <p className="text-xs text-zinc-500 mt-0.5">Live Projects</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;