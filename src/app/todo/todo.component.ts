import { Component, OnInit } from '@angular/core';
import { ToapiService } from '../toapi.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private api:ToapiService) { 
  api.viewTodos().subscribe(
    (Response)=>{
      this.data=Response
    }
  )
  }

  ngOnInit(): void {
  }
data:any=[
  
]
}
