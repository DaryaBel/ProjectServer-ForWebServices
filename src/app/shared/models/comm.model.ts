// Модель класса Comment
export class Comm {
         public id: number;
         public iduser: string;
         public name: string;
         public idproduct: string;
         public text: string;
         public date: string;
         constructor(
           id: number,
           iduser: string,
           name: string,
           idproduct: string,
           text: string,
           date: string
         ) {
           this.id = id;
           this.iduser = iduser;
           this.name = name;
           this.idproduct = idproduct;
           this.text = text;
           this.date = date;
         }
       }
