import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="about about-us" id="about">
            <div className="container">
                <div className="main-heading">
                    <h2>{t("about.title")}</h2>
                    <div className="about-us-p">
                        {t("about.p1")}
                        <br />
                        <div id="mission"></div>
                        {t("about.p2")}
                    </div>
                </div>
            </div>
        </div>
    );
}