import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.warn(data)
      this.apiData = data;
    })

  }


}
