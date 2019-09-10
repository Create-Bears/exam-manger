import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 引入antd样式
import 'antd/dist/antd.css';

// 引入全局样式
import './index.css';
import store from './store/index'
import { Provider } from 'mobx-react'

// 引入路由配置
import RouterView from './router/RouterView';
import routes from './router/routes';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

//引入路由守卫
import guard ,{filterView} from './utils/permission'
const history = createBrowserHistory()

const myRoutes = filterView(routes, store.user.viewAuthority);
console.log('myRoutes...', myRoutes, routes);

ReactDOM.render(
	<Provider {...store}>
		<Router history={history}>
			<RouterView routes={myRoutes} />
		</Router>
	</Provider>
	,
	document.getElementById('root') as HTMLElement
);
guard(history)

// ReactDOM.render(
// 	<Provider {...store}>
// 		<BrowserRouter>
// 			<RouterView routes={routes.routes} />
// 		</BrowserRouter>
// 	</Provider>
// 	,
// 	document.getElementById('root') as HTMLElement
// );

