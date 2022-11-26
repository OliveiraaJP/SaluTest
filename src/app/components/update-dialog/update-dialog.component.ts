import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClinicasService } from 'src/app/services/clinicas.service';
import { Clinica } from 'src/app/types/Clinica';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  public clinicaForm!: FormGroup;
  constructor(
    private clinicaService: ClinicasService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Clinica,
  ) { }

  ngOnInit(): void {
    this.clinicaForm = this.fb.group({
      nome: [this.data.nome, [Validators.required]],
      cnpj: [this.data.cnpj, [Validators.required]],
      especialidade: [this.data.especialidade, [Validators.required]],
      telefone: [this.data.telefone, [Validators.required]],
      endereço: [this.data.endereço, [Validators.required]],
      numero: [this.data.numero, [Validators.required]],
      bairro: [this.data.bairro, [Validators.required]],
      cidade: [this.data.cidade, [Validators.required]],
      estado:[this.data.estado, [Validators.required]],
      status: [this.data.status, [Validators.required]],
      preço: [this.data.preço, [Validators.required]],
      inicio: [this.data.atendimento.inicio, [Validators.required]],
      fim: [this.data.atendimento.fim, [Validators.required]]
    });
  }

  editClinica() {
    const body = this.fb.group({
      ...this.clinicaForm.value,
      atendimento:{
        inicio: this.clinicaForm.get('inicio')?.value,
        fim: this.clinicaForm.get('fim')?.value
      }
    })
    this.clinicaService.updateClinica(body.value).subscribe(result => console.log(result));
    this.dialogRef.close();
    this.clinicaForm.reset();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.clinicaForm.reset();
  }

}
