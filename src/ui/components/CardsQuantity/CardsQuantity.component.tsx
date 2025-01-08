import { useState } from "react"
import { Button, styled, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"

const StyledSection = styled("section")(({ theme }) => ({
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
}))

export const CardsQuantity = ({ onConfirm }: { onConfirm: (quantity: number) => void }) => {

    const [quantity, setQuantity] = useState<null | number>(null)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        setQuantity(!isNaN(value) ? value : null)
    }
    const handleSubmit = () => {
        if (quantity) onConfirm(quantity)
    }
    return (
        <>
            <StyledSection>
                <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Typography variant="h4" gutterBottom>
                        Conferidor de Bingo
                    </Typography>
                    <TextField
                        label="Quantas cartelas?"
                        variant="outlined"
                        onChange={handleChange}
                        type="number"
                        inputProps={{ min: 1 }}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        aria-label="Confirmar quantidade de cartelas"
                        onClick={handleSubmit}
                        disabled={!quantity}
                    >
                        Confirmar
                    </Button>
                </Container>
            </StyledSection>
        </>
    )
}