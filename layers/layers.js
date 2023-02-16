ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25833").setExtent([522537.825427, 4264040.932914, 657216.037965, 4343876.477386]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Vestizioni_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "vestizioni",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vestizioni",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vestizioni_1, 0]);
var lyr_Acque_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "acque",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Acque",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Acque_2, 0]);
var lyr_Strade_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "strade",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Strade",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Strade_3, 0]);
var lyr_Particelle_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Particelle",
                            opacity: 0.418000,
                            
                            
                          });
              wms_layers.push([lyr_Particelle_4, 0]);
var lyr_Fabbricati_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "fabbricati",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fabbricati",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fabbricati_5, 0]);
var lyr_ProvinceUffici_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "province",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Province - Uffici",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProvinceUffici_6, 0]);
var lyr_Mappe_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralZoning",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mappe",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Mappe_7, 0]);
var format_limitideicommuni_8 = new ol.format.GeoJSON();
var features_limitideicommuni_8 = format_limitideicommuni_8.readFeatures(json_limitideicommuni_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_limitideicommuni_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitideicommuni_8.addFeatures(features_limitideicommuni_8);
var lyr_limitideicommuni_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limitideicommuni_8, 
                style: style_limitideicommuni_8,
                interactive: false,
                title: '<img src="styles/legend/limitideicommuni_8.png" /> limiti dei communi'
            });
var format_delimitazionecipolla_9 = new ol.format.GeoJSON();
var features_delimitazionecipolla_9 = format_delimitazionecipolla_9.readFeatures(json_delimitazionecipolla_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_delimitazionecipolla_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delimitazionecipolla_9.addFeatures(features_delimitazionecipolla_9);
var lyr_delimitazionecipolla_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delimitazionecipolla_9, 
                style: style_delimitazionecipolla_9,
                interactive: false,
                title: '<img src="styles/legend/delimitazionecipolla_9.png" /> delimitazione cipolla'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Vestizioni_1.setVisible(true);lyr_Acque_2.setVisible(true);lyr_Strade_3.setVisible(true);lyr_Particelle_4.setVisible(true);lyr_Fabbricati_5.setVisible(true);lyr_ProvinceUffici_6.setVisible(true);lyr_Mappe_7.setVisible(true);lyr_limitideicommuni_8.setVisible(true);lyr_delimitazionecipolla_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Vestizioni_1,lyr_Acque_2,lyr_Strade_3,lyr_Particelle_4,lyr_Fabbricati_5,lyr_ProvinceUffici_6,lyr_Mappe_7,lyr_limitideicommuni_8,lyr_delimitazionecipolla_9];
lyr_limitideicommuni_8.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_delimitazionecipolla_9.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', });
lyr_limitideicommuni_8.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_delimitazionecipolla_9.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_limitideicommuni_8.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_delimitazionecipolla_9.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'ELEVATION': 'no label', });
lyr_delimitazionecipolla_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});