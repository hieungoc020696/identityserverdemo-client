import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-silent-refresh',
  templateUrl: './silent-refresh.component.html',
  styleUrls: ['./silent-refresh.component.scss'],
})
export class SilentRefreshComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.refresh();
  }
}
