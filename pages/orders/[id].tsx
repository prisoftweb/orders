
import { useRouter } from "next/router";
import { useState, useRef, useEffect, CSSProperties } from "react";
import { getNotesbyClient, getOrder } from './../api/prospects';
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { CalendarDaysIcon, StarIcon, WifiIcon, CurrencyDollarIcon, CreditCardIcon, ArrowSmallLeftIcon, PhoneIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CardClientName from "./../components/client/CardClientName";
import CardClientAddress from "./../components/client/CardClientAddress";
import ItemPlanInternet from "./../components/plan/ItemPlanInternet";
import ItemPlanInstallation from "./../components/plan/itemPlanInstallation";
import TablePlanInternetInstallation from "./../components/plan/TablePlanInternetInstallation";
import Conditional from "./../components/Conditional";
import Save from "../components/shared/icons/save";
import Script from "next/script";
import PrintPDF from '../components/PrintPDF'

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
    idorden:number;
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
            costo:number,
            nombre:string,
            megas:string,
            imagen:string
        };
    }
};
const ORDERINSTALLATIONDETAIL = ({order, notexclient, token, idusr}) => {    
    const orderSel = order.data.data;    
    let total;
    const router = useRouter();    
    const currencyFormat = (val) => {
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }   
    const getDateFormat = (date:any) => {
        const dateNow = new Date(date);
        const dateFormat = dateNow.getFullYear() + '-' + parseInt(dateNow.getMonth() + 1) + '-' + dateNow.getDate();
        return dateFormat;
    }
    useEffect(() => {
        // inputFocusRef.current.focus();
        console.log("use effect");
        console.log(router.query);
        
        console.log(order);

    },[])
   

    const PDFDownloadLink = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink), {
        ssr: false,
        loading: () => <p>Loading...</p>,
      });

    console.log(order);
    console.log('Clienttttt/////////////////');
    console.log(order.data.data.client);
    console.log('useeerrrrr////////////////////');
    console.log(order.data.data.user);
    return (
        <>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></Script>            
            <div className="flex">                
                <div className="w-full md:flex bg-white rounded shadow-md sm:items-center px-6 pt-3 pb-3 mt-1">
                {/* <div className="w-full md:flex  bg-white rounded shadow-md  px-6 pt-4 pb-8">                                                     */}
                    <div className="w-full mt-4 sm:items-center ">
                        <Image src={'/teltan-logo-2022.svg'} alt="logo" width={180} height={70} />
                        <div className=" text-gray-400 text-sm">
                            <p className="text-sm text-gray-500 font-thin leading-4 md:leading-5">Teltan Telecomunicaciones S de RL de CV.</p>
                            <p className="text-sm text-gray-500 font-thin leading-4 md:leading-5">Josefa Negrete #590</p>
                            <p className="text-sm text-gray-500 font-thin leading-4 md:leading-5">Graciano S&aacute;nchez 2a secc.</p>
                            <p className="text-sm text-gray-500 font-thin leading-4 md:leading-5">San Luis Potosi, S.L.P. CP 78360</p>
                        </div>
                        <CardClientName cli={orderSel.client} selectClient = {false}/>
                        {/* <div className="flex mt-5">
                            <Image src={'/landpage.svg'} alt="profile" width={70} height={70}/>
                            <div>
                            <p className="text-gray-800 text-sm">Prisco Palacios</p>
                            <p className="text-gray-400 text-sm">prisco@hotmail.com</p>
                            <p className="text-gray-400 text-sm">444 429 7227</p>
                            <p className="text-gray-400 text-sm">76854</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-1/2 mt-5 py-1 " >
                        {/* <PacksNav /> */}
                        <form className="bg-white px-8 pt-4 pb-2 mb-2">                            
                        {/* <div className="flex space-x-2 px-2 py-2 self-center justify-center sm:justify-center shadow-md"> */}
                        <a className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800" >
                            <Save />
                            {/* <p>Descargar en PDF</p> */}
                            <PDFDownloadLink document={<PrintPDF order={order} />} fileName="Orders.pdf">
                                {/* <button >Imprimir pdf</button> */}
                                {({ loading }) => (loading ? "Loading document..." : "Descargar en PDF!")}
                            </PDFDownloadLink>
                        </a>
                    
                            <h2 className="justify-center text-sm  text-gray-600  font-thin lg:text-left xl:text-md xl:text-ligth">{orderSel.user.name.split(' ')[0]}</h2>
                            <div className="flex-shrink-0">
                                <Image                
                                    className="block  sm:flex-shrink-0 rounded-full"                
                                    src={orderSel.user.photo}
                                    alt={orderSel.user.name.split(' ')[0]}
                                    width={64}
                                    height={64}                        
                                />                               
                            </div>
                        </form>                    
                        <div className="flex flex-wrap w-60 border border-green-500">
                            <div className="w-full flex">
                                <div className="w-2/5 pt-2 text-center text-sm bg-green-600 text-white">{orderSel.ordeninstatus}</div>
                                <div className="w-3/5 pt-2 text-center text-md font-semibold bg-stone-200">{orderSel.idorden}</div>
                            </div>
                            <div className="w-full text-center text-2xl pt-2">
                                {currencyFormat(orderSel.total)}
                            </div>
                        </div> 
                        <div className="text-gray-400 text-sm mt-3 justify-end">

                            <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                <CalendarIcon className="h-5 w-5  text-amber-700"/>
                                <p className="text-sm font-thin mt-1 text-gray-600 leading-4 md:leading-5">Fecha : </p>
                                <p className="text-sm font-normal mt-1 text-gray-700 leading-4 md:leading-5">{getDateFormat(orderSel.createdAt)}</p>
                            </div>
                            <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                <WifiIcon className="h-5 w-5  text-amber-700"/>
                                <p className="text-sm font-thin mt-1 text-gray-600 leading-4 md:leading-5">Tipo servicio: </p>
                                <p className="text-sm font-normal mt-1 text-gray-700 leading-4 md:leading-5">{orderSel.serviciotipo.toUpperCase()} </p>
                            </div>
                            <div className="flex flex-row space-x-3 py-1 align-middle">                                                
                                <CreditCardIcon className="h-5 w-5  text-amber-700"/>
                                <p className="text-sm font-thin mt-1 text-gray-600 leading-4 md:leading-5">Forma de pago: </p>
                                <p className="text-sm font-normal mt-1 text-gray-700 leading-4 md:leading-5">{orderSel.formapago.toUpperCase()} </p>
                            </div>
                            <div className="flex flex-row space-x-3 py-1">
                                <PhoneIcon className="h-5 w-5 text-amber-700"/>
                                <a href={`https://api.whatsapp.com/send?phone=52${orderSel.client.phoneNumber[0].phone}&text=Hola ${orderSel.client.name} `} target="_blank">
                                    <p className="text-sm font-normal mt-1 text-gray-700 leading-4 md:leading-5">{orderSel.client.phoneNumber[0].phoneformat}</p>
                                </a>
                                <button className="bg-amber-300 text-gray-600 rounded-xl text-xs font-thin focus:outline-none focus:shadow-outline hover:bg-amber-500 shadow-md px-3">{orderSel.client.phoneNumber[0].type}</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>    
            <div className="w-full flex bg-white rounded shadow-md sm:items-center px-6 pt-3 pb-3 mt-1">
                <CardClientAddress location={orderSel.client.location} selectClient = {false}/>
            </div>
            {/* <div className="w-full bg-white rounded shadow-md  px-6 pt-2 pb-2 mt-1">
                <ItemPlanInternet plan={orderSel.client.internetplan} direction="row" message='Paquete de renta' />
                <ItemPlanInstallation plan={orderSel.client.installationplan} direction="row" message='Costo de instalacion' />
                
            </div> */}
            <div className="w-full xs:max-w-md bg-white rounded shadow-md  px-6 pt-2 pb-2 mt-1">
                <TablePlanInternetInstallation plan={orderSel.client.internetplanid} planins={orderSel.client.installationplanid} direction="row" message='Costo de instalacion' />
            </div>
            <div className="w-full bg-white rounded shadow-md  px-6 pt-2 pb-2 mt-1">            
                <div className="flex justify-end w-full">
                    <div className="flex w-72 flex-wrap">
                        <Conditional showComp={orderSel.factura}>
                            <div className="flex justify-between w-full">
                                <p className="text-base">Subtotal</p>
                                <p className="text-base">{currencyFormat(orderSel.total/1.16)}</p>
                            </div>
                            <div className="flex justify-between w-full">
                                <p className="text-base">IVA</p>
                                <p className="text-base">{currencyFormat(orderSel.iva)}</p>
                            </div>
                        </Conditional>
                        <div className="flex justify-between w-full border-b border-gray-500">
                            <p className="text-xs text-gray-400 pt-2">Descuento</p>
                            <p className="text-red-500 text-base">$0.0</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="font-bold text-base">Total a pagar</p>
                            <p className="font-bold text-base">{currencyFormat(orderSel.total)}</p>
                        </div>
                    </div>
                </div>            
            </div>
            
            <div className="w-full  flex bg-white rounded shadow-md sm:items-center px-2 pt-4 pb-4 mt-1">
                <div className="md:flex xs:px-2 mb-1">
                    <div className="xs:px-2 px-2 pt-2 pb-2 mb-1">
                        <Image                          
                            className="block mx-auto sm:mx-0 sm:flex-shrink-0"      
                            src={orderSel.client.docs}
                            alt='INE'
                            width={320}
                            height={200}                        
                        />                                                                   
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-white rounded shadow-md sm:items-center px-6 pt-3 pb-3 mt-1">
                <div className="xs:px-2 px-6 pt-6 pb-6 mb-1">
                    <Image                          
                        className="block mx-auto sm:mx-0 sm:flex-shrink-0"      
                        src={orderSel.client.documents}
                        alt='Comprobante domicilio'
                        width={200}
                        height={320}                        
                    />                                        
                </div>

            </div>
    </>
    )
}

export async function getServerSideProps({req, res, query:{id}}) {
    let idusr:any;
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJiMjBhMzVkZDg4MDAxNGQ3YWEzNyIsImlhdCI6MTY5Nzc0NjY2NywiZXhwIjoxNjk3ODMzMDY3fQ.qMpTtGg6HwFHWa_UTmgr9PwTXHllCDhaIAlCtFyho0g";
    // token = getCookie('token', {req, res});
    // idusr = getCookie('id', {req, res});
    idusr = "";
    let order, notexclient;
    try {
        if(token != '') {
            order = await getOrder(id, token);
            notexclient = await getNotesbyClient(order.data.data.client.id, token);      
        } else {
            
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

export default ORDERINSTALLATIONDETAIL;