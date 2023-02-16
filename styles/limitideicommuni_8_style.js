var size = 0;
var placement = 'point';

var style_limitideicommuni_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "31.200000000000003px \'Helvetica\', sans-serif";
    var labelFill = "#230b1f";
    var bufferColor = "#f91919";
    var bufferWidth = 1.3000000000000003;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("COMUNE") !== null) {
        labelText = String(feature.get("COMUNE"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,233,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
