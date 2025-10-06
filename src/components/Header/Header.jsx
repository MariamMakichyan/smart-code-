import ButtonMain from "../ButtonMain/ButtonMain"

function Header() {
    return( <header className="header-main">
            <div className="container">
                <div className="header-info">
                    <h1>
                        <span>Սովորի՛ր</span>
                        ծրագրավորում
                        <br/>
                        <span>Դարձի՛ր</span>
                        պահանջված մասնագետ
                    </h1>
                    <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>




                    <div className="header-action">
                        <ButtonMain href="#" text="Սկսե՛լ ուսումը"  />
                        <a href="" className="but-play">
                            <i className="far fa-play-circle">
                            </i>
                            Տեսանյութ
                        </a>
                    </div>




                    <ul className="social-links">
                        
                    </ul>


        
                </div>



                <img src="https://smartcode.am/public/image/header.svg" className="header-image" />


            </div>
        </header>)
}


export default Header



{/* <li><a href="https://www.facebook.com/SmartCode.am/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/smarttechnologyllc/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li><a href="https://www.instagram.com/smartcode.am/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li><a href="https://www.tiktok.com/@smartcode.am" target="_blank">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </li> */}