
class Map {
    constructor () {

        ymaps.ready(function(){
            new ymaps.Map("map", {
                center: [56.316072, 44.014720],
                zoom: 10
            });
        });
    }
}

export {Map}