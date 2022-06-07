import React, {useContext, useEffect, useState} from 'react';
import Card from "../shared/Card"
import {fetchPalettes} from "../../functions/paletteApiCalls";
import "./Home.css"
import Loading from "../loading/Loading";
import {LikeContext} from "../../context/LikeContext";

const Home = () => {

    const {dispatch, likeChecker} = useContext(LikeContext)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchPalettes();
            setData(result)
        }

        fetchApi()
    }, [])
    return (
        <div className="home">
            <div className="palettesContainer">
                {data == null && <Loading/>}
                {data !== null && data.length ? data.map(item => <Card key={item.id}
                                                                       palette={item}
                                                                       dispatch={dispatch}
                                                                       likeChecker={likeChecker}/>) :
                    <p>Nothing to show</p>}

            </div>
            <div className="rightSide">

            </div>
        </div>


    );
};

export default Home;