import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import MenuItem from '../../components/menu-item/menu-item.component'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory/>
        </div>
    </div>
)

export default HomePage;