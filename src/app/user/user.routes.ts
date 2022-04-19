import { LoginComponent } from "../events/login/login.component";
import { ProfileComponent } from "../events/profile/profile.component";

export const userRoutes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}    
]