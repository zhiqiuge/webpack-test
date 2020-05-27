import Vue from "vue";

import {
    Button,
    Layout,
    Header,
    Sider,
    Content,
    Row,
    Col,
    Form,
    FormItem,
    Select,
    Option,
    Input,
    Menu,
    MenuItem,
    Submenu,
    Table,
    Page,
    Tree,
    Poptip,
    Message
} from "iview";

Vue.component("Button", Button);
Vue.component("IButton", Button);
Vue.component("Layout", Layout);
Vue.component("Header", Header);
Vue.component("Sider", Sider);
Vue.component("Content", Content);
Vue.component("Row", Row);
Vue.component("Col", Col);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("Submenu", Submenu);
Vue.component("Page", Page);
Vue.component("Table", Table);
Vue.component("Tree", Tree);
Vue.component("Poptip", Poptip);
Vue.component("Select", Select);
Vue.component("Option", Option);

// Vue.prototype.$IVIEW = {
//     size: "small",
//     select: {},
//     cell: {},
//     menu: {},
//     tree: {},
//     cascader: {},
//     colorPicker: {},
//     datePicker: {},
//     timePicker: {},
//     tabs: {},
//     modal: {}
// };
Vue.prototype.$Message = Message;
