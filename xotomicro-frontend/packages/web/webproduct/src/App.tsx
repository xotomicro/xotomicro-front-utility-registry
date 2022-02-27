import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import {WebProduct} from "./components/product/WebProduct";
import {GlobalStoreModel} from "./model/GlobalStoreModel";

import "./style/index.scss";

export let globalEventDistributor: GlobalStoreModel;

export const App: any = (props: any): JSX.Element => (
    <div className="section-app">
        <h1 className="section-app__title">app {props.name}</h1>
        <WebProduct />
    </div>
);

const reactLifecycles: singleSpaReact.Lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export function bootstrap(props: any) {
    globalEventDistributor = props.globalEventDistributor;
    return reactLifecycles.bootstrap(props);
}

export function mount(props: any) {
    return reactLifecycles.mount(props);
}

export function unmount(props: any) {
    return reactLifecycles.unmount(props);
}

export default App;
