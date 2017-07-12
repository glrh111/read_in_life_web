import { Component, OnInit } from '@angular/core';

import { Account } from '../../service/account';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  acc: Account = new Account();
  errorMessage: string;

  constructor(private accountService: AccountService) { }

  login() {
    console.log(this.acc);
    this.accountService.logIn(this.acc);

    this.accountService.logIn(this.acc)
      .subscribe(
        code => console.log("login code: ", code),
        error => this.errorMessage = <any>error
      );
  }

  register() {

  }

  ngOnInit() {
    document.body.style.background = '#ffffff';
  }

}
