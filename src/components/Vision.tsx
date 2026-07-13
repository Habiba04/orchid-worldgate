import { useTranslation } from "react-i18next";

export default function Vision() {
    const { t } = useTranslation();

    return (
        <div className="vision">
            <div className="container">
                <q>{t("vision.quote")}</q>
                <span dir="ltr">- Orchid World Gate</span>
            </div>
        </div>
    );
}