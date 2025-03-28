import { useContext, useState } from "react";
import { isContent, isTechnologyArray } from "../../types";
import { Context } from "../../context/GloblalContext";

export default function HomeSideNavBar() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { data, updateState } = useContext(Context)
    
    return (
        <div className={`fixed left-0 top-pf-10 transition-transform ${collapsed && 'translate-x-[-200px]'} lg:relative lg:translate-x-0 z-10`}>
            <button onClick={() => updateState(!collapsed, setCollapsed)} className={`absolute left-[200px] flex justify-end items-center bg-pf-dark-6 w-[40px] ${collapsed ? 'pr-pf-3' : 'pr-pf-4'} rounded-r-[25px] h-pf-10 py-pf-2 lg:hidden`}>
                {collapsed ? '>' : '<'}
            </button>
            <nav className={`h-[calc(100vh-50px)] lg:sticky lg:top-pf-sb flex flex-col bg-pf-dark-6 p-pf-4 lg:rounded-2xl w-[200px] lg:h-fit`}>
                {(isTechnologyArray(data?.technologies) || isContent(data?.projects) || isContent(data?.exercises)) && (
                    <>
                        <h4 className='text-xl text-center'>
                            Content List
                        </h4>
                        <a className='hover:underline text-lg' href="#featured">Featured</a>
                        <ul className='flex flex-col pl-5'>
                            {isTechnologyArray(data?.technologies) && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#technologies">Known Technologies</a>
                                </li>
                            )}
                            {isContent(data?.projects) && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#projects">Projects</a>
                                </li>
                            )}
                            {isContent(data?.exercises) && (
                                <li className='list-disc'>
                                    <a className='hover:underline text-sm' href="#exercises">Exercises</a>
                                </li>
                            )}
                        </ul>
                    </>
                )}
                <a className='hover:underline text-lg' href="#about">About Me</a>
                <ul className='flex flex-col pl-5'>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#whoiam">Who I Am</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
