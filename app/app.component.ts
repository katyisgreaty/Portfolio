import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{name}}</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <div class="project">
      <h3>{{firstProject.name}}</h3>
      <a href="#">{{firstProject.url}}</a>
    </div>
  </div>

  `
})

export class AppComponent {
  name: string = 'Katy Daviscourt';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstProject: Project = new Project("InterpretGO", "www.interpretgoapp.com", "www.github.com/katyisgreaty/InterpretGO");
  secondProject: Project = new Project("Political Contributions Tracker", "www.politicontribution.co", "www.github.com/katyisgreaty/Contributions");
  thirdProject: Project = new Project("Gummy Bears", "gummybearwebsite.coool", "www.github.com/katyisgreaty/GummyBears");

}

export class Project {
  constructor(public name: string, public url: string, public github: string) { }
}
