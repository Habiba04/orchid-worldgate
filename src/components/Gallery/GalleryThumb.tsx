import { useState } from "react";
import { Skeleton } from "antd";
import { cld, cldSrcSet } from "./../../utils/cloudinary";

interface GalleryThumbProps {
    /** Cloudinary path, e.g. "owg/gallery/Fresh/pomegranate.png" */
    path: string;
    alt: string;
    className: string;
}

export default function GalleryThumb({ path, alt, className }: GalleryThumbProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={className} style={{ position: "relative" }}>
            {!loaded && (
                <Skeleton.Image
                    active
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        inset: 0,
                    }}
                />
            )}
            <img
                loading="lazy"
                src={cld(path, { width: 800 })}
                srcSet={cldSrcSet(path, [400, 800, 1200])}
                sizes="(max-width: 768px) 50vw, 25vw"
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
        </div>
    );
}
