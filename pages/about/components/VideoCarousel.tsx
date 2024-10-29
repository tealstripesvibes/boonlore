import "../_about.scss";
import "react-multi-carousel/lib/styles.css";
import { lazy, Suspense } from "react";

const Videos = lazy(() =>
  import("@widgets/video/VideoCarousel").then((module) => ({
    default: module.VideoCarousel,
  })),
);

export function VideoCarousel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Videos
        videos={[
            () => <div>[carousel is missing videos]</div>
        ]}
      />
    </Suspense>
  );
}
