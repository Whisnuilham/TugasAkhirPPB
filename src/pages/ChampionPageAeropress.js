import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

// Components
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function ChampionPageAeropress() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://my-json-server.typicode.com/Whisnuilham/TugasAkhirPPB/champion?jenis=Aeropress",{
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
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/DetailPage', {
            state: {
                id: id
            }
        });
    };
    return (
        <main>
           
            {!data || isLoading ? ( 
            <p>Loading...</p> 
            ) : (  <div className="card-container">
            {data.map((item, index) => {
                return (
                <Card data={item} key={index} onClick={()=>handleClick(item.id)} />
                );
            })}
            </div>)
        }
        </main>
    );
}
