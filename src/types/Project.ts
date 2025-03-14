import { isProjectGuide, ProjectGuide } from "./ProjectGuide";
import { isProjectLink, ProjectLink } from "./ProjectLink";
import { isProjectTechnology, ProjectTechnology } from "./ProjectTechnology";

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

export function isProject(obj: any): obj is Project {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return false;

    const requiredProperties = ['id', 'name', 'date', 'description', 'tags'];
    const optionalProperties = ['image', 'technologies', 'links', 'guides'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('id' in obj && typeof obj.id !== 'string') return false;
    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('date' in obj && typeof obj.date !== 'string') return false;
    if ('description' in obj && typeof obj.description !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;
    if ('tags' in obj && !obj.tags.every((tag: any) => typeof tag === 'string')) return false;
    if ('technologies' in obj && !obj.technologies.every((tech: ProjectTechnology) => isProjectTechnology(tech))) return false;
    if ('links' in obj && !obj.links.every(isProjectLink)) return false;
    if ('guides' in obj && !obj.guides.every(isProjectGuide)) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function filterTags(list: any[]): string[] {
    return list.filter((tag: any) => typeof tag === 'string');
}

export function filterLinks(list: any[]): ProjectLink[] {
    return list.filter(isProjectLink);
}

export function formatProject(obj: any): Project | null {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return null;
    return isProject(obj) ? obj as Project : null;
}

