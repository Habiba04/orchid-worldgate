import { useTranslation } from "react-i18next";

export default function Brands() {
    const { t } = useTranslation();

    return (
        <>
            <div className="brands" id="brands">
                <div className="container">
                    <div className="main-heading">
                        <h2>{t("brands.title")}</h2>
                    </div>
                    <div className="brands-images">
                        <img loading="lazy" src="/assets/Brands/Spark_fresh_logo.png" alt="Spark Fresh" />
                        <img loading="lazy" src="/assets/Brands/Spark_gardens_logo.png" alt="Spark Gardens" />
                    </div>
                </div>
            </div>
            <div className="spikes_down"></div>
        </>
    );
}