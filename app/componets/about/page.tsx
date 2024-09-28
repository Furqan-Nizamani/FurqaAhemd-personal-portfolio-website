import Image from "next/image";
export default function About() {
  return (
    <section className="py-10 text-white sm:py-16 lg:py-32  bg-gray-300/100">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            building professional websites that can
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5" />
              <span className="relative text-purple-700"> solve business owner’s pain </span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
            <Image
              alt="my Image"
              src={require('../../../public/myi.jpg')}
              width={1200}
              height={1200}
              className="w-full mx-auto sm:max-w-xs"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Hey! I am Furqan Ahmed, C-Founder of The Constructors Development Group.
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              The Constructors Development Group is a leading innovator in web application and Generative AI development.
              Our team excels at creating robust, scalable web solutions using cutting-edge technologies.
              We harness the power of JAMstack and modern frameworks to build dynamic, high-performance applications tailored to meet your business needs.
              Whether its a seamless e-commerce platform or a sophisticated content management system,
              our expertise ensures exceptional user experiences and reliable performance.
            </p>
            <p className="mt-4 text-lg text-gray-700">
            In addition to web development, we excel in Generative AI, 
            creating innovative solutions like smart chatbots and advanced analytics. 
            At The Constructors Development Group, 
            we leverage AI to drive progress and equip our clients with the tools needed to excel in the digital world.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-gray-900">
              How to I find a best product for my business ?
            </h3>
            <p className="mt-4 text-lg text-gray-700">
            To find the best product for your business, 
            first identify your needs and goals. Research options by comparing features and reading reviews. 
            Ensure the product integrates well with your systems and scales with growth. Assess costs and ROI, 
            seek recommendations, and test the product if possible.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}