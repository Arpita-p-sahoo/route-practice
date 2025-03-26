import { Component, Input, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName: string | undefined;

  // userId = input.required<string>();
  private userSvc = inject(UsersService);

  // alternative way of input userId in older angular app
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.userSvc.users.find(
          (u) => u.id === paramMap.get('userId')
        )?.name;
      } //what ever the dynamic route param is

    })
  }

  // userName = computed(() => this.userSvc.users.find((u) => u.id === this.userId())?.name);
}
