import Logo from './icons/bat.jpg'
import Github from './icons/github.png'
import gmail from './icons/gmail.png'
import wasap from './icons/wasap.png'

export default function Footer(){
    return(
        <div className="navbar bg-dark" style={{position: 'fixed', bottom: "0", width: "100%"}}>
            <div style={{paddingLeft: "20px"}}>
                <img src={Logo} style={{maxWidth: "35px"}} />
                <i style={{color: "white", paddingLeft: "10px"}}>Miguel Angel</i>
            </div>
            <div style={{paddingRight: "20px"}}>
            <a href='https://github.com/Levi-Programmer'><img src={Github} style={{maxWidth: "35px", marginRight: "10px"}}/></a>
            <a href='mailto:miguedevweb6@gmail.com?Subject=Hi%20'><img src={gmail} style={{maxWidth: "30px", marginRight: "10px"}} /></a>
            <a href='https://api.whatsapp.com/send?phone=573225748021&text=Hi%20:)'><img src={wasap} style={{maxWidth: "30px"}}/></a>
            </div>
        </div>
    )
}






