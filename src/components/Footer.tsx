import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18n from "../i18n";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="box">
                    <div className="img">
                        <img
                            loading="lazy"
                            src="/assets/OWG_logo.PNG"
                            alt="logo"
                            onClick={() => {
                                window.location.href = "#";
                            }}
                        />
                    </div>
                </div>
                <div className="box">
                    <ul className="links">
                        <li>
                            <a href="#about">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.aboutUs")}
                            </a>
                        </li>
                        <li>
                            <a href="#services">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.services")}
                            </a>
                        </li>
                        <li>
                            <a href="#support">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.support")}
                            </a>
                        </li>
                        <li>
                            <a href="#brands">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.brands")}
                            </a>
                        </li>
                        <li>
                            <a href="#whyUS">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.whyUs")}
                            </a>
                        </li>
                        <li>
                            <a href="#values">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.values")}
                            </a>
                        </li>
                        <li>
                            <a href="#gallery">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.gallery")}
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <FontAwesomeIcon icon={['fas', i18n.dir() === 'rtl' ? 'angles-left' : 'angles-right']} className="footer-link-arrow" />
                                {t("nav.contact")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <div className="line">
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <FontAwesomeIcon icon={['fas', 'location-dot']} />
                        <div className="info">{t("footer.address")}</div>
                    </div>
                    <div className="line">
                        {/* <i className="fa-solid fa-clock"></i> */}
                        <FontAwesomeIcon icon={['fas', 'clock']} />
                        <div className="info">{t("footer.hours")}</div>
                    </div>
                    <div className="line">
                        {/* <i className="fa-solid fa-phone-volume"></i> */}
                        <FontAwesomeIcon icon={['fas', 'phone-volume']} />
                        <div className="info">
                            <span dir="ltr">(+20) 1115410600</span>
                            <span dir="ltr">(+202) 25201773</span>
                        </div>
                    </div>
                    <div className="line">
                        {/* <i className="fa-solid fa-envelope"></i> */}
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                        <div className="info">
                            <span>info@orchid-worldgate.com</span>
                            <span>export@orchid-worldgate.com</span>
                        </div>
                    </div>
                    <div className="line">
                        {/* <i className="fa-solid fa-share"></i> */}
                        <FontAwesomeIcon icon={['fas', 'share']} />
                        <div className="info">
                            <span>orchid-worldgate.com</span>
                        </div>
                    </div>
                    <ul className="social">
                        <li>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/share/1ANdaQWiLw/?mibextid=wwXIfr"
                                className="facebook"
                            >
                                {/* <i className="fa-brands fa-facebook"></i> */}
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/orchidworldgate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="instagram"
                            >
                                {/* <i className="fa-brands fa-instagram"></i> */}
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/company/orchid-world-gate-trading/"
                                className="linkedin"
                            >
                                {/* <i className="fa-brands fa-linkedin-in"></i> */}
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="top-to-bot">
                <div className="top-btn">
                    <a href="#explore" title={t("footer.goToExplore")}>
                        {/* <i className="fa-solid fa-chevron-up"></i> */}
                        <FontAwesomeIcon icon={['fas', 'chevron-up']} />
                    </a>
                </div>
                <div className="down-btn">
                    <a href="#footer" title={t("footer.goToFooter")}>
                        {/* <i className="fa-solid fa-chevron-down"></i> */}
                        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                    </a>
                </div>
            </div>
            <p className="copyright">{t("footer.copyright")}</p>
        </div>
    );
}