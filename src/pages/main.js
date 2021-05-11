import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './otm/gannt/index'
import 'antd/dist/antd.css'
//一级路由配置
function Main() {
    //主路由配置
    return (
        <Router>
            <Route path = "/" exact component={Index} />
        </Router>
    )
}

export default Main

