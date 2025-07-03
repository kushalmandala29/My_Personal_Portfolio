export interface ProjectCardInterface {
    id?: any;
    project: {
        id: string;
        image: string;
        category: string;
        name: string;
        description: string;
        longDescription: string;
        technologies: string[];
        features: string[];
        challenges: string;
        learnings: string;
        link: string;
        github: string;
    }
    specialStyle?: boolean;
}
