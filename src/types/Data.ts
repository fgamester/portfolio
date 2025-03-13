import { About, isAbout } from "./About";
import { Activity, isActivity } from "./Activity";
import { Content, isContent } from "./Content";
import { Hobby, isHobby } from "./Hobbie";
import { isTechnology, Technology } from "./Technology";

/* ----------------------------------Data---------------------------------- */
export type Data = {
    name: string,
    alias: string,
    about?: About,
    technologies?: Technology[],
    projects?: Content,
    exercises?: Content,
    hobbies?: (Hobby | Activity)[]
}

export function isData(obj: any): obj is Data {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'alias'];
    const optionalProperties = ['about', 'technologies', 'projects', 'exercises', 'hobbies'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('alias' in obj && typeof obj.alias !== 'string') return false;
    if ('about' in obj && !isAbout(obj.about)) return false;
    if ('technologies' in obj && obj.technologies.every((tech: Technology) => isTechnology(tech))) return false;
    if ('projects' in obj && !isContent(obj.projects)) return false;
    if ('exercises' in obj && !isContent(obj.exercises)) return false;
    if ('hobbies' in obj && !obj.hobbies.every((item: Hobby | Activity) => isHobby(item) || isActivity(item))) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

