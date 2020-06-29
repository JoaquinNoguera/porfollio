import React from 'react';
import ReactDom from'react-dom';
import App from './App';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

ReactDom.render(<App/>, document.getElementById("app"));