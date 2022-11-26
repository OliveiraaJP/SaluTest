import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { ClinicasService } from 'src/app/services/clinicas.service';
import { Clinica } from 'src/app/types/Clinica';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {
  myParam!: string;
  agendamentos!: any;
  clinicaName!: any;
  constructor(private route: ActivatedRoute, private agendamentosService: AgendamentosService, private clinicaService: ClinicasService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.myParam = params['id']);
    this.clinicaService.getOne(this.myParam).subscribe(response => this.clinicaName = response);
    this.agendamentosService.get(this.myParam).subscribe(response => this.agendamentos = response);
  }

  show(){
    console.log(this.agendamentos);
    console.log(this.myParam);
    console.log(this.clinicaName);
  }
}
