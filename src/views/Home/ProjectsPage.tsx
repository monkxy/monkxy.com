import styles from "./styles.module.css";
import { Project, ProjectsPageProps } from "./types";

const projects: Project[] = [
    {
        name: "monkxy",
        description: "my personal website",
        link: "https://monkxy.com",
        image: "favicon.webp",
    },
    {
        name: "Purpet",
        description: "a blooket private server, written in TypeScript",
        link: "https://purpet.xyz",
        image: "purpet.webp",
    },
    {
        name: "Blacket",
        description: "a blooket private server, written in NodeJS",
        link: "https://blacket.org",
        image: "blacket.webp",
    },
];

export const ProjectsPage = ({ pageSwitcher, showing }: ProjectsPageProps) => {
    return (
        <div
            className={styles.flexRow}
            style={{ display: showing ? "flex" : "none" }}
        >
            <div className={styles.content}>
                <h1 className={styles.header}>projects</h1>

                <div className={styles.projects}>
                    {projects.map((project: Project, i: number) => (
                        <div className={styles.project} key={i}>
                            <a href={project.link} target="_blank">
                                <img
                                    src={project.image}
                                    className={styles.projectImage}
                                />
                            </a>

                            <div className={styles.flexColumn}>
                                <h2 className={styles.projectName}>
                                    {project.name}
                                </h2>
                                <i className={styles.projectDescription}>
                                    {project.description}
                                </i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={styles.arrow}
                onClick={() => pageSwitcher("reviews")}
            >
                <img src="arrow.webp" className={styles.arrowIcon} />
            </div>
        </div>
    );
};
