import { useTranslation } from "react-i18next";

const cards = [
    { key: "about", href: "#about", img: "/assets/explore/about.jpeg" },
    { key: "services", href: "#services", img: "/assets/explore/services.jpeg" },
    { key: "gallery", href: "#gallery", img: "/assets/explore/gallery.jpeg" },
    { key: "contact", href: "#contact", img: "/assets/explore/contact.jpeg" },
] as const;

export default function Explore() {
    const { t } = useTranslation();

    return (
        <div className="explore" id="explore">
            <div className="container">
                <div className="main-heading">
                    <h2>{t("explore.title")}</h2>
                </div>
                <div className="explore-container">
                    {cards.map((card) => (
                        <div
                            key={card.key}
                            className="box"
                            onClick={() => {
                                window.location.href = card.href;
                            }}
                        >
                            <div className="img-holder">
                                <img loading="lazy" src={card.img} alt="" />
                            </div>
                            <h2>{t(`explore.${card.key}.title`)}</h2>
                            <p>{t(`explore.${card.key}.desc`)}</p>
                            <a href={card.href}>{t(`explore.${card.key}.more`)}</a>
                        </div>
                    ))}
                </div>
                <div id="vision"></div>
            </div>
        </div>
    );
}