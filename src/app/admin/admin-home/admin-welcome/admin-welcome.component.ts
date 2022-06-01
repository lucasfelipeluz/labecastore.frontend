import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.scss']
})
export class AdminWelcomeComponent implements OnInit {

  constructor() { }

  @Input() admin_nome: string = ''

  ngOnInit(): void {
  }

}
