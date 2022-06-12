import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { DashboardCard } from "../components/Card/DashboardCard";
import { getDashboards } from "../service/dashboard.service";
import { useTheme } from "@mui/material";


import { Grid } from "@mui/material";

export const DashboardScreen = () => {
  const theme = useTheme();
  const [items, setItems] = useState<DashboardType[]>([]);

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
        return navigationRoutes.competitions.path; 
      case DashboardItem.SCHEDULING:
        return navigationRoutes.scheduling.path;
      case DashboardItem.ORGANISATIONS:
        return navigationRoutes.organisations.path; 
      case DashboardItem.USERS:
        return navigationRoutes.users.path;
    }
  };

  useEffect(() => {
    // TODO: get data from dashboard.service
    const fetchData = async() => {
      const data = await getDashboards();
      setItems(data)
    }
    fetchData();
  }, []);


  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <Grid container 
      spacing={4} 
      sx={{ padding: theme.spacing(18,4,4,4)}}
    >
    {
      items.map((item) => 
        <Grid key={item.id} item xs={12} md={6}> 
          <DashboardCard 
            title={item.title} 
            text={item.text}
            linkTo={getLinkTo(item.id)} 
          />
        </Grid>
      )
    }
    </Grid>
  );
};
