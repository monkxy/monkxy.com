export interface Review {
    id: string;
    sender: {
        id: string;
        discordID: string;
        username: string;
        profilePhoto: string;
        badges: string[];
    };
    comment: string;
    timestamp: number;
}

export interface ReviewsPageProps {
    pageSwitcher: (page: string) => void;
    showing: boolean;
    reviews: Review[];
}

export interface ReviewProps {
    review: Review;
    key: number;
}
