import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <h1>App</h1>
        <lib-cmp></lib-cmp>
    `,
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}