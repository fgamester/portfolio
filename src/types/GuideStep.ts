export type GuideStep = {
    name: string,
    instructions: string,
    image?: string
}

export function isGuideStep(obj: any): obj is GuideStep {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'instructions'];
    const optionalProperties = ['image'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if ('name' in obj && typeof obj.name !== 'string') return false;
    if ('instructions' in obj && typeof obj.instructions !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function filterGuideStepArray(list: any): GuideStep[] {
    return Array.isArray(list) ? list.filter(isGuideStep) : [];
}

export function isGuideStepArray(list: any): list is GuideStep[] {
    return Array.isArray(list) && list.length > 0 && list.every(isGuideStep);
}