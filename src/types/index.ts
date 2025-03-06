export type ProjectTechnology = {
    name: string,
    usedFor: string
}

export function isProjectTechnology(item: any): item is ProjectTechnology {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'usedFor'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop))

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type Technology = {
    name: string,
    image: string
}

export function isTechnology(item: any): item is Technology {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop))

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type ProjectLink = {
    name: string,
    link: string,
    icon?: string
}

export function isProjectLink(item: any): item is ProjectLink {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'link'];
    const optionalProperties = ['icon'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type GuideSteps = {
    name: string,
    instructions: string,
    image?: string
}

export function isGuideSteps(item: any): item is GuideSteps {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'instructions'];
    const optionalProperties = ['image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type ProjectGuide = {
    name: string,
    description: string,
    videoLink?: string,
    steps: GuideSteps[]
}

export function isProjectGuide(item: any): item is ProjectGuide {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'description', 'steps'];
    const optionalProperties = ['videoLink'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type Project = {
    id: string,
    name: string,
    date: string,
    description: string,
    image?: string,
    tags: string[],
    technologies?: ProjectTechnology[],
    links?: ProjectLink[],
    guides?: ProjectGuide[]
}

export function isProject(item: any): item is Project {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['id', 'name', 'date', 'description', 'tags'];
    const optionalProperties = ['image', 'technologies', 'links', 'guides'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type Content = {
    description: string,
    info?: string,
    content: Project[]
}

export function isContent(item: any): item is Content {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['description', 'content'];
    const optionalProperties = ['info'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type Activity = {
    name: string,
    description: string,
    image?: string
}

export function isActivity(item: any): item is Activity {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'description'];
    const optionalProperties = ['image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type Hobby = {
    name: string,
    description: string,
    image?: string
}

export function isHobby(item: any): item is Hobby {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'description'];
    const optionalProperties = ['image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
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

export function isData(item: any): item is Data {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'alias'];
    const optionalProperties = ['about', 'technologies', 'projects', 'exercises', 'hobbies'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export type ContextProps = {
    data: Data | undefined
}
