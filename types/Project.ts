import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  mainImage: string;
  bigImage: string;
  meduimImages: string[];
  smallImages: string[];
  url: string;
  content?: PortableTextBlock[];
  team?: string[]
}