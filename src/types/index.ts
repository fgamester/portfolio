export type ProjectTechnology = {
    name: string,
    usedFor: string
}

export type Technology = {
    name: string,
    image: string
}

export type ProjectLink = {
    name: string,
    link: string,
    icon?: string
}

export type GuideSteps = {
    name: string,
    instructions: string,
    image?: string
}

export type ProjectGuide = {
    name: string,
    description: string,
    videoLink?: string,
    steps: GuideSteps[]
}

export type Project = {
    id: string,
    name: string,
    date: string,
    description: string,
    image?: string,
    tags: string[],
    technologies: ProjectTechnology[],
    links?: ProjectLink[],
    guides: ProjectGuide[]
}

export type Content = {
    description: string,
    info?: string,
    content: Project[]
}

export type Activity = {
    name: string,
    description: string,
    image?: string
}

export type Hobby = {
    name: string,
    description: string,
    image?: string
}

export type Data = {
    name: string,
    alias: string,
    about?: {
        description: string,
        image?: string
    },
    technologies?: Technology[],
    projects?: Content,
    exercises?: Content,
    hobbies?: (Hobby | Activity)[]
}

export type ContextProps = {
    data: Data | undefined
}

export function isProject(item: any): item is Project {
    return item && typeof item === 'object' && 'id' in item && 'name' in item && 'date' in item && 'description' in item && Array.isArray(item.tags) && Array.isArray(item.technologies);
}
