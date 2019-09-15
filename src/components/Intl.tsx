import * as React from 'react'
import store from '../store/index'
import { IntlProvider } from 'react-intl'
import RouterView from '../router/RouterView'
import zhCN from '../lang/zh-CN'
import enUS from '../lang/en-US'
import { Router } from 'react-router'
import { inject, observer } from 'mobx-react'
// 引入路由配置
import routes from '../router/routes'
import { createHashHistory } from 'history'

//引入路由守卫
import guard, { filterView } from '../utils/permission'
const localeMap = {
    en: enUS,
    zh: zhCN
}

const history = createHashHistory()

const myRoutes = filterView(routes, store.user.viewAuthority)
console.log('myRoutes...', myRoutes, routes)

guard(history)


@inject('global')
@observer
class Intl extends React.Component<any> {
    render() {
        return (
            <IntlProvider
                locale={this.props.global.locale}
                messages={localeMap[this.props.global.locale]}>
                <Router history={history}>
                    <RouterView routes={routes} />
                </Router>
            </IntlProvider>
        )
    }
}

export default Intl
