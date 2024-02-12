import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { AppResponse } from '@modules/approval/models';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {

    TASKS_API = environment.APPROVAL_API+'/tasks';   

    constructor(private pipe: DecimalPipe, private http: HttpClient) {
        
    }
    loadUserTasks() {
        return this.http.get<AppResponse>(this.TASKS_API, { headers: { ContentType: 'application/json', skip: "true" } });
    }

    approveRequest(taskId: string, payload: {approve: boolean, comment: string}) {
        return this.http.post<any>(this.TASKS_API + "/" + taskId, payload, { headers: { ContentType: 'application/json', skip: "true" } })
    }
   
}
