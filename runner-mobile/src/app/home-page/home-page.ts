import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'home-page',
    templateUrl: 'home-page.html'
})
export class HomePage implements OnInit {
    constructor(
        public app: AppService,
        public http: HttpClient,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        let url = this.app.getMobileUrl('getconfig', { code: 'runner.mobile.home.page' });
        this.http.get(url).subscribe(res => {
            console.log(res);
        });
    }
}