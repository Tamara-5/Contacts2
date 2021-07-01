import { dataTypes } from "./DataType";

type received={
   min:string,
   max:string
}
type Contact={
   isActive:Array<string>
    loading:boolean,
    newUserData:Array<dataTypes>
    select:boolean,
    users:Array<dataTypes>
}
type Filters ={  
   Received:received,
   Tags:Array<Tags>,
   sent:received,
   slectTags:Array<string>
}
type Tags={
   name:string
}
export type stateTypes = {
   contact: Contact,
   filters: Filters,
 };