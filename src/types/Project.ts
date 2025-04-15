import { filterProjectGuideArray, formatProjectGuide, isValidProjectGuideArray, ProjectGuide } from "./ProjectGuide";
import { filterProjectLinkArray, formatProjectLink, isValidProjectLinkArray, ProjectLink } from "./ProjectLink";
import { filterProjectTechnologyArray, formatProjectTechnology, isValidProjectTechnologyArray, ProjectTechnology } from "./ProjectTechnology";

export type Project = {
    id: string,
    name: string,
    date: string,
    description: string,
    image?: string,
    tags?: string[],
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

    if (!hasRequiredProperties || !hasOnlyAllowedProperties) return false;

    if (typeof obj.id !== 'string') return false;
    if (typeof obj.name !== 'string') return false;
    if (typeof obj.date !== 'string') return false;
    if (typeof obj.description !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;
    if (!obj?.tags?.every((tag: any) => typeof tag === 'string')) return false;
    if ('technologies' in obj && !isValidProjectTechnologyArray(obj.technologies)) return false;
    if ('links' in obj && !isValidProjectLinkArray(obj.links)) return false;
    if ('guides' in obj && !isValidProjectGuideArray(obj.guides)) return false;

    return true;
}

export function filterTags(list: any): string[] {
    return Array.isArray(list) ? list.filter((tag: any) => typeof tag === 'string') : [];
}

export function formatProject(obj: any): Project | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isProject(obj)) return obj as Project;

    const newObj: Partial<Project> = {};

    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.date = obj.date;
    newObj.description = obj.description;
    if ('image' in obj && typeof obj.image === 'string') newObj.image = obj.image;
    if ('tags' in obj) newObj.tags = filterTags(obj.tags);
    if ('technologies' in obj && Array.isArray(obj.technologies)) {
        const tempList = obj.technologies.map((item: any) => formatProjectTechnology(item));
        newObj.technologies = filterProjectTechnologyArray(tempList);
    }
    if ('links' in obj && Array.isArray(obj.links)) {
        const tempList = obj.links.map((item: any) => formatProjectLink(item));
        newObj.links = filterProjectLinkArray(tempList);
    }
    if ('guides' in obj && Array.isArray(obj.guides)) {
        const tempList = obj.guides.map((item: any) => formatProjectGuide(item));
        const filteredList = filterProjectGuideArray(tempList);
        if (filteredList.length > 0) newObj.guides = filteredList;
    }

    return isProject(newObj) ? newObj as Project : undefined;
}

export function filterProjectArray(list: any): Project[] {
    return Array.isArray(list) ? list.filter(isProject) : [];
}

export function isProjectArray(list: any): list is Project[] {
    return Array.isArray(list) && list.length > 0 && list.every(isProject);
}

export function isValidProjectArray(list: any): list is Project[] {
    return Array.isArray(list) && list.every(isProject);
}