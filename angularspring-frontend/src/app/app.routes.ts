import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AdminComponent } from './components/admincomponents/admin/admin.component';
import { AdminAddProductComponent } from './components/admincomponents/adminaddproduct/adminaddproduct.component';
import { ProductspageComponent } from './components/productspage/productspage/productspage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage/aboutpage.component';
import { AdminloginpageComponent } from './components/admincomponents/adminloginpage/adminloginpage.component';
import { UserloginpageComponent } from './components/userloginpage/userloginpage/userloginpage.component';
import { AdminupdateproductComponent } from './components/admincomponents/adminupdateproduct/adminupdateproduct.component';
import { AdminviewproductComponent } from './components/admincomponents/adminviewproduct/adminviewproduct.component';
import { AdminviewproductbyidComponent } from './components/admincomponents/adminviewproductbyid/adminviewproductbyid.component';
import { AdmindeleteproductComponent } from './components/admincomponents/admindeleteproduct/admindeleteproduct.component';
import { AdminadduserComponent } from './components/admincomponents/adminadduser/adminadduser.component';
import { AdminviewuserComponent } from './components/admincomponents/adminviewuser/adminviewuser.component';
import { AdminupdateuserComponent } from './components/admincomponents/adminupdateuser/adminupdateuser.component';
import { AdminviewuserbyidComponent } from './components/admincomponents/adminviewuserbyid/adminviewuserbyid.component';
import { AdmindeleteuserComponent } from './components/admincomponents/admindeleteuser/admindeleteuser.component';
import { UserloggedindashboardComponent } from './components/userloggedindashboard/userloggedindashboard.component';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "loginpage",
        component: LoginpageComponent
    },
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "adminaddproduct",
        component: AdminAddProductComponent
    },
    {
        path: "productspage",
        component: ProductspageComponent
    },
    {
        path: "aboutpage",
        component: AboutpageComponent
    },
    {
        path: "adminloginpage",
        component: AdminloginpageComponent
    },
    {
        path: "userloginpage",
        component: UserloginpageComponent
    },
    {
        path: "adminupdateproduct",
        component: AdminupdateproductComponent
    },
    {
        path: "adminviewproduct",
        component: AdminviewproductComponent
    },
    {
        path: "adminviewproductbyid",
        component: AdminviewproductbyidComponent
    },
    {
        path: "admindeleteproduct",
        component: AdmindeleteproductComponent
    },
    {
        path: "adminadduser",
        component: AdminadduserComponent
    },
    {
        path: "adminviewuser",
        component: AdminviewuserComponent
    },
    {
        path: "adminupdateuserbyid",
        component: AdminupdateuserComponent
    },
    {
        path: "adminviewuserbyid",
        component: AdminviewuserbyidComponent
    },
    {
        path: "admindeleteuserbyid",
        component: AdmindeleteuserComponent
    },
    {
        path: "userloggedindashboard",
        component: UserloggedindashboardComponent
    },
    {
        path: "cartcomponent",
        component: CartcomponentComponent
    }
];
