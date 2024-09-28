'use client'
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
export default function Hero() {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                <span className="text-purple-700">
                <Typewriter
                  options={{
                    strings: ['Furqan Ahmed', 'A Dynamic Generative AI Engineer', 'the Professional JAMStack Developer', 'the Co-Founder of The Constructors Development Group', 'Ranked in LeaderBoard (Vercel) of PeerSpot'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                </span>
              </h2>
              <p className="max-w-lg mt-3 text-md leading-relaxed text-gray-600 md:mt-8">
                A Dynamic Generative AI Engineer and JAMstack Developer, combining my expertise in modern web technologies and AI to create innovative, high-performance solutions.
                As the Co-founder of The Constructors Development Group, I lead a team focused on developing cutting-edge web solutions tailored to diverse business needs.
              </p>
              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <Link
                  href="https://www.linkedin.com/in/furqanahmed-n/"
                  target="blank"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />
              <Image
                src={require('../../../public/my-img-for-portfoili.png')}
                alt="my Imag"
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                width={1080}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}