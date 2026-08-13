import { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  sizes = "100vw",
  loading = "lazy",
  decoding = "async",
  ...props
}: ResponsiveImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      className={`max-w-full h-auto ${className}`.trim()}
      {...props}
    />
  );
};

export default ResponsiveImage;
