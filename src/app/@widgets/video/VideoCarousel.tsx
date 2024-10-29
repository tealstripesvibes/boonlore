import Carousel from "react-multi-carousel";
import { responsive } from "@widgets/carousel/carousel";

export function VideoCarousel({ videos }: { videos: any[] }) {
  return (
    <figure style={{ width: "400px", overflow: "hidden" }}>
      <Carousel responsive={responsive}>
        {videos.map((Video, i) => (
          <div key={i}>
            <Video key={i} />
          </div>
        ))}
      </Carousel>
    </figure>
  );
}
