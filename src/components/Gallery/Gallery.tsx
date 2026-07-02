import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { galleryImages, GalleryCategory } from "../Gallery/galleryImages";
import GalleryThumb from "./GalleryThumb";

const FILTERS: Array<"all" | GalleryCategory> = ["all", "fresh", "frozen", "processed", "real-life"];
const INITIAL_LIMIT = 8;

export default function Gallery() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<"all" | GalleryCategory>("all");
    const [showAll, setShowAll] = useState(false);

    const filtered = useMemo(
        () =>
            activeFilter === "all"
                ? galleryImages
                : galleryImages.filter((img) => img.category === activeFilter),
        [activeFilter]
    );

    const visible = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);
    const hasMore = filtered.length > INITIAL_LIMIT;

    const handleFilterClick = (filter: "all" | GalleryCategory) => {
        setActiveFilter(filter);
        setShowAll(false);
    };

    const handleSeeMoreClick = () => {
        setShowAll((prev) => !prev);
    };

    return (
        <div className="gallery" id="gallery">
            <div className="container">
                <div className="main-heading">
                    <h2>{t("gallery.title")}</h2>
                    <p>{t("gallery.subtitle")}</p>
                </div>
                <ul className="shuffle">
                    {FILTERS.map((filter) => (
                        <li
                            key={filter}
                            className={activeFilter === filter ? "active" : ""}
                            data-filter={filter}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {t(`gallery.filters.${filter}`)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`imgs-container${showAll ? " show" : ""}`}>
                {visible.map((img, idx) => (
                    <GalleryThumb
                        key={`${img.src}-${idx}`}
                        src={img.src}
                        alt={img.alt}
                        className={`box ${img.category}`}
                    />
                ))}
            </div>
            {hasMore && (
                <button className="btn" id="seeMoreBtn" onClick={handleSeeMoreClick}>
                    {showAll ? t("gallery.seeLess") : t("gallery.seeMore")}
                </button>
            )}
        </div>
    );
}