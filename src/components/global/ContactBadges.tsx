export default function ({ label, linkTo }: { label: string, linkTo?: string }) {
    console.log(linkTo);
    return linkTo ? (
        <a href={linkTo} target="_blank" className="bg-pf-dark-1 text-pf-dark-6 py-[3px] px-[10px] rounded-[15px]">
            {label}
        </a>
    ) : (
        <p className="bg-pf-dark-1 text-pf-dark-6 py-[3px] px-[10px] rounded-[15px]">
            {label}
        </p>
    );
}