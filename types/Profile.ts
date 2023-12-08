import { PortableTextBlock } from 'sanity';

export type Profile = {
    _id: string;
    createdAt: Date;
    name: string;
    email: string;
    image: string;
    logo: string;
    summary: PortableTextBlock[];
    contact: string[]
}