import styles from "./styles.module.css";
import { HomePageProps } from "./types";

export const HomePage = ({ pageSwitcher, showing }: HomePageProps) => {
    const icons = {
        "vsc.webp": "https://code.visualstudio.com/",
        "ts.webp": "https://www.typescriptlang.org/",
        "njs.webp": "https://nodejs.org/",
    };

    return (
        <div
            className={styles.flexRow}
            style={{ display: showing ? "flex" : "none" }}
        >
            <div className={styles.content}>
                <div className={styles.flexRow}>
                    <div className={styles.pfp}>
                        <img src="favicon.webp" className={styles.pfp} />
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className={styles.monkxy}>monkxy</h1>
                        <i className={styles.about}>fullstack developer</i>

                        <div className={styles.icons}>
                            {Object.entries(icons).map(
                                ([icon, link]: [string, string]) => (
                                    <a href={link} target="_blank" key={link}>
                                        <img
                                            src={icon}
                                            className={styles.icon}
                                        />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles.arrow}
                onClick={() => pageSwitcher("projects")}
            >
                <img src="arrow.webp" className={styles.arrowIcon} />
            </div>
        </div>
    );
};
