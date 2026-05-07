export interface ITechStack{
    frontend: string[];
    backend: string[];
    database: string[];
    authentication?: string[];
    payments?: string[];
}

export interface IProject { 
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    techStack: ITechStack;
    projectThumbnail: string;
    liveLink: string;
    clientRepo: string;
    serverRepo: string;
    isFeatured?: boolean;
}