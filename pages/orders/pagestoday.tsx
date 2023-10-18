import Alerta, {showToastMessage,showToastMessageError, showToastMessageInfo} from "@/components/Alerta"
import LayoutClientFull from "@/components/LayoutClientFull";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, CSSProperties } from "react";
import { getNotesbyClient, getOrder } from '../api/prospects';
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
const LayoutClient = dynamic(() => import("@/components/LayoutClient"), {
    ssr: false,
});
import Select from 'react-select'
import { Save } from "@/components/shared/icons";
import { CalendarDaysIcon, StarIcon, WifiIcon, CurrencyDollarIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// import {
//     ColourOption,
//     colourOptions,
//     FlavourOption,
//     GroupedOption,
//     groupedOptions,
//   } from '../data';
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };

  const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  type OrderProps = {
    _id:string;
    id:string;
    factura:boolean;
    totaL:number;
    iva:number;
    formapago:string;
    ordeninstatus:string,
    servicitipo:string;
    observaciones:string;
    mensualidades:string;
    user: {
        photo:string;
        name:string;        
    };
    client: {
        _id:string;
        id:string;
        name:string;
        lastname:string;
        client:string;
        email:string;
        source:string;
        categoria: {
            type:string
        };
        condition: {
            type:string
        }
        phoneNumber:[{
            phone:string;
            phoneformat:string;
        }];
        location:{
            community:string;
            municipy:string;
            state:string
        };
        installationplan:{
            paquete:string,
            costo:number
        };
        internetplan:{
            paquete:string,
            costo:number
        };
    }
};
const ORDERDETAIL = ({order, notexclient, token, idusr}) => {    
    const orderSel = order.data.data;    
    let total;
    const router = useRouter();    
    const currencyFormat = (val) => {
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }   
      
    useEffect(() => {
        // inputFocusRef.current.focus();
        console.log("use effect");
        console.log(router.query);
        
        console.log(order);

    },[])
   

    return (
        <Layout>
            <Alerta></Alerta>
            <LayoutClientFull cli={orderSel.client} notexclient={notexclient} isclients={true}>       
               <div className="w-screen justify-center py-1">
                    
                    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <form className="bg-white rounded shadow-md px-8 pt-4 pb-2 mb-2">                            
                            <h2 className="justify-center text-xl text-indigo-900 font-display font-light lg:text-left xl:text-2xl xl:text-normal">Instalaciones</h2>
                            <h2 className="justify-center text-sm text-gray-600 font-display font-thin lg:text-left xl:text-md xl:text-ligth">{orderSel.user.name}</h2>
                            <div className="flex-shrink-0">
                                <Image                
                                    className="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full"                
                                    src={orderSel.user.photo}
                                    alt={orderSel.user.name.split(' ')[0]}
                                    width={64}
                                    height={64}                        
                                />   
                            {/* <img
                                className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="client.name"
                            /> */}
                            </div>
                        </form>
                        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="xs:px-2 px-6 pt-6 pb-6 mb-1">
                                <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                    <CalendarDaysIcon className="h-5 w-5  text-amber-700"/>
                                    <p className="text-xs mt-1 text-gray-400 leading-4 md:leading-5">Creada: </p>
                                    <p className="text-xs mt-1 text-gray-500 font-medium leading-4 md:leading-5">{orderSel.createdAt} </p>                                                                                                
                                </div>
                                <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                    <StarIcon className="h-5 w-5  text-amber-700"/>
                                    <p className="text-xs mt-1 text-gray-400 leading-4 md:leading-5">Estatus: </p>
                                    <p className="text-xs mt-1 text-gray-500 font-medium leading-4 md:leading-5">{orderSel.ordeninstatus} </p>
                                </div>
                                <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                    <WifiIcon className="h-5 w-5  text-amber-700"/>
                                    <p className="text-xs mt-1 text-gray-400 leading-4 md:leading-5">Tipo servicio: </p>
                                    <p className="text-xs mt-1 text-gray-500 font-medium leading-4 md:leading-5">{orderSel.serviciotipo.toUpperCase()} </p>
                                </div>
                                <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                    <CreditCardIcon className="h-5 w-5  text-amber-700"/>
                                    <p className="text-xs mt-1 text-gray-400 leading-4 md:leading-5">Forma de pago: </p>
                                    <p className="text-xs mt-1 text-gray-500 font-medium leading-4 md:leading-5">{orderSel.formapago.toUpperCase()} </p>
                                </div>
                                <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                    <CurrencyDollarIcon className="h-5 w-5  text-amber-700"/>
                                    <p className="text-xs mt-1 text-gray-400 leading-4 md:leading-5">Total: </p>
                                    <p className="text-xs mt-1 text-gray-500 font-medium leading-4 md:leading-5">{currencyFormat(orderSel.total)} </p>
                                </div>
                                
                            </div>
                        
                        </div>
                            
                    </div>
                </div>
            </LayoutClientFull>
        </Layout>
    )
}

export async function getServerSideProps({req, res, query:{id}}) {
    let token: any, idusr:any;
    token = getCookie('token', {req, res});
    idusr = getCookie('id', {req, res});
    let order, notexclient;
    try {
        if(token != '') {
            order = await getOrder(id, token);
            notexclient = await getNotesbyClient(order.data.data.client.id, token);      
        } else {
            showToastMessageInfo('Favor de iniciar sesion!');
        }
    } catch (e) {    /*** Si algo salio mal con la solicitud, 404 page */
        return {
            notFound: true,
        };
    }
    if (!order) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            order, notexclient, token, idusr
        },
    };
}

export default ORDERDETAIL;