import { useAlunosStore } from "@/store/useAlunosStore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export function AlunoList() {
  const { alunos, fetchAlunos, setSelectedAluno, removeAluno } =
    useAlunosStore();

  const [openDialog, setOpenDialog] = useState(false);
  const [alunoParaExcluir, setAlunoParaExcluir] = useState<number | null>(null);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  const confirmarExclusao = (id: number) => {
    setAlunoParaExcluir(id);
    setOpenDialog(true);
  };

  const handleDelete = async () => {
    if (alunoParaExcluir !== null) {
      await removeAluno(alunoParaExcluir);
      setOpenDialog(false);
      setAlunoParaExcluir(null);
    }
  };

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Lista de Alunos
        </Typography>
        <List>
          {alunos.map((aluno) => (
            <ListItem
              key={aluno.id}
              divider
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton
                    edge="end"
                    onClick={() => setSelectedAluno(aluno)}
                  >
                    <EditIcon color="warning" />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => confirmarExclusao(aluno.id)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText primary={aluno.nome} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este aluno?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button color="error" onClick={handleDelete}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
