import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  title = "Compétences"
  skills = [
    {
      name: 'Développement WordPress',
      logo: 'assets/wordpress.png'
    },
    {
      name: 'Développement Front-end',
      logo: null
    },
    {
      name: 'Webdesign',
      logo: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
