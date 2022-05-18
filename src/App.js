import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage"
import SessionsPage from "./pages/SessionsPage"
import SeatsPage from "./pages/SeatsPage"
import SuccessPage from "./pages/SuccessPage"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route path="/assentos/:idSessao" element={<SeatsPage />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}