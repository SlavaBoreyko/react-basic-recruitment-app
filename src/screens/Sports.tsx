import React, { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table, TableColumn } from "../components/Table/Table";
import { SportDetail } from "../components/SportDetail/SportDetail";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import { Grid, Typography } from "@mui/material";
import { SportForm } from "../components/Form/SportForm";


export interface FormState {
  name: string;
  location: string;
}

export const SportsScreen = () => {
  // For SportForm
  const [newSport, setNewSport] = useState<FormState>({
    name: '',
    location: ''
  });

  const handleChange =
    (prop: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
      // setindexIcon(undefined); Bug: don't update icon
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
  const handleSportId = (e: any, id: any)  => {
    setSportId(id)
  }
  useEffect(() => {
    (idSport) && getSportDetails(idSport)
  },[idSport])
  
  if (!sports) {
    return <NoResults />;
  }

  const alertSave = () => {
    if (newSport.name === '' || newSport.location === '') {
      alert(`Please fill the required fields Name and Location`);
    } else {
      setAddSportForm(false);
      alert(`Submitting sport: ${newSport.name} with location: ${newSport.location}.`);
      setNewSport({
        name: '',
        location: ''
      });
    }
  } 

  const cancelForm = () => {
    setNewSport({
      name: '',
      location: ''
    });
    setAddSportForm(false);
  }

  return (
    <Grid container 
      spacing={4} 
      sx={{ paddingTop: 18, paddingBottom: 4, paddingLeft: 4, paddingRight: 4 }}
    > 
      {/* TITLE & TEASER */}
      <Grid item md={12}>
        <Typography sx={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: 2}}>
          Sports
        </Typography>
        <Typography typography={'subtitle2'} color='text.secondary'>
          {sports.teaser}
        </Typography>
      </Grid> 

      {/* TABLE */}
      <Grid item md={6}>
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
          <Grid item md={6}>
            <SportDetail sportDetails={sportDetails} />
          </Grid>
        )
      }

      {/* FORM */}
      { 
        (addSportForm) && (!sportDetails) && 
        (<Grid item md={6}>
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
