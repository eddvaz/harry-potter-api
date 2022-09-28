import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_Url } from "../../Services/API";
import * as S from "../Styles/CardStyle";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        axios.get(base_Url)
        .then(res => {
            console.log(res.data)
            setCharacters(res.data)
        })
        .catch((err) => {
            console.log("Not Found")
        })
    }

    useEffect(() => {
        getCharacters()
    },[])

    return(
        <S.WrapCards>
            {characters.map((item) => (
                <S.CardContent>
                    <S.ImgCharacters src={item.image} alt={item.name} />
                </S.CardContent>           
           ))}
        </S.WrapCards>
    )
}

export default Characters;