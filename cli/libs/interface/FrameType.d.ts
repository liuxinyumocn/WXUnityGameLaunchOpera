export declare enum FrameType {
    media = 0,
    createVideo = 13,
    pauseVide = 5,
    playVideo = 1,
    createAudio = 20,
    pauseAudio = 21,
    playAudio = 22,
    createImage = 2,
    createRect = 6,
    end = 7,
    var = 8,
    setParam = 16,
    setTimeout = 19,
    setParamSize = 9,
    setParamPosition = 10,
    setParamSizeAndPosition = 11,
    createAnimationFunction = 12,
    exception = 14,
    if = 15,
    report = 17,
    checkPoint = 18,
    reportCheckPointCount = 23
}
export declare const SysFrameType: {
    [x: number]: string;
    media: FrameType.media;
    createVideo: FrameType.createVideo;
    pauseVide: FrameType.pauseVide;
    playVideo: FrameType.playVideo;
    createAudio: FrameType.createAudio;
    pauseAudio: FrameType.pauseAudio;
    playAudio: FrameType.playAudio;
    createImage: FrameType.createImage;
    createRect: FrameType.createRect;
    end: FrameType.end;
    var: FrameType.var;
    setParam: FrameType.setParam;
    setTimeout: FrameType.setTimeout;
    setParamSize: FrameType.setParamSize;
    setParamPosition: FrameType.setParamPosition;
    setParamSizeAndPosition: FrameType.setParamSizeAndPosition;
    createAnimationFunction: FrameType.createAnimationFunction;
    exception: FrameType.exception;
    if: FrameType.if;
    report: FrameType.report;
    checkPoint: FrameType.checkPoint;
    reportCheckPointCount: FrameType.reportCheckPointCount;
};
export interface FrameInstant {
    uid: string;
    inited: boolean;
    params: any[];
    value: any;
}
