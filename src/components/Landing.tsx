import { useTranslation } from "react-i18next";

export default function Landing() {
    const { t } = useTranslation();

    return (
        <div className="landing" id="home">
            <div className="container">
                <div className="image">
                    <div className="content">
                        <div className="land logo">
                            <img loading="lazy" src="/assets/logo.PNG" alt="" />
                        </div>
                        <div className="land welcome">
                            <p>{t("landing.tagline")}</p>
                            <a href="#explore">{t("landing.cta")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}