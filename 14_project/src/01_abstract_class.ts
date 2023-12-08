/* a normal class concept */
class TakePhoto{
    constructor(
        public cameraMode: string,
        public filterName: string,
        metaData: string,
        burst: number
    ){}
}

const ashutosh = new TakePhoto("telephoto", "black and white", "new delhi", 2);

/* an abstract class concept */
abstract class TakePhoto1 {
    constructor(
        public cameraMode: string,
        public filterName: string,
        metaData: string,
        burst: number
    ) { }
}

const ashutosh1 = new TakePhoto1("telephoto", "black and white", "new delhi", 2); // this gives error, but the other, which way, see below 

class Instagram extends TakePhoto1{

}

const ashutosh2 = new Instagram("telephoto", "black and white", "new delhi", 2);