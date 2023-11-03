import { Component, OnInit } from '@angular/core';
import { staticPokemonUsers } from 'src/app/services/static-users';

@Component({
  selector: 'app-challenge-description',
  templateUrl: './challenge-description.component.html',
  styleUrls: ['./challenge-description.component.scss']
})
export class ChallengeDescriptionComponent implements OnInit {
  exampleData = staticPokemonUsers.slice(0, 2)
  constructor() { }

  ngOnInit(): void {
  }

}
