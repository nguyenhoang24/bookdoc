export type NavigationItem = NavigationLink | NavigationDropdown | NavigationSubheading;

export interface NavigationLink {
  type: 'link';
  route: string | any;
  fragment?: string;
  label: string;
  icon?: string;
  accountType?: number[];
  roles?: string[];
  menu?: string[];
  routerLinkActiveOptions?: { exact: boolean };
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
  newWindow?: boolean;
  href?: string;
}

export interface NavigationDropdown {
  type: 'dropdown';
  label: string;
  icon?: string;
  accountType?: number[];
  roles?: string[];
  menu?: string[];
  children: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}

export interface NavigationSubheading {
  type: 'subheading';
  label: string;
  children: Array<NavigationLink | NavigationDropdown>;
}
