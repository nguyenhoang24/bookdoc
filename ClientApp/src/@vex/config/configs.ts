import { mergeDeep } from '../utils/merge-deep';
import { VexConfigName } from './config-name.model';
import { VexConfig } from './vex-config.interface';
import { ColorSchemeName } from './colorSchemeName';
import { colorVariables } from '../components/config-panel/color-variables';

const defaultConfig: VexConfig = {
  id: VexConfigName.apollo,
  name: 'Apollo',
  style: {
    colorScheme: ColorSchemeName.default,
    colors: {
      primary: colorVariables.blue
    },
    borderRadius: {
      value: 0.25,
      unit: 'rem'
    },
    button: {
      borderRadius: undefined
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'PATH 130',
    imageUrl: 'assets/img/demo/logo.png',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};

export const configs: VexConfig[] = [
  defaultConfig,
  mergeDeep({ ...defaultConfig }, {
    id: VexConfigName.poseidon,
    name: 'Poseidon',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/poseidon.png',
    style: {
      borderRadius: {
        value: 0.5,
        unit: 'rem'
      },
      button: {
        borderRadius: {
          value: 9999,
          unit: 'px'
        }
      }
    },
    sidenav: {
      user: {
        visible: true
      },
      search: {
        visible: true
      }
    },
    toolbar: {
      user: {
        visible: false
      }
    },
    footer: {
      fixed: false
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: VexConfigName.hermes,
    name: 'Hermes',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      },
    },
    toolbar: {
      fixed: false
    },
    footer: {
      fixed: false
    },
  }),
  mergeDeep({ ...defaultConfig }, {
    id: VexConfigName.ares,
    name: 'Ares',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      },
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    },
  }),
  mergeDeep({ ...defaultConfig }, {
    id: VexConfigName.zeus,
    name: 'Zeus',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    sidenav: {
      state: 'collapsed'
    },
  }),
  mergeDeep({ ...defaultConfig }, {
    id: VexConfigName.ikaros,
    name: 'Ikaros',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      },
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  })
];
