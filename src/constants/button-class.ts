export const buttonBase
  = 'flex items-center justify-center gap-3 rounded-lg border-2 p-2 transition-all ease-in-out cursor-pointer'

export enum ButtonSize {
  SMALL = 'h-6 text-xs',
  MEDIUM = 'h-8 font-semibold text-sm px-4 w-fit',
  SQUARE = 'w-12 h-12 aspect-square',
}

export enum ButtonVariant {
  PRIMARY = 'bg-primary border-neutral-950 hover:bg-primary/75 delay-50 shadow-hard',
  GHOST = 'bg-transparent border-transparent hover:bg-neutral-100/10 delay-50 dark:text-white',
  DANGER = 'bg-danger border-neutral-950 hover:bg-danger/75 delay-50 shadow-hard',
}
