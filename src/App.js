import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home"
import Sessions from "./pages/Sessions"
import Seats from "./pages/Seats"
import Success from "./pages/Success"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/sucesso" element={<Home />} />
                <Route path="/sessoes" element={<Sessions />} />
                <Route path="/assentos" element={<Seats />} />
                <Route path="/" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

// COLOCAR ID DO FILME E DA SESSAO DE VOLTA DEPOIS