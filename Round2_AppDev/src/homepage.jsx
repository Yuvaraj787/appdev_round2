import { Stack } from '@mui/system';
import React,{useState,useEffect} from 'react'
import Navbar from './navbar';
import { Box, Button, TextField, Typography } from '@mui/material';

function homepage() {
    const [data,setData] = useState({articles:[{title:"no news found"}]});
    const [location,setLoation] = useState("India");
    useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a7f3193b436048c5800403eb2f17c0dc').then(res => res.json()).then((dat) => {
        setData(dat);
        console.log(dat)
      }).catch(e=>console.log(e.message));
    },[]);
  return (
    <div>
        <Navbar />
        <Typography variant="h3">Headlines</Typography>
        <Typography variant="h4">Country : {location}</Typography>
        <Stack spacing={2} styles={{padding:"7%"}}>
      {data.articles.map((info,ind)=>{
        return (<Box><Typography>{ind+1} . <a href={info.url} styles={{marginLeft:"10px"}}>{info.title}</a></Typography></Box>)
       })}
       </Stack>
    </div>
  )
}

export default homepage