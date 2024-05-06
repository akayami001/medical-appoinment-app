import Image from "next/image";

const data = [
  {
    url: "/live_support.jpg",
    altText: "live support",
    text: "7/24 Live Support",
  },
  {
    url: "/health_consulting.jpg",
    altText: "live support",
    text: "Health Counsulting",
  },
  {
    url: "/accommodations.jpg",
    altText: "accommodations",
    text: "Accommodations",
  },
  {
    url: "/vip_transport.jpg",
    altText: "vip transfer",
    text: "VIP Transfer",
  },
  {
    url: "/after_operation.jpg",
    altText: "doctor consulting",
    text: "Following After Operation",
  },
];

const OurServices = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our <span className=" text-primary">Services</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col text-center mx-auto">
              <Image
                className=" transition ease-in-out delay-150 border rounded-full aspect-square object-cover hover:-translate-y-1  hover:border-4 hover:border-primary hover:scale-110 duration-300"
                src={item.url}
                width={180}
                height={180}
                alt={item.altText}
              />
              <h2 className=" text-primary text-lg pt-4">{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
