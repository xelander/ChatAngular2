import {Component} from '@angular/core';

export class User {
    public name: string;

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
