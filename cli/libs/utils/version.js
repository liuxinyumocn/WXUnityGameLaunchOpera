"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionCheck = void 0;
function VersionCheck(baseVersion, dataVersion) {
    const regex = /^(\d+)\.(\d+)\.(\d+)$/;
    if (!regex.test(baseVersion) || !regex.test(dataVersion)) {
        return false;
    }
    const baseInfo = baseVersion.split('.');
    const dataInfo = dataVersion.split('.');
    if (Number(dataInfo[0]) < Number(baseInfo[0])) {
        return true;
    }
    else if (Number(dataInfo[0]) > Number(baseInfo[0])) {
        return false;
    }
    if (Number(dataInfo[1]) < Number(baseInfo[1])) {
        return true;
    }
    else if (Number(dataInfo[1]) > Number(baseInfo[1])) {
        return false;
    }
    if (Number(dataInfo[2]) <= Number(baseInfo[2])) {
        return true;
    }
    return false;
}
exports.VersionCheck = VersionCheck;
//# sourceMappingURL=Version.js.map