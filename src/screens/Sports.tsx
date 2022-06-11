import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table, TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSports } from "../service/sports.service";
import { Grid, Typography } from "@mui/material";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType['id']) => {
    // TODO: get sport details
  }

  useEffect(() => {
    // TODO: get data from sports.service
    const fetchData = async() => {
      const data = await getSports();
      setSports(data);
    }
    fetchData();
  }, []);

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return (
    <>
      <Grid container 
        sx={{ paddingTop: 18, paddingBottom: 4, paddingLeft: 4, paddingRight: 4 }}
      >
      <Grid item md={12}>

        <Typography sx={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: 2}}>
          Sports
        </Typography>
        <Typography typography={'subtitle2'} color='text.secondary' sx={{ marginBottom: 4}}>
          {sports.teaser}
        </Typography>

        <Table 
            columns={columns}
            items={sports.items} 
            title={'Sports'}
        />

      </Grid>
      </Grid>
    </>
  );
};
