import { VexConfigName } from './config-name.model';
import { ColorSchemeName } from './colorSchemeName';
import { CSSValue } from '../interfaces/css-value.type';

export interface VexConfig {
  id: VexConfigName;
  name: string;
  imgSrc: string;
  direction: 'ltr' | 'rtl';
  style: {
    colorScheme: ColorSchemeName,
    colors: {
      primary: {
        default: string;
        contrast: string;
      }
    };
    borderRadius: CSSValue;
    button: {
      borderRadius: CSSValue | undefined;
    }
  };
  layout: 'vertical' | 'horizontal';
  boxed: boolean;
  sidenav: {
    title: string;
    imageUrl: string;
    showCollapsePin: boolean;
    user: {
      visible: boolean;
    };
    search: {
      visible: boolean;
    };
    state: 'expanded' | 'collapsed';
  };
  toolbar: {
    fixed: boolean;
    user: {
      visible: boolean;
    }
  };
  navbar: {
    position: 'below-toolbar' | 'in-toolbar';
  };
  footer: {
    visible: boolean;
    fixed: boolean;
  };
}
