import React from 'react'
import ReactDOM from 'react-dom'

// tools
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import App from './containers/App'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact component={App} path={['/', '/user', '/admin']} />
            <Route
                path="*"
                component={() => (
                    <div className="text-center h1 p-4 m-4">
                        Page Not Found!
                    </div>
                )}
            />
        </Switch>
    </BrowserRouter>,
    document.querySelector('#root')
)
