import { ReviewComponent } from "./components/ReviewComponent";
import styles from "./styles.module.css";
import { Review, ReviewsPageProps } from "./types";

export const ReviewsPage = ({
    pageSwitcher,
    showing,
    reviews,
}: ReviewsPageProps) => {
    return (
        <div
            className={styles.flexRow}
            style={{ display: showing ? "flex" : "none" }}
        >
            <div className={styles.content}>
                <h1 className={styles.header}>reviews</h1>

                <div className={styles.reviews}>
                    {reviews.map((review: Review, i: number) => (
                        <ReviewComponent review={review} key={i} />
                    ))}
                </div>
            </div>

            <div className={styles.arrow} onClick={() => pageSwitcher("home")}>
                <img src="arrow.webp" className={styles.arrowIcon} />
            </div>
        </div>
    );
};
