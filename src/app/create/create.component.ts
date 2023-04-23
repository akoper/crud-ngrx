import { Component,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm!: FormGroup;

  // constructor(private router: Router, private formBuilder: FormBuilder, private companyService: CompanyService) {
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.initializeForm();
  }

// ngOnInit(): void {
//     this.createForm = new FormGroup({
//       name: new FormControl(this.name, Validators.required],
//       address: new FormControl(this.address, Validators.required],
//       // phone: ['', Validators.required],
//       // street: ['', Validators.required],
//       // city: ['', Validators.required],
//       // state: ['', Validators.required],
//       // zip_code: ['', Validators.required]
//   });
// }

  initializeForm() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      // phone: ['', Validators.required],
      // street: ['', Validators.required],
      // city: ['', Validators.required],
      // state: ['', Validators.required],
      // zip_code: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.createForm.value);
    // this.companyService.create(this.createForm.value).subscribe(
    //     () => {
    //         this.router.navigate(['/read']);
    //     },
    //     (err: string) => {
    //         console.log(err);
    //     },
    //     () => console.log('create success')
    // );
  }

}
