import { filterStepInstructionArray, formatStepInstruction, isStepInstructionArray, StepInstruction } from "./StepInstruction";

export type GuideStep = {
    name: string,
    instructions: StepInstruction[]
}

export function isGuideStep(obj: any): obj is GuideStep {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['name', 'instructions'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop));

    if (typeof obj.name !== 'string') return false;
    if (!isStepInstructionArray(obj.instructions)) return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatGuideStep(obj: any): GuideStep | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isGuideStep(obj)) return obj as GuideStep;

    const newObj: Partial<GuideStep> = {};

    newObj.name = obj.name;
    if ('instructions' in obj && Array.isArray(obj.instructions)) {
        const tempList = obj.instructions.map((item: any) => formatStepInstruction(item));
        const filteredList = filterStepInstructionArray(tempList);
        if (filteredList.length > 0) newObj.instructions = filteredList;
    }

    return isGuideStep(newObj) ? newObj as GuideStep : undefined;
}

export function filterGuideStepArray(list: any): GuideStep[] {
    return Array.isArray(list) ? list.filter(isGuideStep) : [];
}

export function isGuideStepArray(list: any): list is GuideStep[] {
    return Array.isArray(list) && list.length > 0 && list.every(isGuideStep);
}

export function isValidGuideStepArray(list: any): list is GuideStep[] {
    return Array.isArray(list) && list.every(isGuideStep);
}