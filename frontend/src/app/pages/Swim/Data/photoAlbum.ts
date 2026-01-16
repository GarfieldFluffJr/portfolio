type PhotoAlbumCover = {
  title: string;
  photo: string;
  destination: string;
};

export const photoAlbumCovers: PhotoAlbumCover[] = [
  {
    title: "Curacao 2026",
    photo: "images/Swim/Curacao 2026/1.jpg",
    destination: "Curacao_2026",
  },
  {
    title: "UW First Year (2024-2025)",
    photo: "/images/Swim/UW First Year/1.JPG",
    destination: "UW_First_Year",
  },
  {
    title: "Fort Lauderdale 2025",
    photo: "images/Swim/Fort Lauderdale 2025/1.jpg",
    destination: "Fort_Lauderdale_2025",
  },
  {
    title: "Curacao 2024",
    photo: "images/Swim/Curacao 2024/1.png",
    destination: "Curacao_2024",
  },
];

type PhotoAlbum = {
  title: string;
  photos: string[];
};

export const UW_First_Year: PhotoAlbum = {
  title: "UW First Year (2024-2025)",
  photos: [
    "/images/Swim/UW First Year/1.JPG",
    "/images/Swim/UW First Year/2.jpg",
    "/images/Swim/UW First Year/3.png",
    "/images/Swim/UW First Year/4.jpg",
    "/images/Swim/UW First Year/5.JPEG",
    "/images/Swim/UW First Year/6.JPG",
    "/images/Swim/UW First Year/7.png",
    "/images/Swim/UW First Year/8.JPEG",
    "/images/Swim/UW First Year/9.jpg",
    "/images/Swim/UW First Year/10.jpg",
    "/images/Swim/UW First Year/11.JPEG",
  ],
};

export const Fort_Lauderdale_2025: PhotoAlbum = {
  title: "Fort Lauderdale 2025",
  photos: [
    "/images/Swim/Fort Lauderdale 2025/1.jpg",
    "/images/Swim/Fort Lauderdale 2025/2.jpg",
    "/images/Swim/Fort Lauderdale 2025/3.jpg",
    "/images/Swim/Fort Lauderdale 2025/4.jpg",
    "/images/Swim/Fort Lauderdale 2025/5.JPG",
    "/images/Swim/Fort Lauderdale 2025/6.jpg",
    "/images/Swim/Fort Lauderdale 2025/7.jpg",
    "/images/Swim/Fort Lauderdale 2025/8.jpg",
    "/images/Swim/Fort Lauderdale 2025/9.jpg",
    "/images/Swim/Fort Lauderdale 2025/10.png",
  ],
};

export const Curacao_2024: PhotoAlbum = {
  title: "Curacao 2024",
  photos: [
    "/images/Swim/Curacao 2024/1.png",
    "/images/Swim/Curacao 2024/2.png",
    "/images/Swim/Curacao 2024/3.png",
    "/images/Swim/Curacao 2024/4.jpg",
    "/images/Swim/Curacao 2024/5.png",
    "/images/Swim/Curacao 2024/6.png",
    "/images/Swim/Curacao 2024/7.JPG",
    "/images/Swim/Curacao 2024/8.JPG",
    "/images/Swim/Curacao 2024/9.png",
  ],
};

export const Curacao_2026: PhotoAlbum = {
  title: "Curacao 2026",
  photos: [
    "/images/Swim/Curacao 2026/1.jpg",
    "/images/Swim/Curacao 2026/2.jpeg",
    "/images/Swim/Curacao 2026/3.jpg",
    "/images/Swim/Curacao 2026/4.JPG",
    "/images/Swim/Curacao 2026/5.jpg",
    "/images/Swim/Curacao 2026/6.JPG",
    "/images/Swim/Curacao 2026/7.jpg",
    "/images/Swim/Curacao 2026/8.JPG",
    "/images/Swim/Curacao 2026/9.jpg",
    "/images/Swim/Curacao 2026/10.JPG",
    "/images/Swim/Curacao 2026/11.jpg",
    "/images/Swim/Curacao 2026/12.jpg",
    "/images/Swim/Curacao 2026/13.jpg",
  ],
};
