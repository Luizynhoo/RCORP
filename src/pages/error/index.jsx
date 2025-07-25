import { Link } from "react-router-dom";
import './error.css'

export default function Error() {
    return (
        <div className="min-h-screen pt-20">
            <div className="not-found">
                <h1 className="error-title">404</h1>
                <h2>Página não encontrada !</h2>
                <Link size="lg"
                    className="error-link  bg-[#002D5F] hover:bg-[#033972] text-white mt-8 px-8 py-4 text-lg rounded-full "
                    to="/">
                    Volte para o Menu
                </Link>
            </div>
        </div>
    )

}