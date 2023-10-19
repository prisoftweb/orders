import { Document, Page, Image, View, Text, StyleSheet } from '@react-pdf/renderer';

export default function PrintPDF({order}){

  return (
    <Document>
      <Page size='LETTER'>
        <View style={{flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '5px',
          padding: '10px',
          paddingLeft: '70px',
          //border: '1px solid purple',
          //height: '390px'
        }}
        >
          <View style={{marginLeft: '5px',
            width: '250px',
            height: '175px',
            //border: '1px solid red'
          }}>
            <Image 
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAJUlEQVR42u3NQQEAAAQEsJNcdFLw2gqsMukcK4lEIpFIJBLJS7KG6yVo40DbTgAAAABJRU5ErkJggg=='
              //src={'/landpage.svg'}
              style={{
                width: '60px',
                height: '60px',
                //border: '1px solid green'
              }}
            />
            <View>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '15px'}}
              >
                Teltan Telecomunicaciones S de RL de CV
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '15px'}}
              >
                Josefa Negrete 590
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '15px'}}
              >
                Graciano Sánchez 2da Secc,
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '15px'}}
              >
                San Luis Potosí, S.L.P. CP.78360
              </Text>  
            </View>
            <View>
              <Text style={{
                color: 'black',
                fontSize: '10px',
                marginTop: '50px',
                fontWeight: 'bold'
              }}>
                {order.data.data.client.lastname + ' ' + order.data.data.client.name}
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '15px'}}
              >
                {order.data.data.client.email}
              </Text>
            </View>
            <Image src={'/landpage.svg'} />
          </View>
          
          <View style={{
            justifyContent: 'flex-start',
            marginTop: '5px',
            padding: '10px',
            paddingLeft: '70px',
            //border: '1px solid green',
            height: '190px',
            paddingHorizontal: '1px',
            paddingVertical: '1px'
          }}
          >
            <Image src={'/landpage.svg'} style={{width: '40px', height: '40px', border:'1px solid pink'}} />
            <View style={{
              //border: '1px solid #B4AFAF',
              //flexDirection: 'row-reverse',
              //flexWrap: 'wrap',
              width: '150px'}}
            >
              <View style={{flexDirection: 'row', width: '150px', height: '25px'}}>
                <Text style={{width: '90px', color: 'white', fontSize: '10px', backgroundColor: 'green', textAlign: 'center', paddingTop: '5px'}}>
                  {order.data.data.ordeninstatus}
                </Text>
                <Text style={{width: '60px', fontSize: '10px', backgroundColor: '#DAD5D5', textAlign: 'center', paddingTop: '5px'}}>
                  {order.data.data.idorden}
                </Text>
              </View>
              <Text style={{width: '150px', textAlign: 'center', height: '40px', paddingTop: '10px'}}>$1,899.00</Text>
            </View>
            <View>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '10px'}}
              >
                Fecha : {order.data.data.datets.substring(0,10)}
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '10px'}}
              >
                Tipo servicio : {order.data.data.serviciotipo}
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '10px'}}
              >
                Forma de pago : {order.data.data.formapago}
              </Text>
              <Text style={{
                color: '#958F8E',
                fontSize: '10px',
                marginTop: '10px'}}
              >
                {order.data.data.client.phoneNumber.phoneformat}
              </Text>
            </View>
          </View>
        </View>

        <View style={{
          border: '1px solid gray',
          paddingLeft: '20px',
          paddingVertical: '10px'
        }}>
          <Text style={{
            color: '#958F8E',
            fontSize: '10px',
            marginTop: '7px'
          }}>
            {order.data.data.client.location.address}
          </Text>
          <Text style={{
            color: '#958F8E',
            fontSize: '10px',
            marginTop: '7px'
          }}>
            {order.data.data.client.location.description}
          </Text>
          {/* <Text style={{
            color: '#958F8E',
            fontSize: '10px',
            marginTop: '7px'
          }}>
            De la calle principal a la primera tienda hacia la calle de la derecha hasta mero arriba
          </Text> */}
          <Text style={{
            color: '#958F8E',
            fontSize: '10px',
            marginTop: '7px'
          }}>
            {order.data.data.client.location.coordinates[0] + ', ' + order.data.data.client.location.coordinates[1]}
          </Text>
        </View>

        {/* tablaaa */}

        <View style={{
          //border: '1px solid #958F8E',
          //width: '470px',
          //height: '200px'
          height: 'auto',
          paddingHorizontal:'20px'
        }}>
          <View style={{
            //width: '470px',
            height: '30px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px solid #958F8E',
          }}>
            <Text style={{
              //border: '1px solid blue',
              width: '60px',
              fontSize: '11px',
              color: 'black',
              paddingTop: '7px',
              paddingLeft: '2px',
              backgroundColor: '#E6DFDB',
              fontWeight: 'bold',
            }}>
              Imagen
            </Text >
            <Text style={{
              //border: '1px solid pink',
              width: '220px',
              fontSize: '11px',
              paddingTop: '7px',
              color: 'black',
              paddingLeft: '2px',
              backgroundColor: '#E6DFDB',
              fontWeight: 'bold'
            }}>
              Descripcion
            </Text>
            <Text style={{
              //border: '1px solid pink',
              width: '220px',
              fontSize: '11px',
              paddingTop: '7px',
              color: 'black',
              paddingLeft: '2px',
              backgroundColor: '#E6DFDB',
              fontWeight: 'bold'
            }}>
              Observacion
            </Text>
            
            <Text style={{
              //border: '1px solid blue',
              width: '70px',
              fontSize: '11px',
              paddingTop: '7px',
              color: 'black',
              paddingLeft: '2px',
              backgroundColor: '#E6DFDB',
              fontWeight: 'bold'
            }}>
              Costo
            </Text>
          </View>

          <View style={{
            //width: '470px',
            height: '40px',
            flexDirection: 'row',
            border: '1px solid gray'
          }}>
            <View style={{
              //border: '1px solid blue',
              width: '60px',
              paddingTop: '5px'
              //fontSize: '11px',
              //color: 'gray',
              //paddingTop: '7px',
              //paddingLeft: '2px',
              //backgroundColor: '#E6DFDB'
            }}>
              <Image src={'/landpage'} style={{border: '1px solid blue', width: '30px', borderRadius: '100px'}}/>
            </View >
            <View style={{
              //border: '1px solid pink',
              width: '220px',
              paddingTop: '2px'
            }}>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '11px',
                paddingTop: '2px',
                color: 'gray',
                paddingLeft: '2px',
              }}>	
                {order.data.data.client.internetplanid.name}
              </Text>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '9px',
                paddingTop: '7px',
                color: 'gray',
                //paddingLeft: '2px',
                //backgroundColor: '#E6DFDB'
              }}>
                Paquete de renta
              </Text>
            </View>
            <View style={{
              width: '220px',
              paddingTop: '5px'
              //backgroundColor: '#E6DFDB'
            }}>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '9px',
                paddingTop: '7px',
                color: 'gray',
                paddingLeft: '2px',
                //backgroundColor: '#E6DFDB'
              }}>
                {order.data.data.client.internetplanid.mb} MEGAS de bajada
              </Text>
            </View>
            <Text style={{
              //border: '1px solid blue',
              width: '70px',
              fontSize: '11px',
              paddingTop: '15px',
              color: '#5E5C5B',
              paddingLeft: '2px',
              //backgroundColor: '#E6DFDB'
            }}>
              ${order.data.data.client.internetplanid.price}
            </Text>
          </View>

          <View style={{
            //width: '470px',
            height: '40px',
            flexDirection: 'row',
            border: '1px solid gray'
          }}>
            <View style={{
              //border: '1px solid blue',
              width: '60px',
              paddingTop: '5px'
              //fontSize: '11px',
              //color: 'gray',
              //paddingTop: '7px',
              //paddingLeft: '2px',
              //backgroundColor: '#E6DFDB'
            }}>
              <Image src={'/landpage'} style={{border: '1px solid blue', width: '30px', borderRadius: '100px'}}/>
            </View >
            <View style={{
              //border: '1px solid pink',
              width: '220px',
              paddingTop: '10px'
            }}>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '11px',
                paddingTop: '2px',
                color: 'gray',
                paddingLeft: '2px',
              }}>	
                {order.data.data.client.installationplan.nombre}
              </Text>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '9px',
                paddingTop: '2px',
                color: 'gray',
                paddingLeft: '2px',
                //backgroundColor: '#E6DFDB'
              }}>
                Costo de instalacion
              </Text>
            </View>
            <View style={{
              width: '220px',
              paddingTop: '5px'
              //backgroundColor: '#E6DFDB'
            }}>
              <Text style={{
                //border: '1px solid pink',
                width: '200px',
                fontSize: '9px',
                paddingTop: '7px',
                color: 'gray',
                paddingLeft: '2px',
                //backgroundColor: '#E6DFDB'
              }}>
                Precio sin descuento
              </Text>
            </View>
            <Text style={{
              //border: '1px solid blue',
              width: '70px',
              fontSize: '11px',
              paddingTop: '10px',
              color: '#5E5C5B',
              paddingLeft: '2px',
              //backgroundColor: '#E6DFDB'
            }}>
              ${order.data.data.client.installationplan.costo}
            </Text>
          </View>

        </View>

        <View style={{
          flexDirection: 'column',
          //justifyContent: 'flex-end',
          //alignItems: 'flex-end',
          alignContent: 'flex-end',
          flexWrap: 'wrap',
          marginTop: '10px',
          paddingRight: '20px',
          marginVertical: '10px'
          //border: '1px solid blue'         
        }}>
          <View style={{
            //border: '1px solid #958F8E',
            width: '200px',
            height: '17px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid gray'
          }}>
            <Text style={{width: '100px', marginTop: '2px', fontSize: '7px', color: 'gray'}}>Descuento</Text>
            <Text style={{width: '50px', marginTop: '2px', color: 'red', fontSize: '11px'}}>-$0.00</Text>
          </View>

          <View style={{
            //border: '1px solid #958F8E',
            width: '200px',
            height: '17px',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{width: '100px', marginTop: '2px', fontWeight: 'bold', fontSize: '11px'}}>Total a pagar</Text>
            <Text style={{width: '50px', marginTop: '2px', fontWeight: 'bold', fontSize: '11px'}}>${order.data.data.total}</Text>
          </View>
        
        </View>

      </Page>
      
    </ Document>
  )
}