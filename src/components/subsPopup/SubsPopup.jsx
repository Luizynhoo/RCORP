import { useState, useEffect } from 'react'
import './SubsPopup.css'

export default function SubsPopup({ delaySeconds }) {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const lastClosed = localStorage.getItem("popupClosedAt");

        if (lastClosed) {
            const lastClosedTime = new Date(parseInt(lastClosed, 10));
            const now = new Date();

            const diffSeconds = (now - lastClosedTime) / 1000;

            if (diffSeconds >= delaySeconds) {
                setShowPopup(true);
            }
        } else {
            setShowPopup(true);
        }
    }, [delaySeconds]);

    const handleClose = () => {
        setShowPopup(false);
        localStorage.setItem("popupClosedAt", Date.now().toString());
    };

    if (!showPopup) return null;

    return (
        <div className='popup'>
            <div className='popup-content'>
                <button className='popup-close' onClick={handleClose}>
                    ✕
                </button>

                <div className='popup-body'>
                    <div className='popup-image'>
                        <img src="./Banners/Banner-CEL-RCORP.webp" alt="Crucero Celebrity" />
                    </div>

                    <div className='popup-form'>
                        <h2>Recibe novedades de Rcorp Travel</h2>
                        <form
                            action="https://rcorptravel.us18.list-manage.com/subscribe/post?u=d0e5c22ffe5105e8d5b1bb001&id=706cc08afc"
                            method="post"
                            noValidate
                        >
                            <label htmlFor="mce-FNAME">
                                Nombre <span style={{ color: '#ff0000' }}>*</span>
                            </label>
                            <input
                                id="mce-FNAME"
                                type="text"
                                name="FNAME"
                                placeholder="Tu nombre"
                                required
                            />

                            <label htmlFor="mce-EMAIL">
                                Correo electrónico <span style={{ color: '#ff0000' }}>*</span>
                            </label>
                            <input
                                id="mce-EMAIL"
                                name="EMAIL"
                                type="email"
                                placeholder="Tu correo electrónico"
                                required
                            />

                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                <input
                                    type="text"
                                    name="b_d0e5c22ffe5105e8d5b1bb001_706cc08afc"
                                    tabIndex={-1}
                                    defaultValue=""
                                    placeholder="No completar este campo"
                                />
                            </div>

                            <button type="submit" className="btn-enviar">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
