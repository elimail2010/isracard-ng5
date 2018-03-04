import { Component, OnInit , Input } from '@angular/core';
import { IRepo } from '../isracard-service.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() repo: any;
  constructor() { }

  ngOnInit() {

    
  }

}
