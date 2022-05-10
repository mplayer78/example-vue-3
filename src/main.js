import { createApp } from 'vue'
// import BananasComponent from './components/BananasComponent.vue'
// import ApplesComponent from './components/ApplesComponent.vue'

const BananasComponent = { template: '<div>Bananas</div>' }
const ApplesComponent = { template: '<div>Apples</div>' }

const app = createApp({});

app
    .component('bananas-component', BananasComponent)
    .component('apples-component', ApplesComponent)

app.mount('#app')
