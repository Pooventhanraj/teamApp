import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember: string="";
  members: string[] =[];
  errorMessage: string="";
  numberOfTeams :number|"" ="";
  teams: string[][] = [];
  

  addMember()
  {
    if(this.newMember=='')
    {
      this.errorMessage="input is empty";
      return;
    }
    this.members.push(this.newMember);
    this.newMember='';
    console.log(this.members)
  }
  OnInput(member :string)
  {
    this.newMember = member;
    console.log(this.newMember);
  }
  onNumberOfTeamInput(value : string)
  {
    this.numberOfTeams = Number(value);
    console.log(this.numberOfTeams);
  }
  generateTeams()
{
  console.log("called");
  if (this.members.length < this.numberOfTeams) {
    this.errorMessage = 'Not enough members';
    return;
  }
  const allMembers = [...this.members];
   this.teams = [];
    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        console.log(member);
        if (this.teams[i]) {
          this.teams[i].push(member);
          console.log(this.teams[i]);
        } else {
          this.teams[i] = [member];
          console.log(this.teams[i]);
        }
      }
    }
   this.numberOfTeams ="";
   this.members=[];
   console.log(this.teams);
}
}

