import { MapIcon, HomeModernIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect } from "react";

const CardClientAddress = ({location, selectClient} : {location:any, selectClient:boolean}) => {
    const {address, homeref, addressref, coordinates } = location;
    useEffect(() => { 

    }, []);  

    const sourceImg = (sourceI) => {
        let sourceimg = "/";
        sourceimg = sourceimg.concat('', sourceI);
        sourceimg = sourceimg.concat('.', 'svg');
        return sourceimg;
    }
    return (
        <>            
            <div className="w-screen sm:items-center py-3">
                <div className="flex space-x-3 py-1">
                    <MapIcon className="h-10 w-10  text-amber-700"/>
                    <div className=" space-x-3 py-1">
                        <p className="text-sm text-gray-600 font-thin leading-snug md:leading-5">{address}</p>                        
                        <p className="text-sm text-gray-600 font-thin leading-snug md:leading-5">{homeref}</p>
                        <p className="text-sm text-gray-600 font-thin leading-snug md:leading-5">{addressref}</p>
                        <p className="text-sm text-gray-600 font-thin leading-snug md:leading-5">{coordinates[0]}, {coordinates[1]}</p>                        
                    </div>
                </div>                                   
            </div>                    
        </>
    )
}

export default CardClientAddress;