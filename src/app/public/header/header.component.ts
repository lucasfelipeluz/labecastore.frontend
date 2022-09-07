import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenuToggle: boolean = false;

  readonly queryField = new FormControl();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.queryField.setValue('');
    });
  }

  search() {
    const value: any = this.queryField.value;
    if (value) {
      if (value.trim() === '') {
      } else {
        const campo = this.queryField.value;
        this.router.navigate(['search', campo]);
      }
    }
  }

  hideMenuToggle() {
    this.showMenuToggle = !this.showMenuToggle;
  }
}
