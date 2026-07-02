import { useTranslation } from "react-i18next";
import { Segmented } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (value: string | number) => {
        i18n.changeLanguage(String(value));
    };

    return (
        <div className="header" id="header">
            <div className="container">
                <a href="#" className="logo">
                    <img loading="lazy" src="/assets/horizental.PNG" alt="Logo" />
                </a>
                <ul className="main-nav">
                    <li>
                        <div className="mega-menu-head">
                            <a href="#about">{t("nav.about")}</a>
                            {/* <i className="fa-solid fa-chevron-down"></i> */}
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                        </div>
                        <div className="mega-menu">
                            <ul className="links">
                                <li><a href="#about">{t("nav.aboutUs")}</a></li>
                                <li><a href="#vision">{t("nav.vision")}</a></li>
                                <li><a href="#mission">{t("nav.mission")}</a></li>
                                <li><a href="#values">{t("nav.values")}</a></li>
                                <li><a href="#whyUS">{t("nav.whyUs")}</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="mega-menu-head">
                            <a href="#services">{t("nav.services")}</a>
                            {/* <i className="fa-solid fa-chevron-down"></i> */}
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                        </div>
                        <div className="mega-menu">
                            <ul className="links">
                                <li><a href="#services">{t("nav.services")}</a></li>
                                <li><a href="#support">{t("nav.support")}</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#gallery">{t("nav.gallery")}</a></li>
                    <li><a href="#brands">{t("nav.brands")}</a></li>
                    <li><a href="#contact">{t("nav.contact")}</a></li>
                    <li className="lang-switch" style={{ display: "flex", alignItems: "center" }}>
                        <Segmented
                            size="small"
                            value={i18n.language}
                            onChange={toggleLanguage}
                            options={[
                                { label: "EN", value: "en" },
                                { label: "AR", value: "ar" },
                            ]}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}