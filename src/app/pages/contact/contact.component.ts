import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NewPhone } from 'src/app/shared/classes';
import { IPhone } from 'src/app/shared/interfaces';
import { FormGroup, NgControl } from '@angular/forms';




const  dani: Array<IPhone>=[
  <IPhone>{
    image:"https://randomuser.me/api/portraits/men/77.jpg",
    title: "mr. ",
    first: "Gustavo",
    last: "Prieto",
    email: "gustavo.prieto@example.com",
    namberph: 971704473,
    age: 55,
    street: "3017 calle de tetuán",
    city: "Gijón",
    postcode: 80573,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image:"https://randomuser.me/api/portraits/women/88.jpg",
    title: "mrs. ",
    first: "Amy",
    last: "Vavalcanti",
    email: "amy.cavalcanti@example.com",
    age: 39,
    namberph: 971704473,
    street: "2107 travessa dos açorianos",
    city: "governador valadares",
    postcode: 43552,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image:"https://randomuser.me/api/portraits/men/81.jpg",
    title: "mr. ",
    first: "Alfredo",
    last: "Garcia",
    namberph: 3698958304,
    email: "alfredo.garcia@example.com",
    age: 32,
    street: "8666 york road",
    city: "Carlisle",
    postcode: 79552,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image:"https://randomuser.me/api/portraits/women/47.jpg",
    title: "mrs. ",
    first: "Ennya",
    last: "Daluz",
    namberph: 2066385631,
    email: "ennya.daluz@example.com",
    age: 42,
    street: "5709 rua da saudade",
    city: "Caxias",
    postcode: 75653,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  }
];


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public phone: Array<IPhone>;
  // gender='mr.';


  @Input() submitt:Array<IPhone>;
  @Input() formControlName !: string;
 
  // public image:string;
  // public first:string;
  // public title:string;
  // public last:string;
  // public email:string;
  // public namberph:any;
  // public age:any;
  // public street:any;
  // public city:string;
  // public postcode:any;
  // public description:string;
  // public isDescription: any;




  // @ViewChild('newPhoneForm') newPhoneForm:FormGroup;
  

  constructor() {
   this.phone = dani;
  }

  ngOnInit(): void {
  }

//   public onSubmit() {
//     this.phone.push(new NewPhone(this.image, this.title,this.first, this.last, this.email, this.namberph, this.age, this.street,
// this.city, this.postcode, this.description))
//     this.first='';
//     this.last='';
//     this.email='';
//     this.namberph ='';
//     this.age='';
//     this.street='';
//     this.city='';
//     this.postcode ='';
//     this.description='';
//   }
   public isforms(item:IPhone){
    this.phone.push(item);
   }

   public isSubmit(item:IPhone){
     this.phone.push(item);
   }

  public onToggleDescription(item:IPhone): void{
    item.isDescription=!item.isDescription;
    //this.toggleDescription.emit(item);
  }

  public onDeleteDescription(item:IPhone): void{
    item.isDescription =!item.isDescription;
    //this.toggleDescription.emit(item)
  }

  public onDeleteTodo(item:IPhone): void{
    //this.delete.emit(item);
     const index=this.phone.indexOf(item);
     if (index>-1){
      this.phone.splice(index,1);
    }
   }
  
}
