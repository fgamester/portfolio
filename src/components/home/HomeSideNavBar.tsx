import { useContext, useState } from "react";
import { Featured, isContactInfoArray, isProjectArray, isTechnologyArray, Project } from "../../types";
import { Context } from "../../context/GloblalContext";

export default function HomeSideNavBar({ featured, projectList, exerciseList }: { featured: Featured, projectList?: Project[], exerciseList?: Project[] }) {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { updateState } = useContext(Context)

    return (
        <div className={`fixed left-0 top-pf-10 transition-transform ${collapsed && 'translate-x-[-200px]'} lg:relative lg:translate-x-0 z-10`}>
            <button
                onClick={() => updateState(!collapsed, setCollapsed)}
                className={`absolute left-[200px] flex justify-end items-center bg-pf-dark-6 w-[40px] ${collapsed ? 'pr-pf-3' : 'pr-pf-4'} rounded-r-[25px] h-pf-10 py-pf-2 lg:hidden`}
            >
                {collapsed ? '>' : '<'}
            </button>
            <nav
                className={`h-[calc(100vh-50px)] lg:sticky lg:top-pf-sb flex flex-col bg-pf-dark-6 p-pf-4 lg:rounded-2xl w-[200px] lg:h-fit`}
            >
                {(isTechnologyArray(featured.technologies) || isProjectArray(projectList) || isProjectArray(exerciseList)) && (
                    <>
                        <h4 className='text-xl text-center'>
                            Contenido
                        </h4>
                        <a
                            onClick={() => updateState(!collapsed, setCollapsed)}
                            className='hover:underline text-lg'
                            href="#featured"
                        >
                            Destacados
                        </a>
                        <ul className='flex flex-col pl-5'>
                            {isTechnologyArray(featured.technologies) && (
                                <li className='list-disc'>
                                    <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-sm' href="#technologies">Tecnologías conocidas</a>
                                </li>
                            )}
                            {isProjectArray(projectList) && projectList.length > 0 && (
                                <li className='list-disc'>
                                    <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-sm' href="#projects">Proyectos</a>
                                </li>
                            )}
                            {isProjectArray(exerciseList) && exerciseList.length > 0 && (
                                <li className='list-disc'>
                                    <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-sm' href="#exercises">Ejercicios</a>
                                </li>
                            )}
                        </ul>
                    </>
                )}
                <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-lg' href="#about">Sobre mí</a>
                <ul className='flex flex-col pl-5'>
                    <li className='list-disc'>
                        <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-sm' href="#who-am-i">¿Quién soy?</a>
                    </li>
                    {(isContactInfoArray(featured.about.contact)) && (
                        <li
                            className='list-disc'
                        >
                            <a onClick={() => updateState(!collapsed, setCollapsed)} className='hover:underline text-sm' href="#contact-info">Canales de contacto</a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}
