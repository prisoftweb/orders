import Image from "next/image";

const TablePlanInternetInstallation = ({plan, planins, direction, message} : {plan:any, planins:any, direction:string, message:string}) => {
    const currencyFormat = (val) => {
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    
    return (
        <>
        <div className="flex">            
            <table className="w-full border-collapse table-striped  leading-normal">
                <thead className="py-5 mt-2">
                    <tr >
                        <td className="w-1/5 text-sm font-medium bg-stone-200 py-3 border-b-2 px-2">Imagen</td>
                        <td className="w-1/2 text-sm font-medium bg-stone-200 ">Descripcion</td>
                        <td className="w-1/5 text-sm font-medium bg-stone-200 text-left">Observacion</td>
                        <td className="text-sm font-medium text-gray-800 text-right bg-stone-200 py-3 border-b-2 px-2">Costo</td>
                  </tr>
                </thead>
                <tbody>                 
                  <tr className="border border-gray-200">
                    <td>
                      <div className="px-2">
                        <Image 
                            className="text-sm font-medium block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full"      
                            src={plan.photo}
                            alt='Sin imagen'
                            width={48}
                            height={48}                        
                        />                        
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{plan.name}</p>
                        <p className="text-sm font-thin text-gray-600">Paquete de renta</p>
                      </div>
                    </td>
                    <td className="text-sm font-thin text-gray-600 text-left">{plan.megas} de bajada</td>
                    <td className="text-sm font-medium text-gray-800 text-right px-2">{currencyFormat(plan.price)}</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td>
                      <div className="px-2">
                        <Image 
                            className="block  sm:flex-shrink-0 rounded-full"      
                            src={planins.photo}
                            alt='Sin imagen'
                            width={48}
                            height={48}                        
                        />                        
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{planins.name}</p>
                        <p className="text-sm text-gray-600">{message}</p>
                      </div>
                    </td>
                    <td className="text-sm font-thin text-gray-600 text-left">Precio sin descuento</td>
                    <td className="text-sm font-medium text-gray-800 text-right px-2">{currencyFormat(planins.price)}</td>
                  </tr>
                </tbody>
            </table>    
        </div>
        </>
    )
}
export default TablePlanInternetInstallation;