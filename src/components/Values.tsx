import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
    { key: "trust", icon: "handshake-angle", type: 'fas'},
    { key: "pioneering", icon: "compass", type: 'far'},
    { key: "agility", icon: "bolt-lightning", type: 'fas' },
    { key: "customer", icon: "users-viewfinder", type: 'fas' },
    { key: "ownership", icon: "key", type: 'fas' },
    { key: "community", icon: "earth-africa", type: 'fas' },
] as const;

export default function Values() {
    const { t } = useTranslation();

    return (
        <>
            <div className="values" id="values">
                <div className="container">
                    <div className="main-heading">
                        <h2>{t("values.title")}</h2>
                        <p>{t("values.subtitle")}</p>
                    </div>
                    <div className="values-container">
                        {items.map((item) => (
                            <div className="values-box" key={item.key}>
                                {/* <i className={item.icon}></i> */}
                                <FontAwesomeIcon icon={[`${item.type}`, `${item.icon}`]} />
                                <div className="text">
                                    <h3>{t(`values.${item.key}.title`)}</h3>
                                    <p>{t(`values.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="spikes_down"></div>
        </>
    );
}