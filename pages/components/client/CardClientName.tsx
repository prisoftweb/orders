import Image from "next/image";
import { useEffect } from "react";

const CardClientName = ({cli, selectClient} : {cli:any, selectClient:boolean}) => {

    const {client, name, lastname, email, source, _id} = cli;
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
            <div className="sm:flex py-6">                    
                {/* <Image                    
                    className="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full"      
                    src="/winner.png"
                    alt={source}
                    width={64}
                    height={64}                        
                />                         */}
                <div className="mt-4 sm:mt-0 sm:ml-0  sm:text-left items-center">
                    <p className="text-sm font-normal mt-1 text-gray-700 leading-4 md:leading-5">{name.toUpperCase()} {lastname.toUpperCase()}</p>
                    <a href={`mailto:${email}`}>
                        <p className="text-sm font-thin mt-1 text-gray-600 leading-4 md:leading-5">{email}</p>
                    </a>
                    <div className="flex mt-1 justify-start align-middle  ">                            
                        <Image                                                      
                            src={sourceImg(source)}
                            alt={source}
                            width={24}
                            height={24}                                    
                            priority="true"                                    
                        />
                        <p className="ml-2 text-xs text-center inline-block align-text-middle font-thin leading-tight text-gray-400">{source}</p>
                        
                    </div>
                </div>
            </div>
          
        </>
    )

}

export default CardClientName;