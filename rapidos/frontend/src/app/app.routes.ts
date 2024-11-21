
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
// Import components for "detallesOrdenes" (order details)
import { Routes } from '@angular/router';
import { ShowOrderDetailsComponent } from './components/order-details/show-order-details/show-order-details.component';
import { CreateOrderDetailsComponent } from './components/order-details/create-order-details/create-order-details.component';
import { UpdateOrderDetailsComponent } from './components/order-details/update-order-details/update-order-details.component';

// Import components for "empleados" (employees)
import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';

// Import components for "ordenes" (orders)
import { ShowOrderComponent } from './components/order/show-order/show-order.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { UpdateOrderComponent } from './components/order/update-order/update-order.component';

// Import components for "pagos" (payments)
import { ShowPaymentComponent } from './components/payment/show-payment/show-payment.component';
import { CreatePaymentComponent } from './components/payment/create-payment/create-payment.component';
import { UpdatePaymentComponent } from './components/payment/update-payment/update-payment.component';

// Import components for "productos" (products)
import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';


// Define application routes
export const routes: Routes = [
    // Default route: Redirects to the root path
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
  
    // Routes for "clients"
    {
        path: "clientes",
        component: MostrarClienteComponent// Displays a list of all clients
    },
    {
        path: "clientes/nuevo",
        component: CrearClienteComponent // Displays a form to create a new client
    },
    {
        path: "clientes/edit/:id",
        component: ActualizarClienteComponent // Displays a form to edit a client based on its ID
    },
  
    // Routes for "order details"
    {
      path: 'order-details',
      component: ShowOrderDetailsComponent // Displays a list of all order details
    },
    {
      path: 'order-details/new',
      component: CreateOrderDetailsComponent // Displays a form to create new order details
    },
    {
      path: 'order-details/edit/:id',
      component: UpdateOrderDetailsComponent // Displays a form to edit order details based on its ID
    },
  
    // Routes for "employees"
    {
      path: 'employees',
      component: ShowEmployeeComponent // Displays a list of all employees
    },
    {
      path: 'employees/new',
      component: CreateEmployeeComponent // Displays a form to create a new employee
    },
    {
      path: 'employees/edit/:id',
      component: UpdateEmployeeComponent // Displays a form to edit an employee based on its ID
    },
  
    // Routes for "orders"
    {
      path: 'orders',
      component: ShowOrderComponent // Displays a list of all orders
    },
    {
      path: 'orders/new',
      component: CreateOrderComponent // Displays a form to create a new order
    },
    {
      path: 'orders/edit/:id',
      component: UpdateOrderComponent // Displays a form to edit an order based on its ID
    },
  
    // Routes for "payments"
    {
      path: 'payments',
      component: ShowPaymentComponent // Displays a list of all payments
    },
    {
      path: 'payments/new',
      component: CreatePaymentComponent // Displays a form to create a new payment
    },
    {
      path: 'payments/edit/:id',
      component: UpdatePaymentComponent // Displays a form to edit a payment based on its ID
    },
  
    // Routes for "products"
    {
      path: 'products',
      component: ShowProductComponent // Displays a list of all products
    },
    {
      path: 'products/new',
      component: CreateProductComponent // Displays a form to create a new product
    },
    {
      path: 'products/edit/:id',
      component: UpdateProductComponent // Displays a form to edit a product based on its ID
    }
  ];