import { NUMBER_OF_BOXES } from '~/constants';

export function getColors(): string[] {
  return Array.from({ length: NUMBER_OF_BOXES }).map(() => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  });
}
