import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/models/customer.type';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any=[];
  customerDetails: any;
public _id:any
  // setDob: string | null;
  datePipe: DatePipe;
  constructor(private apiservice:ApiService) {
    this.datePipe = new DatePipe("");

   }
 
   datePickerConfig = {
    format: 'DD'
  };
model:any={

}
  submitted = false;

  onSubmit() { this.submitted = true;
    if(this._id){
      this.apiservice.saveorupdateCustomers(this._id, this.model).subscribe(res=>{
        console.log("res" , res);
        if(res){
       alert("updated")
       this.getCustomers()
        }else{
          this.customers=[]
        }

      })
    }else{
      this.apiservice.saveorupdateCustomers('0', this.model).subscribe(res=>{
        console.log("res" , res);
        if(res){
          alert("Inserted")
          this.getCustomers()
        }else{
          this.customers=[]
        }

      })
    }



  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = {};
  }



  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }
  ngOnInit(): void {
  this.getCustomers()
  }

  getCustomers(){
this.apiservice.getCustomers().subscribe(res=>{
  console.log("res" , res);
  if(res){
    this.customers = res.results
  }else{
    this.customers=[]
  }

})
  }

  view(id:string){
    this.apiservice.viewCustomers(id).subscribe(res=>{
      console.log("res" , res);
      if(res){
        this.customerDetails = res.results;
    this._id= this.customerDetails._id;
    // this.model.dob= this.datePipe.transform(this.customerDetails.dob,"dd/MM/YYYY")
        this.model= this.customerDetails
      }else{
        this.customerDetails={}
      }

    })
  }
  deleteCustomer(id:string){
    this.apiservice.delCustomers(id).subscribe(res=>{
      console.log("res" , res);
      if(res){
        this.getCustomers()
        this.customerDetails = res.results;
        alert("deleted")
       
      }else{
        this.customerDetails={}
      }

    })
  }
}
