'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:hover:bg-primary/90',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:hover:bg-muted/80',
          success:
            'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-primary/20 group-[.toast]:[&>svg]:text-primary',
          error:
            'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-destructive/20 group-[.toast]:[&>svg]:text-destructive',
          info: 'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-primary/20 group-[.toast]:[&>svg]:text-primary',
          warning:
            'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-secondary/20 group-[.toast]:[&>svg]:text-secondary',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
