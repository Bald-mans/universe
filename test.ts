interface AppRouteRecordRaw{
    name: string;
    
    children?: AppRouteRecordRaw[];
    
  }


const LoginRoute: AppRouteRecordRaw = {
    
    name: 'Login',
   
  };
