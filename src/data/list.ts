import { type MediaQueryItemModel } from '@/components/MediaQueryItem.vue'

export const items: MediaQueryItemModel[] = [
  // Media queries that take specific keyword values only
  { query: 'any-pointer', values: ['none', 'coarse', 'fine'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer' },
  { query: 'any-hover', values: ['none', 'hover'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover' },
  { query: 'aspect-ratio', values: ['1/1', '4/3', '3/2', '16/10', '16/9', '21/9', '32/9'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio' },
  { query: 'color', values: ['0', '1', '8', '16', '24', '32', '48'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color' },
  {  query: 'color-gamut', values: ['srgb', 'p3', 'rec2020'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut' },
  { query: 'color-index', values: ['0', '256', '32768', '65536', '16777216'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index' },
  { query: 'display-mode', values: ['browser', 'fullscreen', 'minimal-ui', 'picture-in-picture', 'standalone', 'window-controls-overlay'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode' },
  { query: 'dynamic-range', values: ['standard', 'high'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range' },
  { query: 'forced-colors', values: ['none', 'active'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors' },
  { query: 'grid', values: ['0', '1'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid' },
  { query: 'hover', values: ['none', 'hover'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover' },
  { query: 'inverted-colors', values: ['none', 'inverted'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors' },
  { query: 'monochrome', values: ['0', '1'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome' },
  { query: 'orientation', values: ['portrait', 'landscape'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation' },
  { query: 'overflow-block', values: ['none', 'scroll', 'optional-paged', 'paged'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block' },
  { query: 'overflow-inline', values: ['none', 'scroll'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline' },
  { query: 'pointer', values: ['none', 'coarse', 'fine'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer' },
  { query: 'prefers-color-scheme', values: ['light', 'dark'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme' },
  { query: 'prefers-contrast', values: ['no-preference', 'more', 'less'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast' },
  { query: 'prefers-reduced-data', values: ['no-preference', 'reduce'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data' },
  { query: 'prefers-reduced-motion', values: ['no-preference', 'reduce'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion' },
  { query: 'prefers-reduced-transparency', values: ['no-preference', 'reduce'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency' },
  { query: 'resolution', values: ['72dpi', '96dpi', '120dpi', '144dpi', '192dpi', '240dpi', '288dpi', '384dpi'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution' },
  { query: 'scan', values: ['progressive', 'interlace'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scan' },
  { query: 'scripting', values: ['none', 'initial-only', 'enabled'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting' },
  { query: 'update', values: ['none', 'slow', 'fast'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update' },
  { query: 'video-dynamic-range', values: ['standard', 'high'], docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range' }
]