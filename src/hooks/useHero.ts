import { useState, useEffect } from "react";

export default function useHero() {
  const imageUrls = [
    "/images/Jollibee.jpeg",
    "/images/OUA.jpeg",
    "/images/Garfield.jpg",
    "/images/handwriting.png",
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const totalImages = 4;

  useEffect(() => {
    let loadCount = 0;

    const checkAllImagesLoaded = () => {
      loadCount++;
      if (loadCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = checkAllImagesLoaded;
      img.onerror = checkAllImagesLoaded;
      img.src = url;
    });
  }, []);

  const handleSocialsClick = (social: string) => {
    switch (social) {
      case "GitHub":
        window.open("https://github.com/GarfieldFluffJr", "_blank");
        break;
      case "LinkedIn":
        window.open("https://www.linkedin.com/in/louieyin/", "_blank");
        break;
      case "Email":
        const email = "louieyin6@gmail.com";
        const subject = "I would like to connect";
        const body = "Hi Louie, I would like to get in touch...";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, "_blank");
        break;
      default:
        window.open("");
        console.error("Social was not found");
    }
  };

  return { imagesLoaded, handleSocialsClick };
}
