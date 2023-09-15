import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { breadcrumb } from 'src/app/input.const';
import { FileManagementService } from '../file-management.service';

@Component({
  selector: 'file-management-tab-first',
  templateUrl: './file-management-tab-first.component.html',
  styleUrls: ['./file-management-tab-first.component.scss']
})
export class FileManagementTabFirstComponent implements OnInit {

  form?: UntypedFormGroup;

  fileName?: string = '';

  xmlData?: string = '';

  fileXML: any;

  token?: string = '1';

  idToken?: string = '1' ;

  username?: string  = '1';

  password?: string  = '123456';

  soLuongHoSo?: string  = '23';

  maTinh?: string= '1';

  maCSKCD?: string= '79613';

  @Output() next = new EventEmitter();

  constructor(private fb: UntypedFormBuilder,
       private cdr: ChangeDetectorRef,
      private loading: NgxSpinnerService,
      private service: FileManagementService,
      private toast: ToastrService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({});
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  readFile(event){
    const file = event.target.files[0];
    this.fileXML = file;
    this.fileName = file?.name;
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      this.xmlData = xmlData;
    };
    reader.readAsText(file);
  }



  nextTab(){
    this.loading.show();
    setTimeout(() => {
      this.loading.hide();

    }, 800);
    if (this.fileXML) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.fileXML);
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;

        this.service.sendInsuranceApplication(arrayBuffer,
          this.token, this.idToken, this.username, this.password,
          this.soLuongHoSo, this.maTinh, this.maCSKCD ).subscribe({
            next: (response) => {
              if (response) {
                this.toast.success("Tải tập tin thành công","Thông báo");
                this.next.emit();
              }
            },
            error: (error) => {

              this.toast.error("Tải tập tin thất bại", "Thông báo");
            }


          });

      };
    }

  }

  triggerSelectFile(fileInput: HTMLInputElement){
    fileInput.click();
  }

}
