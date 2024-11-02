import "../Style/Contact.css";

const logos = [
  {
    link: "https://www.linkedin.com/in/-aditya-shedge",
    text: "Linkedin",
    icon: "fa-brands fa-linkedin",
  },
  // { link: "", text: "Gmail", icon: "fa-solid fa-envelope" },
  {
    link: "https://www.instagram.com/_aditya_shedge?igsh=dzgzNTZheG5mZDg5",
    text: "Instagram",
    icon: "fa-brands fa-instagram",
  },
];

function Contact() {
  return (
    <div className="parent-contact">
      <h1>
        <span>Contact</span> Me
      </h1>
      <div className="contact-logo">
        <a
          className="Gmail"
          href="mailto:adityashedge5620@gmail.com"
          target="_blank"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        {logos.map(({ link, text, icon }, i) => (
          <a className={text} href={link} target="_blank">
            <i class={icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
