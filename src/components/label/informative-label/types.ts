export enum InformativeLabelVariant {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface InformativeLabelProps {
  variant?: InformativeLabelVariant;
}
