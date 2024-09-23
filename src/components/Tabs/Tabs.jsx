import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function CustomTabs({ item1, item2 }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs">
        <Tab label="Create" value="1" />
        <Tab label="Upload CSV" value="2" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === '1' && item1}
        {value === '2' && item2}
      </Box>
    </Box>
  );
}
