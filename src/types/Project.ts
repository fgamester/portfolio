import { filterProjectGuideArray, isProjectGuideArray, ProjectGuide } from "./ProjectGuide";
import { filterProjectLinkArray, isProjectLinkArray, ProjectLink } from "./ProjectLink";
import { filterProjectTechnologyArray, isProjectTechnologyArray, ProjectTechnology } from "./ProjectTechnology";

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
    if ('technologies' in obj && !isProjectTechnologyArray(obj.technologies)) return false;
    if ('links' in obj && !isProjectLinkArray(obj.links)) return false;
    if ('guides' in obj && !isProjectGuideArray(obj.guides)) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function filterTags(list: any): string[] {
    return Array.isArray(list) ? list.filter((tag: any) => typeof tag === 'string') : [];
}

export function formatProject(obj: any): Project | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isProject(obj)) return obj as Project;

    if ('tags' in obj) obj.tags = filterTags(obj.tags);
    if ('technologies' in obj) obj.technologies = filterProjectTechnologyArray(obj.technologies);
    if ('links' in obj) obj.links = filterProjectLinkArray(obj.links);
    if ('guides' in obj) obj.guides = filterProjectGuideArray(obj.guides);

    return isProject(obj) ? obj as Project : undefined;
}

export function filterProjectArray(list: any): Project[] {
    return Array.isArray(list) ? list.filter(isProject) : [];
}

export function isProjectArray(list: any): list is Project[] {
    return Array.isArray(list) && list.length > 0 && list.every(isProject);
}