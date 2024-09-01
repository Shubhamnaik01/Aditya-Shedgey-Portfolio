import "../Style/Contact.css";

const logos = [
  { link: "", text: "Linkedin", icon: "fa-brands fa-linkedin" },
  { link: "", text: "Gmail", icon: "fa-solid fa-envelope" },
  { link: "", text: "Instagram", icon: "fa-brands fa-instagram" },
];

function Contact() {
  return (
    <div className="parent-contact">
      <h1>
        <span>Contact</span> Me
      </h1>
      <div className="contact-logo">
        {logos.map(({ link, text, icon }, i) => (
          <a className={text} href={link}>
            <i class={icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
