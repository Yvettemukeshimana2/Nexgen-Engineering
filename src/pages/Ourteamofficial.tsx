
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS for icons
 import t1 from "../assets/Pictures/WhatsApp Image 2024-10-23 at 10.31.32.jpeg";
 import t3 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
 import t2 from "../assets/Pictures/WhatsApp Image 2024-10-23 at 10.31.35.jpeg";
// Sample team members data
const teamMembers = [
 
   {
     name: "Solange GANZA UMULINGAWASE",
     title: "Busineess Mentor’s",
     image: t3,
     email: "#",
     linkedin: "#",
     phone: "#",
   },
   {
     name: "Elysée NSHIMIYIMANA",
     title: "CEO& Chief Operations Officer",
     image: t1,
     email: "#",
     linkedin: "#",
     phone: "#",
   },
   {
     name: "David IRAKIZA NDAYISABA",
     title: "Chief Technology/ Engineer Officer",
     image: t2,
     email: "#",
     linkedin: "#",
     phone: "#",
   },

  // Add more members as needed
];

const TeamPage = () => {
  return (
    <section className="temoignage " id="temoignage">
      <div className="title text-center" id="white_title">
        <h2 className="text-customTeal-950 text-3xl font-bold p-4">
          Nexgen TEAM
        </h2>
        <p className="font-semibold text-2xl">Meet Our Team</p>
      </div>

      <div className="  " id="team">
        <div className="justify-center grid grid-cols-3 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full md:w-1/5 p-4">
              <div className="our-team bg-white shadow-lg rounded-lg">
                <div className="picture">
                  <img
                    className="img-fluid w-44 h-40 object-cover rounded-t-lg"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="team-content p-4 bg-customTeal-950 text-center">
                  <h3 className="name text-white">{member.name}</h3>
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
