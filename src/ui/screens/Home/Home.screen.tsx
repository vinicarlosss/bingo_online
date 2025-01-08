import { useState } from "react";
import { CardsQuantity } from "../../components"

export const Home = () =>{
    const [quantity, setQuantity] = useState<number | null>(null);

    return (
        <>
            {quantity === null ? (
                <CardsQuantity onConfirm={(qtd: number) => setQuantity(qtd)} />
            ) : (
                null
            )}
        </>
    )
}