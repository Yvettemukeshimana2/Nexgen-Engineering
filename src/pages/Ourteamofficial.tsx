
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS for icons
 import t1 from "../assets/Pictures/WhatsApp Image 2024-10-23 at 10.31.32.jpeg";
//  import t3 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
 import t2 from "../assets/Pictures/WhatsApp Image 2024-10-23 at 10.31.35.jpeg";// Sample team members data
 import yv from "../assets/Pictures/IMG-20240919-WA0042 copy (1).jpg"
const teamMembers = [
  {
    name: "Elysée NSHIMIYIMANA",
    title: "CEO& Chief Operations Officer",
    image: t1,
    email: "#",
    linkedin: "#",
    phone: "#",
  },
  {
    name: "David IRAKIZA  NDAYISABA",
    title: "Chief Technology/ Engineer Officer",
    image: t2,
    email: "#",
    linkedin: "#",
    phone: "#",
  },

  {
    name: "HIRWA HONORE",
    title: "HSE & Procurement Officer",
    image: "",
    email: "#",
    linkedin: "#",
    phone: "#",
  },
  {
    name: "YVETTE MUKESHIMANA",
    title: "System And Marketing Officer",
    image: yv,
    email: "mukeshimanayvette2@gmail.com ",
    linkedin: "#",
    phone: "+250789017110",
  },
];

const TeamPage = () => {
  return (
    <section className="temoignage" id="temoignage">
      <div className="title text-center" id="white_title">
        <h2 className="text-customTeal-950 text-3xl font-bold p-4">
          Nexgen TEAM
        </h2>
        <p className="font-semibold text-2xl">Meet Our Team</p>
      </div>

      <div className="container-fluid"  >
        <div className="grid grid-cols-3 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full md:w-52 p-4">
              <div className=" bg-white shadow-lg rounded-lg">
                <div className="picture">
                  <img
                    className="h-44 w-44 object-cover mt-12"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="team-content p-4 bg-customTeal-950 w-full ">
                  <h3 className="name text-white w-full">{member.name}</h3>
                  <h4 className="title text-gray-300">{member.title}</h4>
                </div>
                <ul className="social flex justify-center space-x-4 mb-4">
                  <li>
                    <a
                      href={member.email}
                      className="fa fa-envelope-o text-customTeal-950"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href={member.linkedin}
                      className="fa fa-linkedin text-customTeal-950"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href={member.phone}
                      className="fa fa-phone text-customTeal-950"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
