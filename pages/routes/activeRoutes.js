import React, { style } from 'react';
import styles from '../../styles/ActiveRoutes.module.css';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import Header from '../layouts/header'
import Footer from '../layouts/footer' 

const  ActiveRoutes = () => {
    

    const actions = [
        { icon: <AccessTimeIcon />, name: 'Pendientes' },
        { icon: <AccessTimeIcon />, name: 'Activas' },
        { icon: <AccessTimeIcon />, name: 'Gestionadas' }
    ];

      
    
    
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Header />
            
            
            <div className={styles.flex_container_route}>
                <div className={styles.route_header}>
                    <div className={styles.route_header_detail}>
                        <div className={styles.route_route}># 123465888</div>
                        <div className={styles.route_ppu}>PYSK96</div>
                    </div>
                    <div className={styles.route_header_detail}>
                        <div className={styles.route_hour}>Hora de Inicio (07:00-PM)</div>
                        <div className={styles.route_date}>2022-03-01</div>
                    </div>
                </div>
                
                <div className={styles.route_body}>
                    <div className={styles.route_pending}>
                        <AccessTimeIcon fontSize="large"/>
                        <br/>
                        3
                    </div>
                    <div className={styles.route_delivered}>
                        <CheckIcon fontSize="large"/>
                        <br/>
                        10
                    </div>
                    <div className={styles.route_not_delivered}>
                        <CloseIcon fontSize="large"/>
                        <br/>
                        1
                    </div>
                </div>
            </div>         

            <div className={styles.flex_container_route}>
                <div className={styles.route_header}>
                    <div className={styles.route_header_detail}>
                        <div className={styles.route_route}># 123465884</div>
                        <div className={styles.route_ppu}>PYSK96</div>
                    </div>
                    <div className={styles.route_header_detail}>
                        <div className={styles.route_hour}>Hora de Inicio (07:00-PM)</div>
                        <div className={styles.route_date}>2022-03-01</div>
                    </div>
                </div>
                
                <div className={styles.route_body}>
                    <div className={styles.route_pending}>
                        <AccessTimeIcon fontSize="large"/>
                        <br/>
                        0
                    </div>
                    <div className={styles.route_delivered}>
                        <CheckIcon fontSize="large"/>
                        <br/>
                        7
                    </div>
                    <div className={styles.route_not_delivered}>
                        <CloseIcon fontSize="large"/>
                        <br/>
                        1
                    </div>
                </div>
            </div>          
            
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'fixed', bottom: 70, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClose}
                />
                ))}
            </SpeedDial>
            <Footer />
        </>
    )
}


export default ActiveRoutes;