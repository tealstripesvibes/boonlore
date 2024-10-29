export function MoreLinks() {
  const handle = import.meta.env.VITE_SOCIAL_HANDLE_1;
  return (
    <>
      <ul>
        <li>
          <a href={`https://tiktok.com/@${handle}`}>TikTok</a>
        </li>
        <li>
          <a href={`https://youtube.com/@${handle}`}>YouTube</a>
        </li>
        <li>
          <a href={`https://instagram.com/${handle}`}>Instagram</a>
        </li>
      </ul>
    </>
  );
}
