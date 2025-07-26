export interface AboutData {
    id: string;
    title: string;
    info: AboutInfo[];
}

export interface AboutInfo {
    id: string;
    title: string;
    stage?: string;
    course?: string;
    grade?: string;
    icons?: React.ReactNode[];
    key: string;
}