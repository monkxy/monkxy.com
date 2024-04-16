export interface Project {
    name: string;
    description: string;
    link: string;
    image: string;
}

export interface ProjectsPageProps {
    pageSwitcher: (page: string) => void;
    showing: boolean;
}
