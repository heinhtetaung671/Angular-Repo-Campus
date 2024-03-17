import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { environment } from '../../environments/environment';

const BASE_API = `${environment.baseUrl}/department`;

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  search(form: any) {
    return this.http.get<ApiResponse>(BASE_API);
  }

  create(form: any) {
    return this.http.post<ApiResponse>(BASE_API, form);
  }

  findById(code: string) {
    return this.http.get<ApiResponse>(`${BASE_API}/${code}`)
  }

  update(form: any) {
    const {code, ...updateForm} = form;
    return this.http.put<ApiResponse>(`${BASE_API}/${code}`, updateForm)
  }

}
