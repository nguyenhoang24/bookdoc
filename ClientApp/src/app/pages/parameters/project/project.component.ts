import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Project } from 'src/app/_models/project.model';
import { ProjectCreateUpdateComponent } from './project-create-update/project-create-update.component';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  rows: Project[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;

  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Tên', prop: 'name', visible: true }
  ];
  constructor(
    private service: ProjectService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
  }

  get f() {
    return this.searchForm.controls;
  };

  get searchObject() {
    return this.searchForm.value;
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
      this.searchForm.get('pageIndex').setValue(pageInfo.offset + 1);
      this.reloadTable();
    }

  }

  reloadTable() {
    this.isLoading = true;
    this.service.pagingProject(this.searchObject)
      .subscribe({
        next: (response) => {
          this.rows = response?.content;
          this.totalElements = response?.totalElements;
          this.totalPages = response?.totalPages;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  create() {
    this.dialog.open(ProjectCreateUpdateComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(project: Project) {
    this.service.getProject(project.id)
      .subscribe({
        next: (response) => {
          this.dialog.open(ProjectCreateUpdateComponent, {
            data: response
          }).afterClosed().subscribe(result => {
            this.reloadTable();
          });
        }, error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }


  delete(id: string) {
    this.service.deleteProject(id)
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
        title: "Bạn có chắc muón xoá dự án này không?",
        text: "Bạn sẽ không thể khôi phục lại dự án này ",
        onYesClick: () => { this.delete(id) }
      }
    });
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
}
