import { Button, TextField, Typography, Grid2 as Grid } from "@mui/material"
import { Container, styled } from "@mui/system"
import { useState } from "react"
import { NavBar } from "../index.tsx"

const StyledSection = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(2),
    overflowY: "auto",
}));

const StyledCardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
}))

const StyledInput = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(0.5),
    width: "60px",
    [theme.breakpoints.down("sm")]: {
        width: "50px",
    },
    [theme.breakpoints.down("xs")]: {
        width: "40px",
    },
}))

export const CardsInput = ({
    quantity,
    onConfirm,
}: {
    quantity: number;
    onConfirm: (cards: string[][]) => void;
}) => {

    const [cards, setCards] = useState<string[][]>(
        Array.from({ length: quantity }, () => Array(20).fill(""))
    )

    const handleInputChange = (cardIndex: number, inputIndex: number, value: string) => {
        if (value === "") {
            const updatedCards = [...cards];
            updatedCards[cardIndex][inputIndex] = value;
            setCards(updatedCards);
            return;
        }
        if (value.length > 2 || isNaN(Number(value))) return;
        const updatedCards = [...cards];
        const card = updatedCards[cardIndex];
        if (card.includes(value)) {
            alert(`O número ${value} já foi inserido na Cartela ${cardIndex + 1}.`);
            return;
        }
        card[inputIndex] = value;
        setCards(updatedCards);
    }


    const handleSubmit = () => {
        const valid = cards.every((card) =>
            card.every((number) => /^\d{2}$/.test(number) && parseInt(number) >= 1 && parseInt(number) <= 60)
        );
        if (valid) {
            onConfirm(cards);
        } else {
            alert("Preencha todas as dezenas com valores entre 01 e 60.");
        }
    }

    return (
        <>
            <StyledSection>
                <Container maxWidth="sm" style={{ textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>
                        Insira as dezenas para cada cartela
                    </Typography>
                    {cards.map((card, cardIndex) => (
                        <StyledCardContainer key={cardIndex}>
                            <Typography variant="h6" style={{ width: "100%", textAlign: "center" }}>
                                Cartela {cardIndex + 1}
                            </Typography>
                            <Grid container spacing={1} justifyContent="center">
                                {card.map((number, inputIndex) => (
                                    <Grid key={inputIndex} size={{ xs: 3, sm: 3, md: 3 }}>
                                        <StyledInput
                                            value={number}
                                            onChange={(e) =>
                                                handleInputChange(cardIndex, inputIndex, e.target.value)
                                            }
                                            inputProps={{ maxLength: 2 }}
                                            placeholder="00"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </StyledCardContainer>
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                        onClick={handleSubmit}
                    >
                        Confirmar
                    </Button>
                </Container>
            </StyledSection>
        </>

    )
}