import { Component,  HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TO DO LIST';
  list: any [] = [];


/* @HostListener('window:load')onLoad() {
    const value = localStorage.getItem('TodoList')
    if(localStorage){
      let value = localStorage.getItem('TodoList')
      if(value!=null){
        console.log(value)
      }
    }
 } */

ngOnInit(){
  this.list = JSON.parse(localStorage.getItem('TodoList') || '{}');
}

  onSubmit(item: string){
    this.list.push({id:this.list.length, name:item})
    localStorage.setItem('TodoList', JSON.stringify(this.list))
    console.log(this.list)
  }

  onRemove(id: number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}

