import { useState } from "react";
import { CardsInput, CardsQuantity } from "../../components"
import { useNavigate } from "react-router";

export const Home = () =>{
    const [quantity, setQuantity] = useState<number | null>(null);
    const navigate = useNavigate()

    return (
        <>
            {quantity === null ? (
                <CardsQuantity onConfirm={(qtd: number) => setQuantity(qtd)} />
            ) : (
                <CardsInput quantity={quantity} onConfirm={(cards: string[][]) => navigate("/conferir", { state: { cards } })} />
            )}
        </>
    )
}