"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIXml_1 = require("./UIXml");
const env_1 = require("./env");
class DOM extends env_1.Component {
    constructor() {
        super();
        this.destoryed = false;
        this.globalPrivate = (0, env_1.getPrivateThis)(this);
        this.globalPrivate.xom = '';
        this.globalPrivate.style = '';
        this.supportAnimation = !env_1.env.isDevtools;
    }
    loadXML() {
        const xml = UIXml_1.default.getXml();
        const style = UIXml_1.default.getStyle();
        const { root: xom } = (0, env_1.xmlParser)(xml);
        const idBody = UIXml_1.default.idBody;
        env_1.init.call(this, xom, style);
        env_1.webviewLayout.add(this.globalPrivate[idBody]);
        return this.globalPrivate[idBody].ready();
    }
    showBody() {
        this.globalPrivate[UIXml_1.default.idBody].style.hidden = false;
    }
    getHandler(uid) {
        return this.globalPrivate[uid];
    }
    destory() {
        if (this.destoryed) {
            return;
        }
        this.destoryed = true;
        if (!this.globalPrivate[UIXml_1.default.idBody]) {
            return;
        }
        this.globalPrivate[UIXml_1.default.idBody]
            .animate({
            opacity: 0,
            duration: 300,
        })
            .then(() => {
            env_1.webviewLayout.remove(this.globalPrivate[UIXml_1.default.idBody]);
            (0, env_1.removePrivateThis)(this);
        });
    }
}
exports.default = new DOM();
//# sourceMappingURL=DOM.js.map