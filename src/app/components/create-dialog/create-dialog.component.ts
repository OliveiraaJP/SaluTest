import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClinicasService } from 'src/app/services/clinicas.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  public clinicaForm!: FormGroup;
  constructor(
    private clinicaService: ClinicasService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateDialogComponent>
  ) { }

  ngOnInit(): void {
    this.clinicaForm = this.fb.group({
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      especialidade: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      endereço: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado:['', [Validators.required]],
      status: ['Ativo', [Validators.required]],
      preço: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fim: ['', [Validators.required]]
      

    });
  }

  cancel() {
    this.dialogRef.close();
    this.clinicaForm.reset();
  }

  addClinica() {
    const body = this.fb.group({
      ...this.clinicaForm.value,
      atendimento:{
        inicio: this.clinicaForm.get('inicio')?.value,
        fim: this.clinicaForm.get('fim')?.value
      }
    })
    this.clinicaService.postClinica(body.value).subscribe(result => console.log(result));
    this.dialogRef.close();
    this.clinicaForm.reset();
    window.location.reload();
  }

}
