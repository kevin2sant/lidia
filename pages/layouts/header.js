import React from 'react';
import styles from '../../styles/Header.module.css';

import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

import { useRouter } from 'next/router'


const Header =  () => {
    const router = useRouter()

    return(
        <div className={styles.flex_container}>
            <div className={styles.header_text}>Rutas</div>
            <div>
                <Button onClick={() => router.push('/login')} className={styles.header_logo} variant="contained" size="large" endIcon={<LogoutIcon />} />
            </div>
        </div>
    )
}

export default Header