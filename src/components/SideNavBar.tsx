import { useContext, useState } from "react";
import { Context } from "../context/GloblalContext";

export default function SideNavBar() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { updateState } = useContext(Context);

    return (
        <div className={`fixed left-0 top-[50px] transition-transform ${collapsed && 'translate-x-[-200px]'} lg:relative lg:translate-x-0`}>
            <button onClick={() => updateState && updateState(!collapsed, setCollapsed)} className={`absolute left-[175px] flex justify-end items-center bg-pf-dark-6 aspect-square w-[65px] px-pf-3 rounded-[25px] h-pf-10 py-pf-2 lg:hidden`}>
                {collapsed ? '>' : '<'}
            </button>
            <nav className={`h-[calc(100vh-50px)] lg:sticky lg:top-pf-sb flex flex-col bg-pf-dark-6 p-pf-4 lg:rounded-2xl w-[200px] lg:h-fit`}>
                <h4 className='text-xl text-center'>
                    Content List
                </h4>
                <a className='hover:underline text-lg' href="#featured">Featured</a>
                <ul className='flex flex-col pl-5'>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#technologies">Known Technologies</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#projects">Projects</a>
                    </li>
                    <li className='list-disc'>
                        <a className='hover:underline text-sm' href="#exercises">Exercises</a>
                    </li>
                </ul>
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
