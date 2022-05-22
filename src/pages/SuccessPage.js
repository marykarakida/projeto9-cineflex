import { useLocation } from "react-router-dom"
import Receipt from "../components/receipt/Receipt"

export default function SuccessPage() {
    const location = useLocation()

    return (
            <Receipt receipt={location.state.receipt} />
    )
}