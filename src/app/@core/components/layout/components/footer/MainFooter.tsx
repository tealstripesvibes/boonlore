import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaPatreon,
  FaThreads,
} from "react-icons/fa6";
import "./_footer.scss";

const handle = import.meta.env.VITE_SOCIAL_HANDLE_1;
const socialLinks = [
  { href: `https://tiktok.com/@${handle}`, label: "TikTok", Icon: FaTiktok },
  { href: `https://patreon.com/${handle}`, label: "Patreon", Icon: FaPatreon },
  {
    href: `https://instagram.com/${handle}`,
    label: "Instagram",
    Icon: FaInstagram,
  },
  { href: `https://github.com/${handle}`, label: "GitHub", Icon: FaGithub },
  { href: `https://threads.net/${handle}`, label: "Twitter", Icon: FaThreads },
];

export function MainFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="social-links">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label}>
                <Icon className="social-icon" />
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-text">
          <span>
            © {new Date().getFullYear()} {handle}. Building software and making
            art.
          </span>
        </div>
      </div>
    </footer>
  );
}
