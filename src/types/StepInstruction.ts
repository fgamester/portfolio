export type StepInstruction = {
    text: string;
    image?: string;
    code?: string;
    codeLanguage?: string;
};

export function isStepInstruction(obj: any): obj is StepInstruction {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
        return false;
    }
    const requiredProperties = ['text'];
    const optionalProperties = ['image', 'code', 'codeLanguage'];
    const objKeys = Object.keys(obj);

    const hasRequiredProperties = requiredProperties.every(prop => prop in obj);
    const hasOnlyAllowedProperties = objKeys.every(prop => requiredProperties.includes(prop) || optionalProperties.includes(prop));

    if (typeof obj.text !== 'string') return false;
    if ('image' in obj && typeof obj.image !== 'string') return false;
    if ('code' in obj && typeof obj.code !== 'string') return false;
    if ('codeLanguage' in obj && typeof obj.codeLanguage !== 'string') return false;

    return hasRequiredProperties && hasOnlyAllowedProperties;
}

export function formatStepInstruction(obj: any): StepInstruction | undefined {
    if (!obj || Array.isArray(obj) || typeof obj !== 'object') return undefined;
    if (isStepInstruction(obj)) return obj as StepInstruction;

    const newObj: Partial<StepInstruction> = {};

    newObj.text = obj.text;
    if ('image' in obj && typeof obj.image === 'string') newObj.image = obj.image;
    if ('code' in obj && typeof obj.code === 'string') newObj.code = obj.code;
    if ('codeLanguage' in obj && typeof obj.codeLanguage === 'string') newObj.codeLanguage = obj.codeLanguage;

    return isStepInstruction(newObj) ? newObj as StepInstruction : undefined;
}

export function filterStepInstructionArray(list: any): StepInstruction[] {
    return Array.isArray(list) ? list.filter(isStepInstruction) : [];
}

export function isStepInstructionArray(list: any): list is StepInstruction[] {
    return Array.isArray(list) && list.length > 0 && list.every(isStepInstruction);
}

export function isValidStepInstructionArray(list: any): list is StepInstruction[] {
    return Array.isArray(list) && list.every(isStepInstruction);
}