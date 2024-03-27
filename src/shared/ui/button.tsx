import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/shared/lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-2xl/7 font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground focus-visible:bg-muted hover:bg-muted active:text-muted-foreground',
        outline:
          'border border-foreground bg-transparent focus-visible:bg-muted/50 hover:bg-muted/50 active:text-muted-foreground',
        muted:
          'bg-muted text-secondary-foreground focus-visible:text-primary hover:text-primary active:text-muted focus-visible:bg-primary-foreground hover:bg-primary-foreground',
        card: 'bg-card text-secondary-foreground focus-visible:text-card hover:text-card active:text-card-darker focus-visible:bg-card-foreground hover:bg-card-foreground',
        accent:
          'bg-accent text-accent-foreground/85 focus-visible:text-accent hover:text-accent active:text-accent-darker focus-visible:bg-accent-foreground hover:bg-accent-foreground',
      },
      size: {
        default: 'h-12 px-4',
        sm: 'h-9 rounded-md px-4',
        lg: 'h-14 rounded-md px-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
