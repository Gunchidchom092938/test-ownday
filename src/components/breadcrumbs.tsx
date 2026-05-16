type BreadcrumbsProps = {
    items: string[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className=" px-8 flex flex-wrap items-center gap-2 py-2 lg:text-[13px] text-[9px] text-[#9a9188] border-b border-gray-300"
        >
            {items.map((item, index) => (
                <span
                    key={item}
                    className="flex items-center gap-2"
                >
                    {index > 0 ? (
                        <span
                            className="lg:text-[14px]"
                            aria-hidden="true"
                        >
                            ›
                        </span>
                    ) : null}
                    <span
                        className={
                            index === items.length - 1
                                ? "font-medium text-[#4b4340]"
                                : ""
                        }
                    >
                        {item}
                    </span>
                </span>
            ))}
        </nav>
    );
}
