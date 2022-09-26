// import React, { useState } from 'react'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import './Navbar.css'
// import logo from '../../assets/logoVBC2.png'

// const Menu = () => (
//     <>

//         <p><a href='#home'>Home</a></p>
//         <p><a href='#WhatVBC'>What is VBC?</a></p>
//         <p><a href='#features'>Case studies</a></p>
//         <p><a href='#possibility'>Comunity</a></p>
//         <p><a href='#modify'>ModifyCards</a></p>
//     </>
// )

// const Navbar = () => {
//     const [toogleMenu, setToogleMenu] = useState(false);

//     return (
//         <div className='gpt3__navbar'>
//             <div className='gpt3__navbar-links'>
//                 <div className='gpt3__navbar-links_logo'>
//                     <img src={logo} alt='logo' />
//                 </div>
//                 <div className='gpt3__navbar-links_container'>
//                     <Menu />
//                 </div>
//             </div>
//             <div className='gpt3__navbar-sing'>
//                 <p>Sing in</p>
//                 <button type='button'>Sing up</button>
//             </div>
//             <div className='gpt3__navbar-menu'>
//                 {toogleMenu
//                     ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
//                     : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
//                 }
//                 {toogleMenu && (
//                     <div className='gpt3__navbar-menu_conainer scale-up-center'>
//                         <div className='gpt3__navbar-menu_container-links'>
//                             <Menu />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Navbar