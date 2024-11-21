import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoI } from '../../../models/empleado';// Interface for Employee data
import { EmpleadoService } from '../../../services/empleado.service'; // Service for Employee API calls
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-update-employee', // Component selector
  templateUrl: './update-employee.component.html', // Link to HTML template
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, CardModule,InputTextModule,InputGroupModule,DropdownModule,],
  styleUrls: ['./update-employee.component.css'], // Link to CSS styles
})
export class UpdateEmployeeComponent implements OnInit {
  form!: FormGroup; // Reactive form for managing employee data
  employeeId!: number; // Holds the ID of the employee being updated

  roles = [
    { label: 'Atención al Cliente', value: 'Atencion al Cliente' },
    { label: 'Repartidor', value: 'Repartidor' },
  ];

  constructor(
    private fb: FormBuilder, // For building the reactive form
    private employeeService: EmpleadoService, // Service to interact with Employee API
    private route: ActivatedRoute, // Access to route parameters
    private router: Router // For navigation
  ) {}

  ngOnInit(): void {
    // Initialize the reactive form with default validators
    this.form = this.fb.group({
      nombre: ['', [Validators.required]], // Name is required
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Numeric validation
      email: ['', [Validators.required, Validators.email]], // Email validation
      direccion: ['', [Validators.required]], // Address is required
      rol: ['', [Validators.required]], // Role is required
    });

    // Retrieve the employee ID from the route parameters
    this.employeeId = this.route.snapshot.params['id'];

    // Fetch the employee data and populate the form
    this.employeeService.getEmpleadoById(this.employeeId).subscribe((empleado: EmpleadoI) => {
      this.form.patchValue(empleado); // Populate the form fields with employee data
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      // Call the service to update the employee
      this.employeeService.updateEmpleado(this.employeeId, this.form.value).subscribe(() => {
        alert('Employee updated successfully!'); // Show success message
        this.router.navigate(['/empleados']); // Navigate back to the employee list
      });
    }
  }

  // Cancel and navigate back without saving
  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
