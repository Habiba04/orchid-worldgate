import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="main-heading">
                    <h2>{t("contact.title")}</h2>
                    <p>{t("contact.subtitle")}</p>
                    <div className="mail">
                        <a href="mailto:info@orchid-worldgate.com?subject=Contact" className="link">
                            info@orchid-worldgate.com
                        </a>
                    </div>
                    <p className="or">{t("contact.or")}</p>
                    <div className="mail">
                        <a href="mailto:export@orchid-worldgate.com?subject=Contact" className="link">
                            export@orchid-worldgate.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}