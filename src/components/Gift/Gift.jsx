import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Giftlist from './Giftlist';

function Gift() {
  const [giftData, setGiftData] = useState([]);
  const [load, isLoad] = useState(true);
  useEffect(function () {
    isLoad(true)
    fetch("http://127.0.0.1:8000/api/gifts")
      .then(res => res.json())
      .then(data => {
        isLoad(false)
        setGiftData(data)
      }
      )
  }, [])
  return (
    <Container>
      {load ?
        <Grid>
          <Box>
            En cour de chargement ...
          </Box>
        </Grid> :
        <Grid>
          <Giftlist giftData={giftData} />
        </Grid>
      }
    </Container>
  );
}
export default Gift;