import { useState } from "react";
import { CardsInput, CardsQuantity } from "../../components"

export const Home = () =>{
    const [quantity, setQuantity] = useState<number | null>(null);

    return (
        <>
            {quantity === null ? (
                <CardsQuantity onConfirm={(qtd: number) => setQuantity(qtd)} />
            ) : (
                <CardsInput quantity={quantity} />
            )}
        </>
    )
}