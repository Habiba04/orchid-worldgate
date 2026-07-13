import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Support() {
    const { t } = useTranslation();

    return (
        <>
            <div className="support" id="support">
                <div className="container">
                    <div className="main-heading">
                        <h2>{t("support.title")}</h2>
                        <p>{t("support.subtitle")}</p>
                    </div>
                    <div className="support-container">
                        <div className="support-box">
                            {/* <i className="fa-solid fa-clipboard-check"></i> */}
                            <FontAwesomeIcon icon={['fas', 'clipboard-check']} />
                            <div className="text">
                                <h3>{t("support.export.title")}</h3>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l1")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l2")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l3")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l4")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l5")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l6")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l7")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.export.l8")}</p>
                            </div>
                        </div>
                        <div className="support-box">
                            {/* <i className="fa-solid fa-tag"></i> */}
                            <FontAwesomeIcon icon={['fas', 'tag']} />
                            <div className="text">
                                <h3>{t("support.brand.title")}</h3>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.brand.l1")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.brand.l2")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.brand.l3")}</p>
                                <p><FontAwesomeIcon className="arrow" icon={['fas', 'chevron-right']} />{t("support.brand.l4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </>
    );
}