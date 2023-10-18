import moment from "moment";
import Image from "next/image";
import {useSignInModal} from './../../components/client/SignInModal';
import Conditional from "../Conditional";
import { TrashIcon } from "@heroicons/react/24/solid";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { showToastMessage, showToastMessageError, showToastMessageInfo, showToastMessageWarning } from "../Alerta";
import { removeCommunity } from "../../pages/api/community";
import { useEffect } from "react";

const CardCommunnity = ({comu, token}) => {
    const { SignInModal, setShowSignInModal } = useSignInModal();
    let haveInternet = false, haveCosto=false, haveObjet = false;
    const isEmptyObject = (obj) => {
        if(obj === null || (typeof obj === undefined)) {            
            return true;
        } else {
            if(obj.hasOwnProperty('internetplan')) {                
                return false;    
            } else {
                return true;
            }            
        }
    } 
    //(Object.keys(obj).length === 0)
    const isEmptyObject2 = (obj) => {
        if(obj === null || (typeof obj === undefined)) {            
            return true;
        } else {
            if(obj.hasOwnProperty('installationplan')) {                
                return false;    
            } else {
                return true;
            }            
        }
    } 
    const sinceClient = (createdAt) => {
        const now = moment(new Date());
        const since = moment(createdAt);
        const sinceok = now.diff(since, 'days');
        return sinceok;
    }
    const sourceImg = (sourceI) => {
        let sourceimg = "/";
        sourceimg = sourceimg.concat('', sourceI);
        sourceimg = sourceimg.concat('.', 'svg');
        return sourceimg;
    }
    const giveMe4Letters = (sourceI) => {
        return sourceI.substr(0, 4);        
    }
    // Valida plan de internet
    const validateInternetPlan = () => {
        if(isEmptyObject(comu)) {        
            haveInternet = false;    
        } else {
            if(typeof comu.internetplan !== undefined) {
                if(Object.keys(comu.internetplan).length > 0) {
                    haveInternet = true;            
                } else {
                    haveInternet = false;    
                }
            } else {
                haveInternet = false;    
            }
        }
    }
    const validateInstallationPlan = () => {
        if(isEmptyObject2(comu)) {        
            haveCosto = false;    
        } else {
            if(typeof comu.installationplan !== undefined) {                
                if(Object.keys(comu.installationplan).length > 0) {
                    haveCosto = true;            
                } else {
                    haveCosto = false;    
                
                }
            } else {
                haveCosto = false;    
            }
        }
    }
    if(typeof comu !== undefined) {
        haveObjet = true;
    }
    useEffect(() => { // Perform localStorage action  // const token = localStorage.getItem('token')    
        console.log(comu);
        if(typeof comu !== undefined) {
            validateInternetPlan();
            validateInstallationPlan();
        } else {
            haveInternet = false;    
            haveCosto = false;           
        }
    }, []
    );
    
    // console.log('Tiene internet', haveInternet);
    const deleteCommunity = async (id, comm)  => {    
        confirmAlert({
          title: 'Confirmacion para eliminar Comunidad?',
          message: `Desea eliminar la comunidad o colonia ${comm}`,
          buttons: [
            {
              label: 'Si',
              onClick: async () => {
                let res = await removeCommunity(id, token);
                if(res != undefined) {
                  if(res === 204) {
                    showToastMessage('Comunidad eliminado exitosamente!');
                    // comun = await getAllCommunitys(token);                  
                    } else {
                      showToastMessageError(res);
                    }
                  } else {
                    
                  }
                }
              },
              {
                label: 'No',
                onClick: () => {
                  showToastMessageInfo('Se ha cancelado la eliminacion!');            
                }
              }
          ],
          closeOnEscape: true,
          closeOnClickOutside: true,
          keyCodeForClose: [8, 32],
          willUnmount: () => {},      
          onClickOutside: () => {
            showToastMessageWarning('Se ha cerrado dialogo, volver a intentar!');
          },     
          onKeypressEscape: () => {
            showToastMessageWarning('Se ha cerrado dialogo, volver a intentar!');
          },
          overlayClassName: "overlay-custom-class-name"
        });      
    }
    
    return (
        <>
            <div className="max-w-md w-screen md:flex flex">   
                <Conditional showComp={haveObjet}>                  
                <div className="w-full  bg-white rounded shadow-md sm:items-center border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r flex flex-row justify-between leading-normal px-3 pt-2 pb-2">                
                    <div className="mb-4 pr-2">                        
                    
                        <div className="flex text-blue-500 font-extralight text-sm mb-1">{comu.community}                            
                        </div>                        
                        <div className="flex text-gray-800 font-medium text-xs mb-1">
                            <p className="text-gray-700 text-xs font-thin mr-2">{comu.municipality}, {comu.state}</p>                          
                        </div>
                        <div className="md:flex flex-shrink-0 items-center align-middle space-x-3">
                        <Conditional showComp={haveCosto}>            
                            {(typeof comu.installationplan !== "undefined") ?
                            comu.installationplan.map(plan => (
                                <div key={plan._id}>
                                    <div className="flex-shrink-0 w-10 h-10 space-x-1 m-1">
                                        <Image    
                                            className="rounded-full"                      
                                            src={plan.photo}
                                            alt={plan.name}
                                            width={48}
                                            height={48}                                    
                                            priority="true"                                    
                                        />
                                        <p className="text-xs font-thin">{plan.name.split(" ").reverse()[0]}</p>
                                    </div>
                                </div>
                            ))
                            : null
                        }
                        </Conditional>
                            <button className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800" onClick={() => setShowSignInModal(true)}>
                                Internet
                            </button>
                            <button type="button" onClick={() => deleteCommunity(comu._id, comu.community)}>
                                <TrashIcon className="h-4 w-4 text-red-300"/>
                            </button>
                        </div>
                    
                    </div>
                    <div className="flex mb-5 flex-col justify-center top-1">
                        <div className="flex">
                        <Conditional showComp={haveInternet}>       
                            {(typeof comu.internetplan !== "undefined") ?     
                            comu.internetplan.map(plan => (
                                <div key={plan._id}>
                                    <div className="flex-shrink-0 w-10 h-10 space-x-1 m-1">
                                        <Image    
                                            className="rounded-full"                      
                                            src={plan.photo}
                                            alt={plan.name}
                                            width={48}
                                            height={48}                                    
                                            priority="true"                                    
                                        />
                                        <p className="text-xs font-thin">{plan.name.split(" ").reverse()[1].toLowerCase()} {plan.name.split(" ").reverse()[0]}</p>
                                    </div>
                                </div>
                            ))
                        : null}
                        </Conditional>                        
                        </div>
                    </div>                 
                </div>
                </Conditional>
            </div>
        </>
    )
}
export default CardCommunnity;