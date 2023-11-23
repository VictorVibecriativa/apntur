import "@/styles/footer.css";

export function Footer() {
    return (
        <footer className="bgFooter">
            <div>
                <div className="wpplink">
                    <a className="text-white" target="_blank" href="https://web.whatsapp.com/send?phone=5584988988779&amp;text=+Olá"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <div className="container ">
                <div className="row dispGridMobi">
                    <div className="col">
                        <div className="centroFLex">
                            <img src="/public/imagens/footer/logoFooter.png" alt="" />
                        </div>
                        <p className="footerTxt text-center mt-1">Passe férias, não passe perrengue.</p>
                    </div>

                    <div className="col">
                        <h3 className="footerTlt mt2Mobi">Reserva</h3>
                        <p className="footerTxt">+55 (84) 98898-8779
                        </p>
                        <p className="footerTxt">
                            Niltcamilo@gmail.com
                        </p>
                    </div>

                    <div className="col">
                        <h3 className="footerTlt">Menu</h3>
                        <div>
                            <ul>
                                <a href="/"><li className="footerTxt navsFooter">Início</li></a>
                                <a href="/passeios"><li className="footerTxt navsFooter">Passeios</li></a>
                                <a href="/sobre"><li className="footerTxt navsFooter">Sobre</li></a>
                                <a href="/contato"><li className="footerTxt navsFooter">Contato</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="col">
                        <h3 className="footerTlt">Formas de pagamento</h3>
                        <img src="/public/imagens/footer/pagamentos.png" alt="" />
                    </div>
                </div>


                <div className="bxCopyR">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="copyTlt">Copyright ©2023 Todos direitos reservados | AP&N Turismo</h3>
                        </div>

                        <div className="col">
                            <div className="flex justify-end">
                                <ul className="flex">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}