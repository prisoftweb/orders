import axios from 'axios';

export async function getAllOrders(auth_token) {
    let orders;
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      const url=`${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders`;
      orders =  await fetch(
        url, 
        {headers:headers})
      .then( (response) => {
        if(!response.ok){
          throw new Error('Algo salió mal con la solicitud')
        }
        return response.json();
      });      
    } catch (error) {
        console.log("...error de registro en nuestro sistema...");
        console.log(error);
        throw error;
    }
    return orders;
  }
  
  
  export async function removeOrderOfClient(id, auth_token) {    
    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/${id}`;    
    const requestOptions = {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      }
    };
    try {            
      const res = await fetch(url, requestOptions)
      .then( (response) => {          
        if(!response.ok){          
          showToastMessageError('Algo salió mal con la solicitud');            
          throw new Error('Algo salió mal con la solicitud');                      
        } else {
          if(response.status === 204) {        
              showToastMessage('Orden eliminada exitosamente!');
              return 204;
            }        
          }      
          return response.status;
        })
        .catch( (err) => {          
          showToastMessageError(err);
        });
    } catch (error) {
      showToastMessageError(error);
      return error;    
    }
  }

  export async function getNotesbyClient(id, auth_token) {
    let client;
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })    
      const url=`${process.env.NEXT_PUBLIC_API_URL}/api/v1/clients/${id}/notes`;
      client =  await fetch(
        url, 
        {headers:headers})
        .then( (response) => {
        if(!response.ok){
          throw new Error('Algo salió mal con la solicitud')
        }      
        return response.json();
      });      
    } catch (error) {
        console.log("...error de registro en nuestro sistema...");
        console.log(error);
        throw error;
      }
    return client;
  }

  
export async function getOrder(id, auth_token) {
  let order;
  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/${id}`;
    order =  await fetch(
      url, 
      {headers:headers})
    .then( (response) => {
      if(!response.ok){
        throw new Error('Algo salió mal con la solicitud')
      }
      return response.json();
    });      
  } catch (error) {
      console.log("...error de registro en nuestro sistema...");
      console.log(error);
      throw error;
  }
  return order;
}

