import { useTranslation } from "react-i18next";

export default function Mission() {
    const { t } = useTranslation();

    return (
        <div className="vision">
            <div className="container">
                <q>{t("mission.quote")}</q>
                <span>{t("mission.signature")}</span>
            </div>
        </div>
    );
}