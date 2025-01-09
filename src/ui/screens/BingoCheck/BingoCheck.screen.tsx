import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { NavBar } from "../../components";

export const BingoCheck = () => {
    const location = useLocation();
    const cards: number[][] = location.state.cards || [];

    const [checkedNumbers, setCheckedNumbers] = useState<Set<number>>(new Set());

    const handleCheckNumber = (number: number) => {
        setCheckedNumbers((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(number)) {
                newSet.delete(number);
            } else {
                newSet.add(number);
            }
            return newSet;
        });
    };

    const handleClearAll = () => {
        setCheckedNumbers(new Set());
    };

    return (
        <>
            <NavBar/>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4" gutterBottom>
                    Conferência de Cartelas
                </Typography>
                {cards.map((card, cardIndex) => (
                    <div key={cardIndex} style={{ marginBottom: '20px' }}>
                        <Typography variant="h6">Cartela {cardIndex + 1}</Typography>
                        <Grid container spacing={1} justifyContent="center">
                            {card.map((number) => (
                                <Grid key={number} size={{ xs: 2.4, sm: 2.4, md: 2.4 }}>
                                    <Button
                                        variant="outlined"
                                        color={checkedNumbers.has(number) ? "error" : "primary"}
                                        onClick={() => handleCheckNumber(number)}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            fontSize: "1.2rem",
                                            backgroundColor: checkedNumbers.has(number) ? "#f44336" : "transparent",
                                            color: checkedNumbers.has(number) ? "white" : "initial",
                                        }}
                                    >
                                        {number}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClearAll}
                    style={{ marginTop: '20px' }}
                >
                    Limpar Tudo
                </Button>
            </div>
        </>
    )
}