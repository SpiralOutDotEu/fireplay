import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-world-from-api',
  templateUrl: './hello-world-from-api.component.html',
  styleUrls: ['./hello-world-from-api.component.css']
})
export class HelloWorldFromAPIComponent implements OnInit {
  url1 = 'https://us-central1-fireplay-3d064.cloudfunctions.net/api/helloWorld/';
  url2 = 'https://us-central1-fireplay-3d064.cloudfunctions.net/api/echo/';
  response: any;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getFromAPI();


  }

  getFromAPI() {
    return this.httpClient.get(this.url1).subscribe((res: JSON) => {
      this.response = res;
      console.log(res);
    });
  }

  postToAPI() {
    const message = {'text': 'some text'};
    this.httpClient.post(this.url2, message)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occurred' + err.body);
        }
      );
  }

}
