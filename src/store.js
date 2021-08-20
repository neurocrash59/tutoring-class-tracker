import { writable } from 'svelte/store';
import Localbase from 'localbase';

let db = new Localbase('db');
let students = db.collection('students').get();

const storedStudents = JSON.parse(localStorage.get('studentData'));
export const studentData = writable(storedStudents);

studentData.subscribe((val) => localStorage.setItem('studentData', JSON.stringify(studentData)));
