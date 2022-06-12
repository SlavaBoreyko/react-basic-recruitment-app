import { ButtonProps } from "@mui/material";
import { CSSProperties, Dispatch, ReactElement, SetStateAction } from "react";
import { SportType } from "./sports.types";

export type ModelWithId = {
  id: string | number;
};

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  textAlign?: CSSProperties["textAlign"];
};

export type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[]; 
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">;
  // For Action & Sport Detail 
  handleSportId: (id: SportType['id'] | undefined) => void;
  setindexIcon: Dispatch<SetStateAction<string | number | undefined>>;
  indexIcon: string | number | undefined;
  // For form
  setAddSportForm: Dispatch<SetStateAction<Boolean>>;
};