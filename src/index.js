import "leaflet";
import * as $ from  "jquery";
import "bootstrap";
import * as maps from "./maps";
import {buildAllDreams} from "./dream";

$(function() {
    maps.initMap();
    buildAllDreams();
});