export type OrderProps = {
  _id: string;
  id: string;
  idorden: number;
  factura: boolean;
  totaL: number;
  iva: number;
  formapago: string;
  ordeninstatus: string;
  servicitipo: string;
  observaciones: string;
  mensualidades: string;
  user: {
    photo: string;
    name: string;
  };
  client: {
    _id: string;
    id: string;
    name: string;
    lastname: string;
    client: string;
    email: string;
    source: string;
    categoria: {
      type: string;
    };
    condition: {
      type: string;
    };
    phoneNumber: [{
      phone: string;
      phoneformat: string;
    }];
    location: {
      community: string;
      municipy: string;
      state: string;
    };
    installationplan: {
      paquete: string;
      costo: number;
    };
    internetplan: {
      paquete: string;
      costo: number;
    };
  };
};
