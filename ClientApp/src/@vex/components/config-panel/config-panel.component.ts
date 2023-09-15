import { Component, Inject } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { map } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';
import { MatRadioChange } from '@angular/material/radio';
import { VexConfigName } from '../../config/config-name.model';
import { ColorVariable, colorVariables } from './color-variables';
import { DOCUMENT } from '@angular/common';
import { ColorSchemeName } from '../../config/colorSchemeName';
import { Observable } from 'rxjs';
import { VexConfig } from '../../config/vex-config.interface';
import { CSSValue } from '../../interfaces/css-value.type';
import { isNil } from '../../utils/isNil';
import { defaultRoundedButtonBorderRadius } from '../../config/constants';

@Component({
  selector: 'vex-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent {

  configs: VexConfig[] = this.configService.configs;
  colorVariables: Record<string, ColorVariable> = colorVariables;

  config$: Observable<VexConfig> = this.configService.config$;

  isRTL$: Observable<boolean> = this.config$.pipe(
    map(config => config.direction === 'rtl')
  );

  isDark$: Observable<boolean> = this.config$.pipe(
    map(config => config.style.colorScheme === ColorSchemeName.dark)
  );

  borderRadius$: Observable<number> = this.config$.pipe(
    map(config => config.style.borderRadius.value)
  );

  ConfigName = VexConfigName;
  ColorSchemeName = ColorSchemeName;
  selectedColor = colorVariables.blue;

  roundedCornerValues: CSSValue[] = [
    {
      value: 0,
      unit: 'rem'
    },
    {
      value: 0.25,
      unit: 'rem'
    },
    {
      value: 0.5,
      unit: 'rem'
    },
    {
      value: 0.75,
      unit: 'rem'
    },
    {
      value: 1,
      unit: 'rem'
    },
    {
      value: 1.25,
      unit: 'rem'
    },
    {
      value: 1.5,
      unit: 'rem'
    },
    {
      value: 1.75,
      unit: 'rem'
    }
  ];

  roundedButtonValue: CSSValue = defaultRoundedButtonBorderRadius;

  constructor(private configService: ConfigService,
              private layoutService: LayoutService,
              @Inject(DOCUMENT) private document: Document) { }

  setConfig(layout: VexConfigName, colorScheme: ColorSchemeName): void {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }

  selectColor(color: ColorVariable): void {
    this.selectedColor = color;
    this.configService.updateConfig({
      style: {
        colors: {
          primary: {
            default: color.default,
            contrast: color.contrast
          }
        }
      }
    });
  }

  isSelectedColor(color: ColorVariable): boolean {
    return color === this.selectedColor;
  }

  enableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.dark
      }
    });
  }

  disableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.default
      }
    });
  }

  layoutRTLChange(change: MatSlideToggleChange): void {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }

  toolbarPositionChange(change: MatRadioChange): void {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }

  footerVisibleChange(change: MatSlideToggleChange): void {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }

  footerPositionChange(change: MatRadioChange): void {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }

  isSelectedBorderRadius(borderRadius: CSSValue, config: VexConfig): boolean {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }

  selectBorderRadius(borderRadius: CSSValue): void {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }

  isSelectedButtonStyle(buttonStyle: CSSValue | undefined, config: VexConfig): boolean {
    if (isNil(config.style.button.borderRadius) && isNil(buttonStyle)) {
      return true;
    }

    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }

  selectButtonStyle(borderRadius: CSSValue | undefined): void {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }
}
