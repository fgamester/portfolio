import { Helmet } from "react-helmet";

type MetaTagsProps = {
    title: string;
    description: string;
    image?: string;
    author?: string;
    url?: string;
    index?: boolean;
};

export default function MetaTags({ title, description, image, author, url, index }: MetaTagsProps) {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Portafolio, Proyectos, Ejercicios, Programación, Desarrollo Web" />
            {author && <meta name="author" content={author} />}
            {url && <link rel="canonical" href={url} />}
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {index && <meta name="robots" content="index, follow" />}
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            {url && <meta property="og:url" content={url} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            {url && <meta property="twitter:url" content={url} />}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {image && <meta property="twitter:image" content={image} />}
        </Helmet>
    );
};