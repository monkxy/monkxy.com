import axios from "axios";
import gsap from "gsap";
import { useEffect, useState } from "react";

import { HomePage } from "./HomePage";
import { ProjectsPage } from "./ProjectsPage";
import { ReviewsPage } from "./ReviewsPage";
import styles from "./styles.module.css";
import { Review } from "./types";

export const Home = () => {
    const [page, setPage] = useState<string>("home");
    const [reviews, setReviews] = useState<Review[]>([]);

    const scrollToNewPage = (page: string) => {
        gsap.to(`.${styles.flexRow}`, {
            x: -window.innerWidth,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                setPage(page);

                gsap.set(`.${styles.flexRow}`, {
                    x: window.innerWidth,
                });

                gsap.to(`.${styles.flexRow}`, {
                    x: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            },
        });
    };

    useEffect(() => {
        axios
            .get(
                "https://manti.vendicated.dev/api/reviewdb/users/230580946557075457/reviews?flags=0="
            )
            .then(res => setReviews(res.data.reviews.slice(1)));
    }, []);

    return (
        <>
            <HomePage
                pageSwitcher={scrollToNewPage}
                showing={page === "home"}
            />
            <ProjectsPage
                pageSwitcher={scrollToNewPage}
                showing={page === "projects"}
            />
            <ReviewsPage
                pageSwitcher={scrollToNewPage}
                showing={page === "reviews"}
                reviews={reviews}
            />
        </>
    );
};
