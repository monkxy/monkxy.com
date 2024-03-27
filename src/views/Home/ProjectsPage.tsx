import styles from "./styles.module.css";

interface ProjectsPageProps {
    pageSwitcher: (page: string) => void;
    showing: boolean;
}

export default function ProjectsPage({ pageSwitcher, showing }: ProjectsPageProps) {
    /*
    const projects = [
        {
            name: "monkxy",
            description: "my personal website",
            link: "https://monkxy.com",
            image: "favicon.webp"
        }
    ];
    */

    return (
        <div className={styles.flexRow} style={{ display: showing ? "flex" : "none" }}>
            <div className={styles.content}>
                <h1 className={styles.projects}>projects (WIP)</h1>

                <div className={styles.flexRow}>

                </div>
            </div>

            <div className={styles.arrow} onClick={() => pageSwitcher("home")}>
                <img src="arrow.webp" className={styles.arrowIcon} />
            </div>
        </div>
    );
}
