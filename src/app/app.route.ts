import { Component } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
    // if path are different then order does not matter but if it is nested, order does matter
    {
        path: '',                       // ?<my-domain>/
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',           //?dynamic path <domain/users/<id>>
        component: UserTasksComponent
    },

]