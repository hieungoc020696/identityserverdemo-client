import { AuthService } from 'src/services/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss'],
})
export class CallApiComponent implements OnInit {
  response: Object;
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: this.authService.getAuthorizationHeaderValue(),
    });

    this.http
      .get<any>('https://localhost:5001/api', { headers })
      .subscribe((response) => (this.response = response));
  }
}
