import { Carousel } from "@material-tailwind/react";

export function GalleryWithCarousel(images) {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      {Object.values(images).map(({ source, title }, key) => (
        <img
          key={key}
          src={source}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
}

export default GalleryWithCarousel;
