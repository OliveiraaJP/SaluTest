import { Component, OnInit } from '@angular/core';
import { ClinicasService } from 'src/app/services/clinicas.service';
import { Clinica } from 'src/app/types/Clinica';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clinicas$: Clinica[] = [];
  displayedColumns: string[] = ['nome', 'especialidade', 'endereço', 'status', 'horário', 'actions'];


  constructor(private clinicasService: ClinicasService) {
    this.getClinicas();
  }

  ngOnInit(): void {
  }

  getClinicas(): void {
    this.clinicasService.getAll().subscribe((clinicasResponse) => this.clinicas$ = clinicasResponse);
  }

}
