import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

export class GenericCrudService<T> {
  url :string;
  constructor(protected http: HttpClient, private API_URL) {
    this.url = 'https://my-json-server.typicode.com/andgomes95/challenge-mal-frontend/'+API_URL;
  }

  list() {
    return this.http.get<T[]>(this.url)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<T>(`${this.url}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.url, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.url}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1));
  }
}