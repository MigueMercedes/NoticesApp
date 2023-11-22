import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

const CATEGORIAS = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
];

const Formulario = () => {
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label='Categoría'>
          {CATEGORIAS.map(categoria => (
            <MenuItem key={categoria.value} defaultValue={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

        <Box marginTop={2}>
          <Button fullWidth variant='contained'>
            Buscar Noticias
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Formulario;
