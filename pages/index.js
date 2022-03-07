import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import Login from './login'
import ActiveRoutes from './routes/activeRoutes';

export default function Home() {
  const router = useRouter();
  const [auth, setAuth] = useState(true)
  
  return(
      <>
        {auth ? <ActiveRoutes /> : <Login/>} 
      </>
    )
}