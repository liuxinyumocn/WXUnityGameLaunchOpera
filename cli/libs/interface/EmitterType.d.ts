export declare enum FrameBaseCaseType {
    ParamChange = 0,
    EventLaunch = 1,
    End = 2
}
export declare enum OperaPlayerCaseType {
    ElementParamChange = 0,
    PlayFrame = 1,
    PlayStoryLine = 2,
    EventLaunch = 3,
    Exception = 4,
    End = 5,
    ReportStoryStart = 6,
    ReportStoryEnd = 7
}
export declare enum DirctorCaseType {
    FrameElementParamChange = 0,
    FrameElementParamChangeUpdate = 1,
    FrameCreate = 2,
    PlayFrame = 3,
    PlayStoryLine = 4,
    OperaDataMounted = 5,
    ViewerReady = 6,
    Exception = 7,
    End = 8,
    UpdateParams = 9,
    Report = 10,
    ReportStoryStart = 11,
    ReportStoryEnd = 12,
    CheckPoint = 13,
    ReportCheckPointCount = 14
}
export declare enum ViewerBaseCaseType {
    FrameCreate = 0,
    PlayFrame = 1,
    OperaDataMounted = 2,
    FrameElementParamChange = 3,
    FrameElementParamChangeUpdate = 4,
    Exception = 5,
    End = 6,
    UpdateParams = 7,
    Report = 8,
    CheckPoint = 9,
    ReportCheckPointCount = 10
}
export declare enum ViewerElementBaseCaseType {
    Created = 0,
    Actived = 1,
    DomReady = 2,
    ParamChange = 3,
    DestoryView = 4,
    ParamsUpdate = 5
}
export declare enum LoggerCaseType {
}
export declare enum ReportCaseType {
    custom = 0,
    sys = 1,
    err = 2
}
export declare enum ProgressCaseType {
    RefreshProgress = 0
}
