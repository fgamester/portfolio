import { useContext, useState } from "react";
import { isProject, isProjectGuideArray, isProjectTechnologyArray, Project } from "../../types";
import { Context } from "../../context/GloblalContext";

export default function ContentSideNavBar({ postData }: { postData: Project }) {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { updateState } = useContext(Context)

    return (
        <div className={`fixed left-0 top-pf-10 transition-transform ${collapsed && 'translate-x-[-200px]'} lg:relative lg:translate-x-0`}>
            <button onClick={() => updateState && updateState(!collapsed, setCollapsed)} className={`absolute left-[200px] flex justify-end items-center bg-pf-dark-6 w-[40px] ${collapsed ? 'pr-pf-3' : 'pr-pf-4'} rounded-r-[25px] h-pf-10 py-pf-2 lg:hidden`}>
                {collapsed ? '>' : '<'}
            </button>
            <nav className={`h-[calc(100vh-50px)] lg:sticky lg:top-pf-sb flex flex-col bg-pf-dark-6 p-pf-4 lg:rounded-2xl w-[200px] lg:h-fit`}>
                {isProject(postData) && (
                    <>
                        <h4 className='text-xl text-center'>
                            Content List
                        </h4>
                        <ul className='flex flex-col pl-5'>
                            <li className='list-disc'>
                                <a className='hover:underline text-sm' href="#info">Descripción</a>
                            </li>
                            {postData.links && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#links">Links</a>
                                </li>
                            )}
                            {isProjectTechnologyArray(postData.technologies) && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#technologies">Tecnologías</a>
                                </li>
                            )}
                            {isProjectGuideArray(postData.guides) && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#guides">Guías</a>
                                </li>
                            )}
                        </ul>
                    </>
                )}
            </nav>
        </div>
    );
}
