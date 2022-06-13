import {
  Box,
  Button,
  ButtonProps,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
  useTheme
} from "@mui/material";
import { FC } from "react";
import { TableRow } from "./TableRow";
import { TableProps } from "../../types/table.types";


export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
  handleSportId,
  setindexIcon,
  indexIcon,
  setAddSportForm,
  addSportForm
}) => {
  const theme = useTheme();

  return (
    <Box>
      {/*TODO: style to match designs*/}
      <Paper sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 4),
        bgcolor: 'secondary.main', 
        color: 'secondary.contrastText', 
        height: '3rem',

      }}>
        <Typography>{title}</Typography>

        <Button variant={"contained"} sx={{ padding: theme.spacing(0.25, 1.5)  }} 
                onClick={() => setAddSportForm(true)}>
          Add sport
        </Button>
        {/* {ButtonProps !== undefined && (
          <Button variant={"contained"} {...ButtonProps} />
        )} */}
      </Paper>
      
      <TableContainer sx={{ backgroundColor: 'background.paper'}}>
        <MuiTable >
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  sx={{ textAlign: column.textAlign || "left",
                        padding: theme.spacing(2,4)
                 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} item={item} columns={columns} handleSportId={handleSportId}
                setindexIcon={setindexIcon} indexIcon={indexIcon} addSportForm={addSportForm}
              />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
