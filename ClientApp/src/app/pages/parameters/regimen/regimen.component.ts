import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LIST_REGIMEN_TYPE } from 'src/app/input.const';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Regimen } from 'src/app/_models/Regimen.model';
import { RegimenCreateUpdateComponent } from './regimen-create-update/regimen-create-update.component';
import { RegimenService } from './regimen.service';

@Component({
  selector: 'risk-behavior',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.scss']
})
export class RegimenComponent implements OnInit {
  rows: Regimen[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  listRegimenType = LIST_REGIMEN_TYPE;
  @ViewChild('manipulate') public manipulate: any;

  columns = [
    { name: 'Thứ tự', prop: 'indexNumber', visible: true },
    { name: 'Tên phác đồ', prop: 'name', visible: true },
    { name: 'Mã phác đồ', prop: 'code', visible: true },
    {
      name: 'Loại phác đồ', prop: 'line',
      visible: true, render: (row) => {
        return row?.line ? LIST_REGIMEN_TYPE.find((item) => item?.id === row?.line)?.name : ''
      }
    },
    { name: '', visible: true, prop: 'actions', renderHTML: () => this.manipulate },
  ];

  constructor(
    private service: RegimenService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      line: null,
      name: null,
      code: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
  }

  get searchObject() {
    return this.searchForm.value;
  };

  get f() { return this.searchForm.controls; };

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  };

  submitSearch() {
    this.searchForm.get('pageIndex').setValue(1);
    this.reloadTable();
  }

  public onLimitChange(event): void {
    this.searchForm.get('pageSize').setValue(parseInt(event.target.value, 10));
    this.searchForm.get('pageIndex').setValue(1);
    this.reloadTable();
  }

  setPage(pageInfo) {
    if (pageInfo.offset >= 0) {
      this.searchObject.pageIndex = pageInfo.offset + 1;
      this.searchForm.get('pageIndex').setValue(pageInfo.offset + 1);
      this.reloadTable();
    }
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  reloadTable() {
    this.isLoading = true;
    this.service.pagingRegimen(this.searchObject)
      .subscribe({
        next: (response) => {
          this.rows = response?.content?.sort((item1: Regimen, item2: Regimen) => item1?.indexNumber - item2?.indexNumber) || [];
          this.totalElements = response?.totalElements;
          this.totalPages = response?.totalPages;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
        }
      })
  }

  handleOpenPopupFormRegimen(id?: number) {
    if (id) {
      this.service.getRegimen(id).subscribe((response) => {
        if (response) {
          this.dialog.open(RegimenCreateUpdateComponent, { data: response }).afterClosed().subscribe(this.onClosePopup);
        }
      });
    } else {
      this.dialog.open(RegimenCreateUpdateComponent, { data: new Regimen() }).afterClosed().subscribe(this.onClosePopup);
    }
  }

  onClosePopup = (result) => {
    if (result) {
      this.reloadTable()
    }
  }

  delete(id: string) {
    this.service.deleteRegimen(id)
      .subscribe({
        next: () => {
          this.reloadTable();
          this.dialog.closeAll();
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

  handleDelete(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      width: '400px',
      data: {
        title: "Bạn có chắc chắn muốn xóa hành vi này không?",
        text: "Bạn sẽ không thể khôi phục hành vi này!!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }

}
