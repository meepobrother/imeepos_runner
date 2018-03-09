import { HomePage } from './home-page/home-page';
import { IndexPage } from './index-page/index-page';


export const routes = [{
    path: 'index',
    component: IndexPage,
    login: false
}, {
    path: 'home',
    component: HomePage,
    login: false
}];
export const components = [
    HomePage,
    IndexPage
];
