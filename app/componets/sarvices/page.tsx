import { IconCloudDemo } from "./IconCloud/IconCloud";

export default function Services() {
  return (
    <>
      <section className="py-8 text-white sm:py-14 lg:-py-12 lg:px-8 bg-gray-300/40 p-2 pt-1 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              My
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5" />
                <span className="relative text-purple-700"> Skills </span>
              </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center h-screen">
          <span className="md:mb-0 font-bold text-black lg:w-[650px] lg:text-2xl md:w-[550px] md:text-xl sm:w-[700px]">
            I am a Full Stack Developer and AI Engineer specializing in<span className="text-purple-700"> TypeScript, JavaScript, React, </span>and <span className="text-purple-700">Flutter</span> for web and mobile apps. I build scalable backends with <span className="text-purple-700">Node.js, Express,</span> and <span className="text-purple-700">Next.js,</span> using <span className="text-purple-700">PostgreSQL, Firebase,</span> and <span className="text-purple-700">Prisma</span>. I deploy on <span className="text-purple-700">AWS, Vercel, Netlify,</span> and <span className="text-purple-700">NGINX,</span> and ensure quality with <span className="text-purple-700">Jest, Cypress,</span> and <span className="text-purple-700">SonarQube</span>. I handle <span className="text-purple-700">DevOps</span> using <span className="text-purple-700">Docker, Git,</span> and <span className="text-purple-700">Jira,</span> and design with <span className="text-purple-700">Figma</span> and <span className="text-purple-700">Tailwind CSS</span>. I am also skilled in <span className="text-purple-700">Python</span> for <span className="text-purple-700">AI</span> and <span className="text-purple-700">PHP</span> for dynamic websites.
          </span>
          <IconCloudDemo />
        </div>
      </section>
    </>
  );
}