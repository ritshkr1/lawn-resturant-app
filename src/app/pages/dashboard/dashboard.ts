import { Component, computed, signal } from '@angular/core';
import { ApiService } from '../../shared/api-service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ResData } from '../../shared/shared-model';


@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  resturantData:ResData[];
  showAdd:boolean = true;
  showUpdate: boolean = true;
  formValue : any;
  constructor(public api: ApiService, private fb: FormBuilder){
    this.resturantData = [...this.api.getPosts()]
    console.log(this.resturantData);
    this.formValue = this.fb.group({
      id:[null],
      name:[''],
      email:[''],
      address:[''],
      mobile:[''],
      services: ['']
    })
  }

  addResturants(){
    this.showUpdate = false;
    this.showAdd = true;
    this.formValue = this.fb.group({
      id:[null],
      name:[''],
      email:[''],
      address:[''],
      mobile:[''],
      services: ['']
    });
  }

  addResto(){
    const addResto = this.flatenFormValue();
    const maxId = this.getMaxId();
    this.resturantData.push({...addResto,id:maxId});
    console.log(addResto,maxId, this.resturantData)
  }

  getMaxId(){
    const data = this.resturantData;
    let id = 0;
    for(let el of data){
      if(el.id > id){
        id = el.id
      }
    }
    return id
  }

  updateResto(){
    const updatedData = this.flatenFormValue()
    console.log(updatedData)
    const restoData = this.resturantData.map((res) => {
      console.log(res)
      if(res.id === updatedData.id){
        return updatedData
      }else{
        return res
      }
    });
    this.resturantData = [...restoData]

  }

  flatenFormValue(){
    const formValue = this.formValue.value;
    for(let key in formValue){
      if (Array.isArray(formValue[key]) && formValue[key].length === 1) {
    formValue[key] = formValue[key][0];
  }
    }
    return formValue
  }
  onEditResto(data:any){
    this.showAdd = false;
    this.showUpdate = false;
    this.formValue.patchValue({
      id:[data.id],
      name:[data.name],
      email:[data.email],
      address:[data.address],
      mobile:[data.mobile],
      services: [data.services]
    });
  }

  deleteResto(id:number){
    this.resturantData = this.resturantData.filter((data) => data.id !== id)
  }

}
