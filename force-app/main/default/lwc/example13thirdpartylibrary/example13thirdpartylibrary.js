import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class Example13thirdpartylibrary extends LightningElement {

    slLoaded = false;
    
    renderedCallback(){
        if(!this.slLoaded){
            Promise.all([
                loadStyle(this, SL+'/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL+'/simpleLightbox/dist/simpleLightbox.js')
            ]).then(()=>{
                this.slLoaded = true;
                console.log('Initilized simple light box');
            }).catch((error)=>{
                console.error('Could not initilize simple light box-', error);
            });
        }
    }

    openGallery(){
        console.log('Opening Gallery methods');
        SimpleLightbox.open({
            items: ['/resource/cars/van/maruti_suzuki_eeco.jpg', '/resource/cars/luxury/mercedes_benz_gls.jpg', '/resource/cars/sports/Audi_R8_V10_Plus.jpg']
        });
    }




}