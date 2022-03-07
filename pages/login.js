import React, {useState} from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import Alert from '@mui/material/Alert';

const Login = () => {
    const [error, seterror] = useState(false)

    const [loginUser, setloginUser] = useState({
        user : '',
        passwd : ''
    });

    const {user, passwd} = loginUser
    
    const router = useRouter()

    const setForm = (e) => {
        setloginUser({
                ...loginUser,
                [e.target.name] : e.target.value
        })
    }

    const validateForm = () => {
        if (user.length == 0){
            seterror(true)
        }

        if (passwd.length == 0){
            seterror(true)
        }

        if(user == 'kmoreno' && passwd == 'qaxwszk3v1n'){
            router.push('/routes/activeRoutes')
        }
    }

    return(
        <>
            <div className={styles.login_card}>
            <Image src="/logo2.png" width={150} height={150} className={styles.app_logo}/>

            {/* <img src='logo.png' className={styles.app_logo} alt="logo" /> */}
            <br /> 
            <TextField
                id="user"
                required
                label="Usuario"
                className={styles.input_login}
                value={user}
                name="user"
                onChange={(e) => setForm(e)}
            />

            <TextField
                id="passwd"
                required
                label="Contraseña"
                className={styles.input_login}
                value={passwd}
                name="passwd"
                onChange={(e) => setForm(e)}
                type="password"
            />

            
            <div className={styles.button_login}>
                <Button onClick={() => validateForm()} className="button-bg-login" variant="contained" size="large" endIcon={<LoginIcon />}>
                    Entrar
                </Button>
            </div>
            
            <label className={styles.forgot_passwd}>¿Ha olvidado su contraseña?</label>
            
            {error && (
                <Alert severity="error">Usuario o Contraseña invalidas</Alert>
            )}
            
        </div>
        </>
        
    )
}

export default Login;