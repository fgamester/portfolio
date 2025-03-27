import { Data } from '../types/Data'

/* ----------------------------------Context Props---------------------------------- */
export type ContextProps = {
    data: Data | undefined,
    updateState: (newState: any, setState: (state: any) => void) => void,
    globalLoading: boolean
}

export * from '../types/About'
export * from '../types/Activity'
export * from '../types/Content'
export * from '../types/ContactInfo'
export * from '../types/Data'
export * from '../types/GuideStep'
export * from '../types/Hobbie'
export * from '../types/Project'
export * from '../types/ProjectGuide'
export * from '../types/ProjectLink'
export * from '../types/ProjectTechnology'
export * from '../types/Technology'
export * from '../types/Featured'
export * from '../types/FeaturedAbout'