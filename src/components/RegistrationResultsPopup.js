import React from 'react';
import successImgPath from '../images/successReg.png';
import unsuccessImgPath from '../images/unsuccessReg.png';

function RegistrationResultsPopup({onClose}) {
    return (
        <div className="popup popup_opened" >
        
            <div className ="popup__window">

            <button type="button" className="popup__close-button" onClick={onClose}></button>
     
            <img className="popup__reg-picture" src={successImgPath} alt="здесь должна быть красивая галочка, но что-то пошло не так" />
            <h2 className="popup__header popup__header_centered">Вы успешно<br/>зарегистрировались!</h2>

        </div>

    </div>
    );

}

export default RegistrationResultsPopup;