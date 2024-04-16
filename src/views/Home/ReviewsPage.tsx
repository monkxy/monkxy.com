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
                        <div className={styles.review} key={i}>
                            <div className={styles.flexRow}>
                                <img
                                    src={review.sender.profilePhoto}
                                    className={styles.profilePhoto}
                                />

                                <div
                                    className={styles.flexColumn}
                                    style={{ marginLeft: "10px" }}
                                >
                                    <div className={styles.flexRow}>
                                        <h2 className={styles.username}>
                                            {review.sender.username}
                                        </h2>
                                        <p className={styles.timestamp}>
                                            {new Date(
                                                review.timestamp * 1000
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <p className={styles.comment}>
                                        {review.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.arrow} onClick={() => pageSwitcher("home")}>
                <img src="arrow.webp" className={styles.arrowIcon} />
            </div>
        </div>
    );
};
