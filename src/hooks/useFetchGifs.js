import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading,setIsLoadind] = useState(true);
     const getImages = async()=>{
        
         const newImages=await getGifs( category );
         setImages(newImages);
         setIsLoadind(false);
    }

    useEffect(  () => {
         getImages();
    },[]);

    return {
        images,
        isLoading
    }
}
