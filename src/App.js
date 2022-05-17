import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Sessions from "./pages/sessions/Sessions"
import Seats from "./pages/seats/Seats"
import Success from "./pages/success/Success"
import Header from "./components/header/Header";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes" element={<Sessions />} />
                <Route path="/assentos" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

// COLOCAR ID DO FILME E DA SESSAO DE VOLTA DEPOIS