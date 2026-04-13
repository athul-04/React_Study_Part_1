import { Clock } from 'lucide-react';
import "./Footer.css"
const Footer=()=>{
    return(
        <footer className='footer'>
            <div className="footer-icon">
                <Clock size={24} className="items" />
                <span>We are open now</span>
            </div>
        </footer>
    )
}
export default Footer;