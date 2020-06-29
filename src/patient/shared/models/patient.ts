import { location } from './location';
export class Patient {
    constructor(
        public id?: string,
        public age?: number,
        public name?: string,
        public password?: string,
        public token?: string,
        public locations?: location[]
    ) { }
}