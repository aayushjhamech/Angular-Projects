import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white;
    }`]
})

export class ServerComponent{
    serverId: number= 10;
    serverStatus: String= 'Offline'; //dataBinding

    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'Green' : 'Red'
    }
}
