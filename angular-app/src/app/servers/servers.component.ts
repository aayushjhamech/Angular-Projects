import { Component, Directive, OnInit } from '@angular/core';

@Component({//components are Directive
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus= "No Server Created.";
  serverCreated= false;
  serverName= '';
  username= '';
  servers= ['TestServer', 'MyTestServer 2']
  secretPass= ""
  accessDetails= false;
  log=[];
  vals=0

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated= true;
    this.serverCreationStatus= "Server created.";
    this.servers.push(this.serverName);
  }
  displayDetails(){
    this.accessDetails= !this.accessDetails;
    this.secretPass= "Tuna";
    // this.log.push(this.log.length+1);
    this.log.push(new Date);
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
