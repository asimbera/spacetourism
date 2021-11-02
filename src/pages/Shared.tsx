import { Variants } from 'framer-motion';

export const PageVariant: Variants = {
  initial: { opacity: 0, y: '-60%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '60%' },
};
