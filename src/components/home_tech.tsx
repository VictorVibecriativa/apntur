interface TechProps{
    link: string,
    variant: "react" | "astro",
    description: string
}

export function Tech({ link, variant, description}: TechProps) {
    return (
        <a
            href={link}
            target="_blank"
            data-variant={variant}
            className="
            data-[variant=astro]:bg-orange-50 data-[variant=astro]:border-orange-600 
            data-[variant=react]:bg-blue-50 data-[variant=react]:border-blue-600
            border px-3 py-1 max-w-max rounded-lg lg:rounded-full"
        >
            <span className="font-medium capitalize">{variant}</span>
            <small className="text-slate-950 ml-1">- {description}</small>
        </a>
    )
}