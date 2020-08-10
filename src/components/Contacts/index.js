import React from 'react';
import './style.sass';
import inst from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import {Button, ButtonGroup} from '@material-ui/core';


export function Contacts() {
    return <div className='contacts'>

        <div className='contactsForm'>
            <p><span>Адрес</span> <br/> Беларусь, г. Минск ул. Комсомольская, 865</p>
            <p><span>Телефон</span> <br/> 7717, (029) 75037916, (044) 75037976</p>
            <p><span>Отдел кадров</span> <br/> (029) 18090640, (029) 60190380</p>
            <p><span>Email</span> <br/> info@pizzeria.by</p>
        </div>

        <hr className='hr'/>
        <div className='nameSoc'><span>Соцсети</span></div>

        <ButtonGroup className='socseti' variant='text' color='primary' aria-label='text primary button group'>
            <Button href='https://www.instagram.com/?hl=ru'><img src={inst} alt={'svg'}/> </Button>
            <Button href='https://www.facebook.com/'><img src={facebook} alt={'svg'}/> </Button>
            <Button href='https://twitter.com/?lang=ru'><img src={twitter} alt={'svg'}/> </Button>
            <Button href='https://www.whatsapp.com/'><img src={whatsapp} alt={'svg'}/> </Button>
        </ButtonGroup>
    </div>
}

