import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {
    const { t } = useTranslation();

    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    <div className="main-heading">
                        <h2>{t("services.title")}</h2>
                        <p>{t("services.subtitle")}</p>
                    </div>
                    <div className="services-container">
                        <div className="srv-box">
                            {/* <i className="fa-regular fa-snowflake"></i> */}
                            <FontAwesomeIcon icon={['far', 'snowflake']} />
                            <div className="text">
                                <h3>{t("services.frozen.title")}</h3>
                                <p>
                                    {/* <i className="fa-solid fa-chevron-right arrow"></i> */}
                                    <FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />
                                    {t("services.frozen.l1")}</p>
                                <p>
                                    {/* <i className="fa-solid fa-chevron-right arrow"></i> */}
                                    <FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />
                                    {t("services.frozen.l2")}</p>
                            </div>
                        </div>
                        <div className="srv-box">
                            {/* <i className="fa-solid fa-seedling"></i> */}
                            <FontAwesomeIcon icon={['fas', 'seedling']} />
                            <div className="text">
                                <h3>{t("services.fresh.title")}</h3>
                                <p>
                                    {/* <i className="fa-solid fa-chevron-right arrow"></i> */}
                                    <FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />
                                    {t("services.fresh.l1")}</p>
                                <p>
                                    {/* <i className="fa-solid fa-chevron-right arrow"></i> */}
                                    <FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />
                                    {t("services.fresh.l2")}</p>
                            </div>
                        </div>
                        <div className="srv-box">
                            {/* <i className="fa-solid fa-box-open"></i> */}
                            <FontAwesomeIcon icon={['fas', 'box-open']} />
                            <div className="text">
                                <h3>{t("services.processed.title")}</h3>
                                <p><FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />{t("services.processed.l1")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />{t("services.processed.l2")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />{t("services.processed.l3")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['far', 'chevron-right']} />{t("services.processed.l4")}</p>
                            </div>
                        </div>
                        <div className="srv-box">
                            {/* <i className="fa-solid fa-handshake"></i> */}
                            <FontAwesomeIcon icon={['fas', 'handshake']} />
                            <div className="text">
                                <h3>{t("services.brand.title")}</h3>
                                <p>{t("services.brand.l1")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </>
    );
}