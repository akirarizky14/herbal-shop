import React from 'react'
import '../../css/Footer/Footer.css'
function Footer() {
  return (
    <div className='container-footer'>
      <div className="wrapper-footer">
        <div className="top-footer">
          <h1>Новостная рассылка</h1>
          <div className="input-footer">
            <input className='text-input-footer' type="text" name="" id=""  placeholder='Напишите что-нибудь здесь.'/>
            <button className='button-input-footer' type="button">Подписаться</button>
          </div>
        </div>
        <div className="middle-footer">
            <div className="wrapper-middle-footer">
              <div className="first-footer">
                <h1>Echoherb</h1>
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</span>
              </div>
              <div className="first-footer">
                <h1>Свяжитесь с нами</h1>
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</span>
              </div>
              <div className="first-footer">
                <h1>Информация</h1>
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</span>
              </div>
              <div className="first-footer">
                <h1>Мой аккаунт</h1>
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</span>
              </div>
            </div>
        </div>
        <div className="bottom-footer">
            <h1>© 2019 All Rights by Echoherbs</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer