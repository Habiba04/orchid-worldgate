import { useState } from "react";
import { Skeleton } from "antd";

interface GalleryThumbProps {
    src: string;
    alt: string;
    className: string;
}

export default function GalleryThumb({ src, alt, className }: GalleryThumbProps) {
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
                src={src}
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