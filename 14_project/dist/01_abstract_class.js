"use strict";
/* a normal class concept */
class TakePhoto {
    constructor(cameraMode, filterName, metaData, burst) {
        this.cameraMode = cameraMode;
        this.filterName = filterName;
    }
}
const ashutosh = new TakePhoto("telephoto", "black and white", "new delhi", 2);
/* an abstract class concept */
class TakePhoto1 {
    constructor(cameraMode, filterName, metaData, burst) {
        this.cameraMode = cameraMode;
        this.filterName = filterName;
    }
}
const ashutosh1 = new TakePhoto1("telephoto", "black and white", "new delhi", 2); // this gives error, but the other, which way, see below 
class Instagram extends TakePhoto1 {
}
const ashutosh2 = new Instagram("telephoto", "black and white", "new delhi", 2);
