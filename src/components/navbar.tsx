import { Menu, MessagesSquare, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Fragment, useState } from "react";

interface navbarProps { currentPath: string };
export function Navbar({ currentPath }: navbarProps) {
    console.log(currentPath);
    const [showMenuMobile, setshowMenuMobile] = useState(false)

    return (
        <div className="pt-3 pb-3 fixed w-full -z-[-1] navbars">
            <div className="container lg:grid grid-cols-3 items-center flex justify-between">

                <ul className={`bgNavMob flex flex-col lg:flex-row fixed left-0 bg-white w-full z-[99999] gap-4 lg:static lg:bg-[transparent_!important]  ${showMenuMobile ? "top-20" : "-top-full"}`}>
                    <li><a href="/" className={`w-full menuItem ${currentPath == "/" && "menuActive"}`}>Início</a></li>
                    <li><a href="/passeios" className={`w-full menuItem ${currentPath == "/passeios" && "menuActive"}`}>Passeios</a></li>
                    <li><a href="/sobre" className={`w-full menuItem ${currentPath == "/sobre" && "menuActive"}`}>Sobre</a></li>
                    <li><a href="/contato" className={`w-full menuItem ${currentPath == "/contato" && "menuActive"}`}>Contato</a></li>
                    <li>
                        <Button className="btnReservaNav lg:hidden flex" asChild size={"sm"}><a href="">Reservar passeio</a></Button>
                    </li>
                </ul>

                <a className="flex justify-center animate__animated animate__fadeInDown" href="/"><img src="imagens/logomarca/logoapn.png" alt="Detalhamento sobre a logotipo" /></a>

                <ul className="lg:flex justify-end items-center hidden">
                    {/* <li>
                        <i className="m-2 iconsMidias fa-brands fa-square-facebook"></i>
                    </li>
                    <li>
                        <i className="m-2 iconsMidias fa-brands fa-twitter"></i>
                    </li> */}
                    <li className="mr-4">
                        <a target="_blank" href="https://www.instagram.com/apn_tur/">
                            <i className="m-2 iconsMidias fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <Button className="btnReservaNav" asChild size={"sm"}>
                            <a
                                target="_blank"
                                href="https://web.whatsapp.com/send?phone=5584988988779&text=+Oii"
                            >
                                Reservar Passeio
                            </a>
                        </Button>
                    </li>
                </ul>

                <Button variant="ghost" size="sm" className="lg:hidden" aria-label={!showMenuMobile ? "Abrir menu" : "Fechar menu"} onClick={() => setshowMenuMobile(!showMenuMobile)}><span className="text-sm  text-white"></span> {!showMenuMobile ? (<Menu />) : <X />}</Button>
            </div>
        </div>
    )
}

function NavbarLink() {

}
