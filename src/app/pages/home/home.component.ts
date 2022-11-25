import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateDialogComponent } from 'src/app/components/create-dialog/create-dialog.component';
import { ClinicasService } from 'src/app/services/clinicas.service';
import { Clinica } from 'src/app/types/Clinica';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clinicas$!: MatTableDataSource<Clinica>;
  displayedColumns: string[] = ['nome', 'especialidade', 'endereço', 'status', 'horário', 'actions'];


  constructor(private clinicasService: ClinicasService,public dialog: MatDialog) {
    this.getClinicas();
  }

  ngOnInit(): void {
  }

  getClinicas(): void {
    this.clinicasService.getAll().subscribe((clinicasResponse) => this.clinicas$ = new MatTableDataSource(clinicasResponse));
  }

  deleteClinica(clinica: Clinica): void {
    const bool = window.confirm('Deseja tornar a clinica inativa?');
    if (bool) this.clinicasService.delete(clinica).subscribe((response) => console.log(response));
  }

  activeClinica(clinica: Clinica): void {
    const bool = window.confirm('Deseja abrir a clinica de novo?');
    if (bool) this.clinicasService.active(clinica).subscribe((response) => console.log(response));
  }

  applyFilter($event: Event) {
    const filterCLinicas = ($event.target as HTMLInputElement).value;
    this.clinicas$.filter = filterCLinicas.trim().toLowerCase()
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width:'75%'
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('object');
    })
  }
}
