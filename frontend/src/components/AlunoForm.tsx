import { useAlunosStore } from "@/store/useAlunosStore";
import { Alert, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  nome: string;
};

export function AlunoForm() {
  const { control, handleSubmit, reset, setValue } = useForm<FormData>();
  const { addAluno, selectedAluno, editAluno, setSelectedAluno } =
    useAlunosStore();
  const [erro, setErro] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      if (selectedAluno) {
        await editAluno(selectedAluno.id, data.nome);
      } else {
        await addAluno(data.nome);
      }
      reset();
      setErro("");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setErro(error.response.data.error);
      } else {
        setErro("Erro desconhecido ao salvar aluno.");
      }
    }
  };

  useEffect(() => {
    if (selectedAluno) {
      setValue("nome", selectedAluno.nome);
    } else {
      reset();
    }
  }, [selectedAluno, setValue, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {erro && <Alert severity="error">{erro}</Alert>}

        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome do aluno"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: !selectedAluno ? "100%" : "50%" }}
          >
            {selectedAluno ? "Salvar" : "Adicionar"}
          </Button>
          {selectedAluno && (
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: "50%" }}
              onClick={() => setSelectedAluno(null)}
            >
              Cancelar
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
}
