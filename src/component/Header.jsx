import React from 'react'

function Header() {

    const handleSignUp = function(){
        document.querySelector('.sign').classList.remove('disable_sign');
        document.querySelector('.log').classList.add('disable_log');
        document.querySelector('.listing').classList.add('disable_list');
    }
    const handleLogIn = function(){
        document.querySelector('.listing').classList.add('disable_list');
        document.querySelector('.log').classList.remove('disable_log');
        document.querySelector('.sign').classList.add('disable_sign');
    }
  return (
    <div className='heading header_items'>
        <h1 className='title'>Job Portal</h1>
        <div className="header_buttons">
           <button className='but but_sign' onClick={handleSignUp}>SignUp</button>
            <button className='but but_log' onClick={handleLogIn}>LogIn</button>
        </div>
    </div>
  )
}

export default Header