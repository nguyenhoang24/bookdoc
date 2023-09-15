import {NavigationItem} from "src/@vex/interfaces/navigation-item.interface";

export const navigationVAAC: NavigationItem[] = [
  {
    type: 'link',
    label: 'Xem danh sách file',
    icon: 'mat:trending_up',
    route: '/submitted-file',
    routerLinkActiveOptions: { exact: true },
    // accountType: [ACCONT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_DISTRICT,ACCOUNT_TYPE_PROVINCE,ACCOUNT_TYPE_WARD,ACCOUNT_TYPE_UNDER_DISTRICT,ACCOUNT_TYPE_UNDER_PROVINCE],
    // roles: [ROLE_EDIT,ROLE_ADMIN,ROLE_CONFIRM,ROLE_VIEW],
  },
  {
    type: 'dropdown',
    label: 'Quản lý đơn vị',
    icon: 'mat:description',
    // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_PROVINCE],
    // roles: [ROLE_HIV_INFO_ADMIN],
    children: [
      {
        // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC],
        // roles: [ROLE_ADMIN],
        type: 'link',
        label: 'Danh sách đơn vị',
        route: '/list-unit',
        routerLinkActiveOptions: { exact: true }
      },
      {
        // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_DISTRICT,ACCOUNT_TYPE_PROVINCE,ACCOUNT_TYPE_WARD],
        // roles: [ROLE_ADMIN],
        type: 'link',
        label: 'Quản lý nhân viên',
        route: '/employee-management',
        routerLinkActiveOptions: { exact: true }
      },
    ]
  },
  {
    type: 'dropdown',
    label: 'Cấu hình',
    icon: 'mat:trending_up',
    // routerLinkActiveOptions: { exact: true },
    children: [
      {
        type: 'link',
        label: 'Quản lý danh mục thuốc',
        route: '/drug',
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: 'link',
        label: 'Quản lý danh mục mã ICD 10',
        route: '/icd-code',
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: 'link',
        label: 'Quản lý danh mục phác đồ',
        route: '/regimen',
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: 'link',
        label: 'Quản lý địa danh hành chính',
        route: '/setting/location',
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: 'link',
        label: 'Quản lý thông tin đơn vị',
        route: '/setting',
        routerLinkActiveOptions: { exact: true }
      },
      {
        // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC],
        // roles: [ROLE_ADMIN],
        type: 'link',
        label: 'Quản lý tài khoản',
        route: '/setting/account',
        routerLinkActiveOptions: { exact: true }
      },
    ]
    // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_DISTRICT,ACCOUNT_TYPE_PROVINCE,ACCOUNT_TYPE_WARD,ACCOUNT_TYPE_UNDER_DISTRICT,ACCOUNT_TYPE_UNDER_PROVINCE],
    // roles: [ROLE_EDIT,ROLE_ADMIN,ROLE_CONFIRM,ROLE_VIEW],
  },
];

//1: tk VAAC 2:tk khu vuc 3:tk tinh 4:dvtt tnh 5: tk huyen 6:dvtt huyen 7:tk xa
export const navigation: NavigationItem[] = [
  {
    type: 'link',
    label: 'Quản lý tệp tin',
    icon: 'mat:trending_up',
    route: '/ttyt/file-management',
    routerLinkActiveOptions: { exact: true },
    // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_DISTRICT,ACCOUNT_TYPE_PROVINCE,ACCOUNT_TYPE_WARD,ACCOUNT_TYPE_UNDER_DISTRICT,ACCOUNT_TYPE_UNDER_PROVINCE],
    // roles: [ROLE_EDIT,ROLE_ADMIN,ROLE_CONFIRM,ROLE_VIEW],
  },
  {
    type: 'dropdown',
    label: 'Thông tin cá nhân',
    icon: 'mat:description',
    // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_PROVINCE],
    // roles: [ROLE_ADMIN],
    children: [
      {
        // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC],
        // roles: [ROLE_ADMIN],
        type: 'link',
        label: 'Thông tin đơn vị',
        route: '/ttyt/unit-information',
        routerLinkActiveOptions: { exact: true }
      },
      {
        // accountType: [ACCOUNT_TYPE_AREA,ACCOUNT_TYPE_VAAC,ACCOUNT_TYPE_DISTRICT,ACCOUNT_TYPE_PROVINCE,ACCOUNT_TYPE_WARD],
        // roles: [ROLE_ADMIN],
        type: 'link',
        label: 'Đổi thông tin đơn vị',
        route: '/ttyt/change-unit-information',
        routerLinkActiveOptions: { exact: true }
      },

    ]
  },
];
