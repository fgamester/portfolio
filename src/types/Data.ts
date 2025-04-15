import { format } from "path";
import { About, formatAbout, isAbout } from "./About";
import { Activity, isActivity } from "./Activity";
import { Content, formatContent, isContent } from "./Content";
import { Featured, formatFeatured, isFeatured } from "./Featured";
import { Hobby, isHobby } from "./Hobbie";
import { filterTechnologyArray, formatTechnology, isTechnologyArray, isValidTechnologyArray, Technology } from "./Technology";

export type Data = {
    name: string,
    alias: string,
    about?: About,
    featured: Featured,
    technologies?: Technology[],
    projects?: Content,
    exercises?: Content,
    hobbies?: (Hobby | Activity)[]
}

export function isData(obj: any): obj is Data {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'alias', 'featured'];
    const optionalProperties = ['about', 'technologies', 'projects', 'exercises', 'hobbies'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('alias' in obj && typeof obj.alias !== 'string') return false;
    if ('about' in obj && obj.about !== undefined && !isAbout(obj.about)) return false;
    if ('technologies' in obj && obj.technologies !== undefined && !isValidTechnologyArray(obj.technologies)) return false;
    if (!isFeatured(obj.featured)) return false;
    if ('projects' in obj && obj.projects !== undefined && !isContent(obj.projects)) return false;
    if ('exercises' in obj && obj.exercises !== undefined && !isContent(obj.exercises)) return false;
    if ('hobbies' in obj && obj.hobbies !== undefined && !obj.hobbies.every((item: Hobby | Activity) => isHobby(item) || isActivity(item))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatData(obj: any): Data | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isData(obj)) return obj as Data;

    const newObj: Partial<Data> = {};
    newObj.name = obj.name;
    newObj.alias = obj.alias;
    newObj.featured = formatFeatured(obj.featured);
    if ('about' in obj) newObj.about = formatAbout(obj.about);
    if ('technologies' in obj && Array.isArray(obj.technologies)) {
        const tempList = obj.technologies.map((item: any) => formatTechnology(item));
        newObj.technologies = filterTechnologyArray(tempList);
    }
    if ('projects' in obj) newObj.projects = formatContent(obj.projects);
    if ('exercises' in obj) newObj.exercises = formatContent(obj.exercises);


    return isData(newObj) ? newObj as Data : undefined;
}