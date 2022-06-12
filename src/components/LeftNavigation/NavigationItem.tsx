import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FC, ReactElement } from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
  selected: boolean;
};

export const NavigationItem: FC<NavigationItemProp> = ({ 
  to, icon, label, selected
}) => {
  return (
    <Link to={to} style={{textDecoration: 'none' }} >
      <ListItemButton selected={selected} sx={{ paddingLeft: 5 }}>
        <ListItemIcon sx={{ minWidth: 'rem'}}>{icon}</ListItemIcon>
        <ListItemText sx={{ color: 'text.primary', fontWeight: 700}}>{label}</ListItemText>
      </ListItemButton>
    </Link>
  );
};
