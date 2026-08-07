export type GalleryItem = {
  id: string;
  title: string;
  category: "Fotos" | "Vídeos";
  stage?: string;
  image: string;
  videoUrl?: string;
};

export const gallery: GalleryItem[] = [];
