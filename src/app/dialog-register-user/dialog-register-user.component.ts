import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-register-user',
  templateUrl: './dialog-register-user.component.html',
  styleUrls: ['./dialog-register-user.component.scss'],
})
export class DialogRegisterUserComponent {
  form: FormGroup = new FormGroup({
    emailFormController: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    nameFormController: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterUserComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public getErrorMessage() {
    if (this.form.controls['emailFormController'].hasError('required')) {
      return 'Este campo é requirido!';
    }
    return this.form.controls['emailFormController'].hasError('email')
      ? 'Email inválido!'
      : '';
  }

  public onFormSubmit() {
    const name = this.form.controls['nameFormController'].value;
    const email = this.form.controls['emailFormController'].value;

    console.log(`
      Usuário cadastrado:
      Nome: ${name}
      Email: ${email}
    `)

    this.openSnackBar(true, name);
  }

  private openSnackBar(isSuccess: boolean, name) {
    const message = isSuccess
      ? `Usuário: ${name} foi cadastrado com sucesso!`
      : `Erro ao cadastrar o usuário: ${name}`;

    this.snackBar.open(message, null, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  public get isFormValid() {
    return (
      this.form.controls['nameFormController'].valid &&
      this.form.controls['emailFormController'].valid
    );
  }
}
