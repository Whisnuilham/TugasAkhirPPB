import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';

// Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DetailPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const id = location.state.id;
            const response = await axios.get(
                "https://my-json-server.typicode.com/Whisnuilham/TugasAkhirPPB/champion/" + id,{
                params: { },
                headers: {
                
                },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data);        
                setisLoaded(true);
                setIsLoading(false);
            }
        } catch (err) {
        console.log(err);
        setIsLoading(false);
        }
        };
    if (!isLoaded) {
    fetchData(query);
    }
    }, [isLoaded, query]);
        const onSearch = (e) => {
        if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };

    return (
        <main>
           
            {!data || isLoading ? ( 
            <p>Loading...</p> 
            ) : (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.nama}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.jenis}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.Juara}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.Bahan}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.Gilingan}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.Rasio}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {data.Suhu}
                        </Typography><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div dangerouslySetInnerHTML={{__html: data.Resep}}>

                        </div>
                        </Typography>
                    </CardContent>
                </Card>
            )
        }
        </main>
    );
}
