import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


 const Student =({name,batch,year,id})=>{

    return(
       <>
        <Card sx={{ width: "310px", marginBottom: "20px" }}>
           <CardHeader
             avatar={
                <Avatar aria-label="number">
                   {id} 
                </Avatar>
              }
              title={
                <Typography variant="h5"> {name} </Typography>
              }
           />

        <CardContent>
            <Typography paragraph> {batch} </Typography>
            <Typography paragraph>  {year}   </Typography>
        </CardContent>
         

        </Card>

       
       </>

    )
    }

    export default Student