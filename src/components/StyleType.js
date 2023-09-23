import React from 'react'
import '../style.css'
import style from '../custom.module.css'
import { Button } from 'react-bootstrap';

export default function StyleType() {
    return (
        <div>
            <h1 className='primary'>Mujahhidul Islam - from style.css </h1>

            <h2 style={{ color: 'red', backgroundColor: 'yellow' }}> Mujahidul Islam - from inline css </h2>


            <h3 className={style.secondary}> Mujahidul Islam - from module.css</h3>

            {/* react-bootstrap.github.io // 

        * cmd - npm install react-bootstrap bootstrap

        * link in index.js - The following line can be included in your src/index.js or App.js file -->
import 'bootstrap/dist/css/bootstrap.min.css';

        * To Use components - import like this - import { Button } from 'react-bootstrap'; 


         */}

            <Button onClick={()=>alert('Hi')} variant="primary">Primary</Button>


        </div>
    )
}
