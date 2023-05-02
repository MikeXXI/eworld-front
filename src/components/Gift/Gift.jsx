import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid, Container } from "@mui/material";
import Giftlist from "./Giftlist";
// import jsonFile from "../../data/gift.json";
import logo from "../../assets/logoeworld.png";
import { Link } from "react-router-dom";
import "../../styles/style.css";

function Gift() {
  const [giftData, setGiftData] = useState([]);
  const [load, isLoad] = useState(true);

  //const data = jsonFile;
  //useEffect(function () {
  //    isLoad(false);
  //    setGiftData(data);
  //}, [])

  useEffect(function () {
    isLoad(true);
    fetch("https://eworld-api.osc-fr1.scalingo.io/api/gifts")
      .then((res) => res.json())
      .then((data) => {
        isLoad(false);
        setGiftData(data);
      });
  }, []);

  return (
    <Container>
      <div className="divHeader">
        <img src={logo} alt="logo e-world" />
        <Link to={`/gift/add`} className="bouttonadd">
          Ajouter un Cadeau
        </Link>
        <Link to={`/`} className="bouttonadd">
          Retour accueil
        </Link>
      </div>
      {load ? (
        <Grid>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <Grid>
          <Giftlist giftData={giftData} />
        </Grid>
      )}
    </Container>
  );
}
export default Gift;
