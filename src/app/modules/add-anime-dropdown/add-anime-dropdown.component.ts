import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-anime-dropdown',
  templateUrl: './add-anime-dropdown.component.html',
  styleUrls: ['./add-anime-dropdown.component.css']
})
export class AddAnimeDropdownComponent implements OnInit {
  keyworldSearch: string = "";
  constructor() { }

  ngOnInit() {
  }
  onKey(value: string) {
    this.keyworldSearch = value;
    
  }
  keyworldSearchIsEmpty(){
    if(this.keyworldSearch==""){
      return true;
    }else{
      return false;
    }
  }

}
