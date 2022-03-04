import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Button onClick={() => router.push('/login')}>Ir a Login</Button>
    </div>
  )
}
