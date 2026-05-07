import mapboxgl from 'mapbox-gl';
import { MapboxLegendControl, LegendOptions } from '../lib/index';
import '../css/styles.css';

(()=>{
    // mapboxgl.accessToken='your mapbox access token'
    const map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11',
        // This style vector is defining all of the layers.
        //style:'https://narwassco.github.io/mapbox-stylefiles/unvt/style.json',
        style: './style.json',
        center: [35.87063, -1.08551],
        zoom: 12,
        hash:true,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('load', function() {
        // TODO: key maps to object
        // TODO: object allows name, raster/vector (affects styling), color ramp image, color ramp units
        // TODO: define our own custom layers, e.g. from geojson
        const targets = {
            'radar-layer': {
                'label': 'Koppen-Geiger Climate Zones',
                'rangeMin': 0,
                'rangeMax': 30,
                'colorRamp': '{"0":[75,171,57,50],"35":[0,143,95,255],"158":[0,100,110,255],"229":[28,58,109,255],"255":[39,0,59,255]}',
                'units': null
            },
            'pipeline': {
                'label': 'Pipeline',
            },
            'pipeline_annotation': {
                'label': 'Pipeline Label',
            },
            'meter': {
                'label': 'Water Meter',
            },
            'flow meter': {
                'label': 'Flow Meter',
            },
            'valve': {
                'label': 'Valve',
            },
            'firehydrant': {
                'label': 'Fire Hydrant',
            },
            'washout': {
                'label': 'Washout',
            },
            'tank': {
                'label': 'Tank',
            },
            'tank_annotation': {
                'label': 'Tank Label',
            },
            'wtp': {
                'label': 'WTP',
            },
            'wtp_annotation': {
                'label': 'WTP Label',
            },
            'intake': {
                'label': 'Intake',
            },
            'intake_annotation': {
                'label': 'Intake Label',
            },
            'parcels': {
                'label': 'Parcels',
            },
            'parcels_annotation': {
                'label': 'Parcels Label',
            },
            'village': {
                'label': 'Village',
            },
            'village_annotation': {
                'label': 'Village Label',
            },
            'dma': {
                'label': 'DMA',
            },
            'dma-annotation': {
                'label': 'DMA Label',
            },
            'contour-line': {
                'label': 'Countour',
            },
            'contour-label': {
                'label': 'Contour Label',
            },
            'hillshade': {
                'label': 'Hillshade',
            },
        };
        // add legend control without checkbox, and it will be hide as default
        let options : LegendOptions = {
            showDefault: false,
            showCheckbox: false,
            onlyRendered: true,
            reverseOrder: true
        }
        map.addControl(new MapboxLegendControl(targets, options), 'top-right');

        // add legend control with checkbox, and it will be shown as default
        options  = {
            showDefault: true,
            showCheckbox: true,
            onlyRendered: true,
            reverseOrder: false
        }
        map.addControl(new MapboxLegendControl(targets, options), 'bottom-right');

        // add legend control with all layers, and it reverse layer order
        options  = {
            showDefault: true,
            showCheckbox: true,
            onlyRendered: false,
            reverseOrder: true
        }
        map.addControl(new MapboxLegendControl({}, options), 'bottom-left');

        // add legent control with custom title
        options = {
            showDefault: true,
            showCheckbox: true,
            onlyRendered: true,
            reverseOrder: false,
            title: 'Custom Legend'
        }

        map.addControl(new MapboxLegendControl(targets, options), 'top-right');
    });
})()
