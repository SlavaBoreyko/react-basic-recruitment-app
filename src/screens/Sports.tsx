import React, { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { SportFormType } from "../types/form.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table } from "../components/Table/Table";
import { TableColumn } from "../types/table.types";
import { SportDetail } from "../components/SportDetail/SportDetail";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports, addSport} from "../service/sports.service";
import { Grid, Typography, useTheme } from "@mui/material";
import { SportForm } from "../components/Form/SportForm";

export const SportsScreen = () => {
  const theme = useTheme();
  // For SportForm
  const [newSport, setNewSport] = useState<SportFormType>({
    sport: '',
    name: '',
    location: ''
  });

  const handleChange =
    (prop: keyof SportFormType) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewSport({ ...newSport, [prop]: event.target.value });
  };

  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);
  const [idSport, setSportId] = useState<SportType['id'] | undefined>(undefined);
  const [indexIcon, setindexIcon] = useState<string | number | undefined>(undefined);
  const [addSportForm, setAddSportForm] = useState<Boolean>(false);

  // Auto switch (close Form / close Card)
  useEffect(() => {
    if (addSportForm) {
      setSportDetails(undefined); 
      // setindexIcon(undefined); //Bug: don't update icon
    }
  },[addSportForm])

  useEffect(() => {
    if (sportDetails) {setAddSportForm(false)}
  },[sportDetails])

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

  useEffect(() => {
    // TODO: get data from sports.service
    const fetchData = async() => {
      const data = await getSports();
      setSports(data);
    }
    fetchData();
  }, []);

  const getSportDetails = async(id: SportType['id']) => {
    // TODO: get sport details
    const data = await getSportById(id);
    setSportDetails(data);
  }

  // Switch SportsDetails card
  const handleSportId = (id: SportType['id'] | undefined)  => {
    setSportId(id)
  }
  useEffect(() => {
    (idSport) && getSportDetails(idSport)
  },[idSport])
  
  if (!sports) {
    return <NoResults />;
  }

  // Form button Save Handler 
  const alertSave = async() => {
    if (newSport.name === '' || newSport.location === '') {
      alert(`Please fill the required fields Name and Location`);
    } else {
      alert(`Submitting sport: ${newSport.sport} with location: ${newSport.location}.`);

      // Save to Table 
      await addSport({
        id: sports.items.length + 1, 
        name: newSport.sport,
        location: newSport.location,
        shortDescription: newSport.name, // No field in the Form
        description: "", // No field in the Form
      })
      // Clean Form
      setNewSport({
        sport: '',
        name: '',
        location: ''
      });
      setAddSportForm(false);

      // Open SportDetail for new user record
      setSportId(sports.items.length)
      setindexIcon(sports.items.length);
    }
  } 

  // Form button Cancel Handler 
  const cancelForm = () => {
    setNewSport({
      sport: '',
      name: '',
      location: ''
    });
    setAddSportForm(false);
  }

  return (
    <Grid container 
      columns={{ xs: 12, sm: 12, md: 12 }}
      spacing={4} 
      sx={{ padding: theme.spacing(18,4,4,4) }} 
    > 
      {/* TITLE & TEASER */}
      <Grid item md={12} >
        <Typography sx={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: 2}} color='text.primary'>
          Sports
        </Typography>
        <Typography typography={'subtitle2'} color='text.secondary'>
          {sports.teaser}
        </Typography>
      </Grid> 

      {/* TABLE */}
      <Grid item xs={12} sm={12} md={6} sx={{ minWidth: '33rem'}}>
        <Table 
            columns={columns}
            items={sports.items} 
            title={'Sports'}
            handleSportId={handleSportId}
            setindexIcon={setindexIcon}
            indexIcon={indexIcon}
            setAddSportForm={setAddSportForm}
        />
      </Grid>

      {/* CARD */}
      {
        (sportDetails) && (
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: '33rem'}}>
            <SportDetail sportDetails={sportDetails} />
          </Grid>
        )
      }

      {/* FORM */}
      { 
        (addSportForm) && (!sportDetails) && 
        (<Grid item xs={12} sm={12} md={6} sx={{ minWidth: '33rem'}}>
          <SportForm 
            newSport={newSport}
            handleChange={handleChange}
            alertSave={alertSave}
            cancelForm={cancelForm}
          />
        </Grid>
        )
      }
    </Grid>
  );
};
