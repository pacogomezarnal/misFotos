import {Foto} from './foto';

export const FOTOS: Foto[] =[
  { id: 1, nombre: 'foto verano', detalle: 'foto en la playa', fecha: new Date(2018,8,3),file:'verano.jpg' },
  { id: 2, nombre: 'foto invierno', detalle: 'foto en la nieve', fecha: new Date(2017,12,5),file:'winter.jpg'  },
  { id: 4, nombre: 'foto fallas', detalle: 'foto en la calle', fecha: new Date(2018,3,17),file:'fallas.jpg' },
  { id: 6, nombre: 'foto vacia', detalle: 'sin foto', fecha: new Date(2018,3,17),file:'' }
];
