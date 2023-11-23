import { Tech } from "@/components/home_tech";

export function Header() {
    return (
        <header className="pt-48 pb-40 bg-gradient-to-r from-violet-600 to-indigo-600">
            <div className="container">
                <div className="lg:w-6/12 w-full">
                    <h1 className="text-xl lg:text-4xl font-bold text-slate-50">
                        🚀 Projeto base Vibecriativa
                    </h1>
                    <p className="mt-8 mb-10 font-sm text-slate-50 leading-loose">
                        A finalidade desse projeto é agilizar o processo de
                        desenvolvimento de forma padronizada, performática e
                        escalável
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Tech variant="astro" description="Para renderização do lado do servidor" link="https://astro.build/" />
                        <Tech variant="react" description="Para componentização e reatividade" link="https://react.dev/" />
                    </div>
                </div>
            </div>
        </header>
    )
}