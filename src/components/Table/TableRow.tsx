import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import { TableColumn } from "./Table";
import { TableCell, TableRow as MuiTableRow, useTheme } from "@mui/material";
import { ModelWithId } from "../../types/table.types";
import { IconButton } from "@mui/material";

type TableRowProps<Model> = {
  item: Model;
  columns: TableColumn<Model>[];
  handleSportId: (e: any, id:any) => void;
  setindexIcon: Dispatch<SetStateAction<string | number | undefined>>;
  indexIcon: string | number | undefined;
};

export const TableRow  = <Model extends ModelWithId>({
  item,
  columns,
  handleSportId,
  setindexIcon,
  indexIcon
}: TableRowProps<Model>): JSX.Element => {
  const theme = useTheme();

  const [iconActive, seticonActive] = useState<"inherit" | "primary">("inherit");

  useEffect(() => {
    ((indexIcon) && (item['id'] !== indexIcon)) && seticonActive("inherit")
  }, [indexIcon, item])

  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {

    if (React.isValidElement(column.value)) {
      return ( 
        <IconButton color={iconActive}
          onClick={(e) => {
            handleSportId(e, item['id']);
            seticonActive("primary")
            setindexIcon(item['id'])
        }}>     
          {column.value} 
        </IconButton>  
      )
    }

    return item[column.value] as unknown as string;
  };

  return (
   
    <MuiTableRow >
      {columns.map((column) => (
        <TableCell key={`${item.id}-${column.label}`} sx={{ textAlign: column.textAlign || "left", padding: theme.spacing(2,4)}}>
          {getItemContent(column)}
        </TableCell>
      ))}
    </MuiTableRow>
  );
};
