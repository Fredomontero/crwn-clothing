import React from 'react'
import SingIn from '../../components/sing-in/sing-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './sing-in-and-sing-up.styles.scss'

const SingInAndSingUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn/>
        <SignUp/>
    </div>

)

export default SingInAndSingUpPage;