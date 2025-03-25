const validIcons = ['github', 'linkedin', 'email'];

export default function ({ label, linkTo, icon }: { label: string, linkTo?: string, icon?: string }) {
    return linkTo ? (
        <div className="flex items-center gap-pf-1 bg-pf-dark-1 text-pf-dark-6 py-[3px] pl-[5px] pr-[10px] rounded-[15px]">
            {icon && validIcons.includes(icon) &&
                <img className=" size-6" src={`icons/${icon}.svg`} alt={`${label} Icon`} />
            }
            <a href={linkTo} target="_blank" className="">
                {label}
            </a>
        </div>
    ) : (
        <div className="flex items-center gap-pf-1 bg-pf-dark-1 text-pf-dark-6 py-[3px] px-[10px] rounded-[15px]">
            {icon && validIcons.includes(icon) &&
                <img className=" size-6" src={`icons/${icon}.svg`} alt={`${label} Icon`} />
            }
            <p className="">
                {label}
            </p>
        </div>
    );
}