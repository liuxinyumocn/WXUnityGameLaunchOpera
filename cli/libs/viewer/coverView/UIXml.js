"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoverViewType_1 = require("../../interface/CoverViewType");
const GlobalInfo_1 = require("./GlobalInfo");
const UIDHEADER = 'wx_lac_opera_';
class UIXml {
    constructor() {
        this.DOMElements = [];
        this.style = {};
        this.idBody = `${UIDHEADER}body`;
        const baseStyle = {};
        baseStyle[this.idBody] = {
            width: GlobalInfo_1.screenWidth,
            height: GlobalInfo_1.screenHeight,
            zIndex: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            hidden: true,
            backgroundColor: '#ffffff',
            opacity: 1,
        };
        Object.assign(this.style, baseStyle);
    }
    addVideo() {
        const uid = `${UIDHEADER}${UIXml.uidInc++}`;
        this.DOMElements.push({
            type: CoverViewType_1.DOMElementType.video,
            uid,
        });
        this.style[uid] = {
            position: 'absolute',
        };
        return uid;
    }
    addImage(src) {
        const uid = `${UIDHEADER}${UIXml.uidInc++}`;
        this.DOMElements.push({
            type: CoverViewType_1.DOMElementType.image,
            uid,
            src,
        });
        this.style[uid] = {
            position: 'absolute',
        };
        return uid;
    }
    addClickRect() {
        const uid = `${UIDHEADER}${UIXml.uidInc++}`;
        this.DOMElements.push({
            type: CoverViewType_1.DOMElementType.view,
            uid,
        });
        this.style[uid] = {
            position: 'absolute',
        };
        return uid;
    }
    getXml() {
        let xml = '';
        this.DOMElements.forEach((item) => {
            switch (item.type) {
                case CoverViewType_1.DOMElementType.video:
                    xml += `
            <video
              id="${item.uid}"
              controls="false"
              obeyMuteSwitch="true"
              pageGesture="false"
              loop="true"
              muted="true"
              autoplay="false"
              object-fit="cover"
              enable-progress-gesture="false"
              enable-play-gesture="false"
              show-center-play-btn="false"
              auto-insert="false"
            ></video>
          `;
                    break;
                case CoverViewType_1.DOMElementType.image:
                    xml += `
            <image
              id="${item.uid}"
              src="${item.src}"
            ></image>
          `;
                    break;
                case CoverViewType_1.DOMElementType.view:
                    xml += `
            <view
              id="${item.uid}"
            ></view>
          `;
                    break;
            }
        });
        return `
      <view id="${this.idBody}">
        ${xml}
      </view>
      `;
    }
    getStyle() {
        return this.style;
    }
}
UIXml.uidInc = 1;
exports.default = new UIXml();
//# sourceMappingURL=UIXml.js.map