import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center h-full min-h-[calc(100vh-12rem)]">
        <div className="py-12">
          <h1 className="text-4xl text-center uppercase tracking-[0.5em] -mr-[0.5em] font-bold">
            Pedro Lima
          </h1>

          <div
            className="flex items-center justify-center gap-4"
          >
            <div className="w-full h-1 bg-gray-800"></div>
            <h2 className="text-lg text-center uppercase min-w-fit font-bold">Full Stack Developer</h2>
            <div className="w-full h-1 bg-gray-800"></div>
          </div>
        </div>

        <div>
          <p className="text-center max-w-2xl uppercase tracking-widest font-light">
            Coming soon...
          </p>
        </div>

        {/* Contact */}
      </main>
      <footer className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <h2>Talk to me</h2>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/+5511910100040" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/pedro-l-1158421a1" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl transition-colors" />
            </a>
            <a href="mailto:pedrohblima03@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-2xl transition-colors" />
            </a>
            <a href="https://github.com/pedrohbl03" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl transition-colors" />
            </a>
          </div>
        </div>
        <p className="text-sm">© 2025 Pedro Lima. All rights reserved.</p>
      </footer>
    </div>
  );
}
