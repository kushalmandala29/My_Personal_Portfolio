export interface AboutData {
    title: string;
    info: AboutInfo[];
}

export interface AboutInfo {
    title: string;
    stage?: string;
    course?: string;
    grade?: string;
    icons?: React.ReactNode[];
}