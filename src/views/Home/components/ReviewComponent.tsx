import styles from "../styles.module.css";
import { ReviewProps } from "../types";

export const ReviewComponent = ({ review, key }: ReviewProps) => {
    return (
        <div className={styles.review} key={key}>
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
                    <p className={styles.comment}>{review.comment}</p>
                </div>
            </div>
        </div>
    );
};
