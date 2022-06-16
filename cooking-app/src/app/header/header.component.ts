import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    @Output() featureSelected= new EventEmitter<string>(); 
    //Output allows the event mapped to it to be listened to from outside the component
    
    onSelect(feature: string){
        this.featureSelected.emit(feature);//emits the feature when a click is performed

    }

    collapsed= true; 
}