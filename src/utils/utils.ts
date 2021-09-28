export function format(first: string, second: string, third: string, forth: string): string[] {
  return [first || '', second ? ` ${second}` : '', third ? ` ${third}` : '', forth ? ` ${forth}` : ''];
}
