import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const items = [
    { key: "sourcing", icon: "truck-ramp-box" },
    { key: "expertise", icon: "handshake" },
    { key: "access", icon: "globe" },
    { key: "integrity", icon: "clock-rotate-left" },
    { key: "tailored", icon: "pen-ruler" },
] as const;

export default function WhyUs() {
    const { t } = useTranslation();

    return (
        <>
            <div className="about" id="whyUS">
                <div className="container">
                    <div className="main-heading">
                        <h2>{t("whyUs.title")}</h2>
                        <p>{t("whyUs.subtitle")}</p>
                    </div>
                    <div className="about-container">
                        {items.map((item) => (
                            <div className="abt-box" key={item.key}>
                                <i className={item.icon}></i>
                                <FontAwesomeIcon icon={['fas', `${item.icon}`]} />
                                <div className="text">
                                    <h3>{t(`whyUs.${item.key}.title`)}</h3>
                                    <p>{t(`whyUs.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </>
    );
}