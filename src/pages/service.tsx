    import React from "react";
    //  import im1 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
    //  import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
    import im3 from "../assets/Pictures/Building-Information-Modeling.jpg";
    import { Link } from "react-router-dom";
    import WhatsAppChatButton from "../Component/Whatsapchart";

    const services = [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
        title: "Industrial machinery installations",
        description: "",
        link: "/services/2",
      },
      {
        img: im3,
        title: "MEP systems design and installations",
        description: "",
        link: "/services/3",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s",
        title: "Engineering consultancy &Logistics",
        description: "",
        link: "/services/4",
      },
    ];

    const OurServices: React.FC = () => {
      return (
        <div>
          <div className="flex flex-col items-center mt-10 z-20">
            <h1 className="text-3xl font-bold text-customTeal-950 mb-6">
              Our Services
            </h1>
            <WhatsAppChatButton />
            <div className="grid md:grid-cols-3 grid-cols-2 pb-8 gap-2  justify-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" w-full rounded-lg shadow-lg p-9 text-black flex flex-col items-center"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded mb-3 object-cover"
                  />
                  <h2 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h2>
                  <p className="text-center mb-3">{service.description}</p>
                  <Link to={service.link}>
                    <button className="mt-2  text-customTeal-950 border-2 border-customTeal-950 hover:text-white hover:bg-customTeal-950 py-2 px-4 rounded">
                      See More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center ">
              <Link
                to="/venue"
                className="px-6 py-3 bg-customTeal-950 text-white rounded-lg"
              >
                View More Service
              </Link>
            </div>
          </div>
        </div>
      );
    };

    export default OurServices;

