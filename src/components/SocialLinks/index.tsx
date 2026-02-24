import IconInstagram from "../../assets/images/icons/instagram.svg";
import IconWhatsapp from "../../assets/images/icons/whatsapp.svg";
import IconTiktok from "../../assets/images/icons/tiktok.svg";
import IconFacebook from "../../assets/images/icons/facebook.svg";

export const SocialLinks = () => {
  const socialLinks = [
    { href: "#", icon: IconInstagram, name: "Instagram" },
    { href: "#", icon: IconWhatsapp, name: "WhatsApp" },
    { href: "#", icon: IconTiktok, name: "TikTok" },
    { href: "#", icon: IconFacebook, name: "Facebook" },
  ];

  return (
    <div>
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

      <ul className="flex gap-5">
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
