export type ProjectTechnology = {
    name: string,
    usedFor: string
}

export type Technology = {
    name: string,
    src: string
}

export type Project = {
    id: string,
    name: string,
    date: string,
    description: string
    image?: string,
    tags: string[],
    technologies: ProjectTechnology[]
}

export type Content = {
    description: string,
    info?: string,
    content: Project[]
}

export type Data = {
    name: string,
    alias: string,
    about: {
        description: string,
        image?: string
    },
    technologies: Technology[],
    projects: Content,
    exercises: Content
}
