import React, {useState} from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'

const Login = () => {
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const router = useRouter()

    return(
        <>

            <div className={styles.login_card}>
            <Image src="/logo2.png" width={150} height={150} className={styles.app_logo}/>

            {/* <img src='logo.png' className={styles.app_logo} alt="logo" /> */}
            <br /> 
            <TextField
                required
                id="outlined-required"
                label="Usuario"
                className={styles.input_login}
            />

            <TextField
                required
                id="outlined-required"
                label="Contraseña"
                className={styles.input_login}
                type="password"
            />

            <div className={styles.button_login}>
                <Button onClick={() => router.push('/routes/activeRoutes')} className="button-bg-login" variant="contained" size="large" endIcon={<LoginIcon />}>
                    Entrar
                </Button>
            </div>
            
            <label className={styles.forgot_passwd}>¿Ha olvidado su contraseña?</label>
        </div>
        </>
        
    )
}

export default Login;