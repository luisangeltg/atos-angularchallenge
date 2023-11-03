import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { ChallengeDescriptionComponent } from '../challenge-description/challenge-description.component';
import { IPokemon, IPokemonObject } from 'src/app/interfaces/pokemon.interface';
import { ApiService } from 'src/app/services/api-service';
import { Observable } from 'rxjs';
//material imports
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { staticPokemonUsers } from 'src/app/services/static-users';
import { AlertWarningComponent } from '../shared/alert-warning/alert-warning.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'avatar'];
  dataSource!: MatTableDataSource<IPokemon>;
  flagLoadingData: boolean = true;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  public pokemonsFiltered: IPokemon[] = [];

  constructor(
    private pokeService: ApiService,
    private _snackBar: MatSnackBar
  ) {
    this.pokeService.getPokeUsers().subscribe( (resp) => {
      this.pokemonsFiltered = resp.value
      console.log(resp.value)
      this.dataSource = new MatTableDataSource(this.pokemonsFiltered);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.flagLoadingData = false
    },
    (error) => {
      this.openAlerError()
      this.flagLoadingData = false
    })
   }
  ngAfterViewInit () {
    console.log(2)
    // console.log(this.pokemonsFiltered.length)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAlerError() {
    this._snackBar.openFromComponent(AlertWarningComponent, {
      duration: 4000,
    });
  }

}
