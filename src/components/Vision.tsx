import { useTranslation } from "react-i18next";

export default function Vision() {
    const { t } = useTranslation();

    return (
        <div className="vision">
            <div className="container">
                <q>{t("vision.quote")}</q>
                <span>{t("vision.signature")}</span>
            </div>
        </div>
    );
}