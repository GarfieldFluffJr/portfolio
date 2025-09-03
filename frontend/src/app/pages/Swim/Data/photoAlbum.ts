type PhotoAlbumCover = {
  title: string;
  photo: string;
  destination: string;
};

export const photoAlbumCovers: PhotoAlbumCover[] = [
  {
    title: "UW First Year (2024-2025)",
    photo: "/images/Swim/UW First Year/1.JPG",
    destination: "/UW_First_Year",
  },
  {
    title: "Fort Lauderdale 2025",
    photo: "images/Swim/Fort Lauderdale 2025/1.jpg",
    destination: "/Fort_Lauderdale_2025",
  },
  {
    title: "Curacao 2024",
    photo: "images/Swim/Curacao 2024/1.png",
    destination: "/Curacao_2024",
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
    "/images/Swim/UW First Year/2.JPEG",
    "/images/Swim/UW First Year/3.png",
    "/images/Swim/UW First Year/4.JPEG",
    "/images/Swim/UW First Year/5.JPEG",
    "/images/Swim/UW First Year/6.JPG",
    "/images/Swim/UW First Year/7.png",
    "/images/Swim/UW First Year/8.JPEG",
    "/images/Swim/UW First Year/9.jpg",
    "/images/Swim/UW First Year/10.jpg",
    "/images/Swim/UW First Year/11.JPEG",
  ],
};
