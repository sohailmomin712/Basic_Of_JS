let me: string = "hello";

let naya: Array<boolean | string> = [true, "hello"];

let num: Array<number> = [1, 3, 4, 5];
let k3: Array<{
  id: number;
  name: string;
  employed: boolean;
  age?: number;
}> = [
  { id: 1, name: "sufi", employed: true, age: 21 },
  { id: 1, name: "sufiyan", employed: true },
  { id: 1, name: "sufiyan shaikh", employed: true },
];

const info: Array<{
  id: number;
  title: string;
  status: boolean;
  age?: number;
}> = [
  { id: 1, title: "suFi", status: false, age: 22 },
  { id: 2, title: "suFiyan", status: true },
  { id: 3, title: "suFiyan shaikh", status: true },
];
interface data {
  id: number;
  title: string;
  status: boolean;
}
const data1: data = {
  title: "Todos",
  status: false,
  id: 1,
};
const data: string = "hello";
interface person {
  firstname: string;
  lastname: string;
}

const getName = ({ firstname, lastname }: person) => {
  if (firstname && lastname) {
    return `${firstname}_${lastname}`;
  } else {
    return `${lastname}`;
  }
};

interface Address {
  houseNumber: number;
  street: number;
  city: string;
  state: string;
  postalnuCode: number;
  country: number;
}
interface PersonDetails {
  phone: number[];
  addresses: string[];
  email?: string;
  firstname: string;
  lastname: string;
  middlename?: string;
}
const details: PersonDetails={
    phone:[7770055910],
  addresses:["xsdasd/","Efgaffadf","hidafadsfj","563122ads"],
  firstname:"Sufiyan",
  lastname:"Shaikh",
}


