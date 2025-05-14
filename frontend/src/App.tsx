import { AlunoForm } from "@/components/AlunoForm";
import { AlunoList } from "@/components/AlunoList";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Gerenciador de Alunos
        </Typography>
        <Box display="flex" flexDirection="column">
          <AlunoForm />
          <AlunoList />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
