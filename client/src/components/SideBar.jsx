import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableRenderChar from './TableRenderChar'
import TableRenderFilms from './TableRenderFilms'
import TableRenderPlanets from './TableRenderPlanets'
import FormNewChar from './FormNewChar/FormNewChar';
import FormNewFilm from './FormNewFilm/FormNewFilm';
import FormNewPlanet from './FormNewPlanet/FormNewPlanet'
import './SideBar.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({char, films, planets}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' , backgroundColor: '#242424', width:170}}
      >
        <Tab label="Characters" {...a11yProps(0)} sx={{color: 'white'}} />
        <Tab label="Films" {...a11yProps(1)} sx={{color: 'white'}}/>
        <Tab label="Planets" {...a11yProps(2)} sx={{color: 'white'}}/>
        <Tab label="New" {...a11yProps(3)} sx={{color: 'white'}}/>
      </Tabs>

      <TabPanel value={value} index={0}>
         <TableRenderChar data={char}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableRenderFilms data={films}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableRenderPlanets data={planets}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='form-container'>
        <FormNewChar />
        <FormNewFilm />
        <FormNewPlanet />
      </div>
      </TabPanel>
    </Box>
  );
}