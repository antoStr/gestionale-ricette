import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'chef',
        loadComponent: () =>
            import('./components/chef/chef').then(m => m.Chef),
        children: [
            {
                path: ':id', 
                loadComponent: () =>
                    import('./components/chef/chef-detail-component/chef-detail-component')
                        .then(m => m.ChefDetailComponent)
            }
        ]
    }
];