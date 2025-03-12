/* Project Technology */
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
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop));

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('usedFor' in item && typeof item.usedFor !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Technology */
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
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop));

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Project Link */
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

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('link' in item && typeof item.link !== 'string') return false;
    if ('icon' in item && typeof item.icon !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Guide Steps */
export type GuideStep = {
    name: string,
    instructions: string,
    image?: string
}

export function isGuideStep(item: any): item is GuideStep {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'instructions'];
    const optionalProperties = ['image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('instructions' in item && typeof item.instructions !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Project Guide */
export type ProjectGuide = {
    name: string,
    description: string,
    videoLink?: string,
    steps: GuideStep[]
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

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('description' in item && typeof item.description !== 'string') return false;
    if ('videoLink' in item && typeof item.videoLink !== 'string') return false;
    if ('steps' in item && !item.steps.every((step: GuideStep) => isGuideStep(step))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Project */
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

    if ('id' in item && typeof item.id !== 'string') return false;
    if ('name' in item && typeof item.name !== 'string') return false;
    if ('date' in item && typeof item.date !== 'string') return false;
    if ('description' in item && typeof item.description !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;
    if ('tags' in item && !item.tags.every((tag: string) => typeof tag === 'string')) return false;
    if ('technologies' in item && !item.technologies.every((tech: ProjectTechnology) => isProjectTechnology(tech))) return false;
    if ('links' in item && !item.links.every((link: ProjectTechnology) => isProjectLink(link))) return false;
    if ('guides' in item && !item.guides.every((guide: ProjectGuide) => isProjectGuide(guide))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Content */
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

    if ('description' in item && typeof item.description !== 'string') return false;
    if ('info' in item && typeof item.info !== 'string') return false;
    if ('content' in item && !item.content.every((project: Project) => isProject(project))) return false;


    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Activity */
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

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('description' in item && typeof item.description !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Hobby */
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

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('description' in item && typeof item.description !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* About */

export type About = {
    description: string,
    image?: string
}

export function isAbout(item: any): item is About {
    if (!item || Array.isArray(item) || typeof item !== 'object') {
        return false;
    }
    const requiredProperties = ['description'];
    const optionalProperties = ['image'];
    const itemKeys = Object.keys(item);

    const hasRequiredProperties = requiredProperties.every(prop => prop in item);
    const hasOnlyAllowedProperties = itemKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('description' in item && typeof item.description !== 'string') return false;
    if ('image' in item && typeof item.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Data */
export type Data = {
    name: string,
    alias: string,
    about?: About,
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

    if ('name' in item && typeof item.name !== 'string') return false;
    if ('alias' in item && typeof item.alias !== 'string') return false;
    if ('about' in item && !isAbout(item.about)) return false;
    if ('technologies' in item && item.technologies.every((tech: Technology) => isTechnology(tech))) return false;
    if ('projects' in item && !isContent(item.projects)) return false;
    if ('exercises' in item && !isContent(item.exercises)) return false;
    if ('hobbies' in item && !item.hobbies.every((element: Hobby | Activity) => isHobby(element) || isActivity(element))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

/* Context Props */
export type ContextProps = {
    data: Data | undefined
}
