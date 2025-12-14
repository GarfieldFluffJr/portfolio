import { useState, useEffect, useRef, type CSSProperties } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For critical images (hero section)
  style?: CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  style,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const imageStyle: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
    ...style,
  };

  const placeholderStyle: CSSProperties = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "auto",
    backgroundColor: "#f0f0f0",
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    ...style,
  };

  // If not in view yet, render placeholder to prevent layout collapse
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={className}
        style={placeholderStyle}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onLoad={() => setIsLoaded(true)}
      style={imageStyle}
      loading={priority ? "eager" : "lazy"} // Native lazy loading as fallback
    />
  );
}
