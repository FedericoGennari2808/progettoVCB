import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import './Navbar2.css'

 
const Navbar2 = () => {
    return (
        <nav className='nav'>
            <Link to='/home' className='site-title'><img className='logo2' src='logoVBC2.png' alt=''></img></Link>
            <ul>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/getStarted'>Get Started</CustomLink>
            <CustomLink to='/comunity'>Comunity</CustomLink>
            <div className='buttonEnter'><CustomLink to='/comunityHome'>Enter Now!</CustomLink></div>
            <CustomLink to='/modify'>ModifyCards</CustomLink>
            </ul>
        </nav>
    )
}
const CustomLink = ({to, children, ...props}) => {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})

return(
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
    
)
}
export default Navbar2