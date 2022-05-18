import Receipt from "../components/receipt/Receipt"

export default function Success(props) {
    const { receipt } = props;

    return (
        <>
            <Receipt receipt={receipt} />
        </>
    )
}