import { Component } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = [
    // if path are different then order does not matter but if it is nested, order does matter
    {
        path: '',                       // ?<my-domain>/
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',           //?dynamic path <domain/users/<id>>
        component: UserTasksComponent,
        children: [
            {
                path: 'tasks',            //?domain/user/uid/tasks
                //*also this is the relative path tp its parent route i.e('users/:userId')(do not need to declare from the root)
                component: TasksComponent
            },
            {
                path: 'tasks/new',          //?domain/user/uid/tasks/new 
                //*also this is the relative path(do not need to declare from the root)
                component: NewTaskComponent
            }
        ]
    },

]