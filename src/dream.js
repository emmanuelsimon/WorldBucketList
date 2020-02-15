import {data} from './data';
import {addMarker} from "./maps";
import * as $ from  "jquery";

const container = $('#menu');



function buildAllDreams() {
    data.forEach(buildOneDream);
}

function buildOneDream(data) {
    console.log(data);
    const template = document.createElement('div');
    $(template).html('<div class="card mt-4">' +
        '<div class="card-header text-center">' +
            '<h4>'+data.description+'</h4>' +
            '</div>' +
            '<img src="'+data.imagePath+'" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
                '<h5 class="card-title">'+'blblblblblbl'+'</h5>' +
                '<p class="card-text"></p>' +
                '<p class="card-text">' +
                    '<small class="text-muted">Last updated 3 mins ago</small>' +
                '</p>' +
            '</div>' +
        '</div>');
    addMarker(data);
    $(container).append(template);;
}

export {buildAllDreams};