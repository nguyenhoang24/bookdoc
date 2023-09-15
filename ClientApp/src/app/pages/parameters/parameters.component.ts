import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'vex-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  @Input() items: any[] = [
    {
      label: 'Dịch vụ',
      route: 'service',
    },
    {
      label: 'Công việc',
      route: 'occupation',
    },
    {
      label: 'Dân tộc',
      route: 'ethnics',
    },
    {
      label: 'Quốc gia',
      route: 'country',
    },
    {
      label: 'Đường lây nhiễm',
      route: 'transmission-route',
    },
    {
      label: 'Đối tượng có nguy cơ cao',
      route: 'population-group',
    },
    {
      label: 'Hành vi nguy cơ',
      route: 'risk-behaviors',
    },
    {
      label: 'Sinh phẩm',
      route: 'reagents',
    },
    {
      label: 'Dự án',
      route: 'project',
    },
    {
      label: 'Phác đồ điều trị',
      route: 'regimen',
    },
    {
      label: 'Hiện trạng cư trú',
      route: 'permanent-address-status',
    },
    {
      label: 'Bậc phác đồ điều trị',
      route: 'treatment-regimen-stage',
    },
    {
      label: 'Kết quả Xn kháng nguyên kháng thể',
      route: 'result-anti',
    },
    {
      label: 'Phương pháp sàng lọc',
      route: 'test-method',
    },
    {
      label: 'Loại bảo hiểm y tế',
      route: 'health-insurance',
    },
    {
      label: 'Loại bệnh nhân',
      route: 'customer-type',
    },
    {
      label: 'Loại dịch vụ',
      route: 'fixed-service',
    }
  ];

  searchCtrl = new UntypedFormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  constructor() { }

  ngOnInit() {
  }

}
