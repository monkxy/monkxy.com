import gsap from "gsap";
import { useState } from "react";

import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import styles from "./styles.module.css";

export default function Home() {
    const [page, setPage] = useState<string>("home");

    const scrollToNewPage = (page: string) => {
        gsap.to(`.${styles.flexRow}`, {
            x: -window.innerWidth,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                setPage(page);

                gsap.set(`.${styles.flexRow}`, {
                    x: window.innerWidth
                });

                gsap.to(`.${styles.flexRow}`, {
                    x: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            }
        });
    };

    return (
        <>
            <HomePage pageSwitcher={scrollToNewPage} showing={page === "home"} />
            <ProjectsPage pageSwitcher={scrollToNewPage} showing={page === "projects"} />
        </>
    );
}
