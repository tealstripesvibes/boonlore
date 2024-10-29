import {
  FaGithub,
  FaInstagram,
  FaPatreon,
  FaThreads,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import React from "react";
import "./_social-media.scss";

function IconLink({
  link,
  text,
  Icon,
}: {
  text: string;
  link: string;
  Icon: React.ElementType;
}) {
  return (
    <a href={link} className="social-media-link">
      <Icon className="icon" />
      <span>{text}</span>
    </a>
  );
}

function IconListItem({
  text,
  href,
  Icon,
}: {
  text: string;
  href: string;
  Icon: React.ElementType;
}) {
  return (
    <li>
      <IconLink link={href} text={text} Icon={Icon} />
    </li>
  );
}

export function SocialMediaLinks() {
  const handle = import.meta.env.VITE_SOCIAL_HANDLE_1;
  return (
    <ul className="social-media-links">
      {(
        [
          ["TikTok", `https://tiktok.com/@${handle}`, FaTiktok],
          ["Patreon", `https://patreon.com/${handle}`, FaPatreon],
          ["Instagram", `https://instagram.com/${handle}`, FaInstagram],
          ["Threads", `https://threads.net/${handle}`, FaThreads],
          ["GitHub", `https://github.com/${handle}`, FaGithub],
          ["X", `https://x.com/${handle}`, FaXTwitter],
        ] as [string, string, React.ElementType][]
      ).map(([text, href, Icon]) => (
        <IconListItem key={text} text={text} href={href} Icon={Icon} />
      ))}
    </ul>
  );
}
