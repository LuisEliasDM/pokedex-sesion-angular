import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() username: string = "";
  @Input() password: string = "";

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  enviar(){
    this.authService.username = this.username
    this.authService.password = this.password
    const url: string = "https://pokeapi.co/api/v2/pokemon";
    return this.httpClient.get(url).subscribe(response => {
      console.log(response);
    })
  }

}
