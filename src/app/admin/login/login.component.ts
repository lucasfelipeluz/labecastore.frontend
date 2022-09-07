import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  public loading: boolean = false;

  public msgError!: string;
  public error: boolean = false;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    // if (this.adminService.checkUser()) {
    //   this.router.navigate(['admin']);
    // }
  }

  loginUser() {
    this.loading = true;
    if (this.user.nickname && this.user.password) {
      this.adminService.login(this.user).subscribe(
        (data: any) => {
          this.router.navigate(['admin']);
          this.loading = false;
          this.adminService.setToken(data.data);

          console.log(data);
        },
        (error) => {
          this.error = true;
          this.msgError = error.error.msgError;
          this.loading = false;
          setTimeout(() => {
            this.error = false;
            this.msgError = '';
          }, 5000);
        }
      );

      return;
    }
    console.log('campos vazios');
  }
}
