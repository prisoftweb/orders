import Image from "next/image";

const ItemPlanInstallation = ({plan, direction, message} : {plan:any, direction:string, message:string}) => {
    const currencyFormat = (val) => {
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    
    return (
        <>
            <div className="flex items-center">            
                <Image 
                    className="block  sm:flex-shrink-0 rounded-full"      
                    src="/img/planes/paquete-instala.jpg"
                    alt='Sin imagen'
                    width={64}
                    height={64}                        
                />
                <div className={`md:flex flex-${direction} justify-around flex-auto sm:text-left mt-4 sm:mt-0 sm:ml-4 space-x-5 space-y-0`}>
                    <div>
                        <span className="text-sm text-gray-500 dark:text-green-100">{message}</span>                            
                    </div>
                    <div>
                        <h5 className="text-base font-normal text-gray-900 dark:text-white">{plan.nombre}</h5>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-green-100">Precio sin descuento</span>                            
                    <div>
                        <span className="text-sm text-red-500 dark:text-green-100">{currencyFormat(plan.costo)}</span>
                    </div>
                
                </div>
            </div>
        </>
    )
}
export default ItemPlanInstallation;