import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _postsAPIUrl = "http://localhost:3000/posts/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this._postsAPIUrl)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  createPost(_post: Post): Observable<Post[]> {
    return this.http.post<Post[]>(this._postsAPIUrl, _post)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updateUpvotes(_post: Post, id: String): Observable<Post[]> {
    return this.http.put<Post[]>(this._postsAPIUrl + id, _post)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
