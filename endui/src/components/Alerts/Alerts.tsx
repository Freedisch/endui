'use client';

import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/utils';
import { AlertTriangle, CheckCircle, Info, X, XCircle } from 'lucide-react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        destructive: 'border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600 bg-red-50 dark:bg-red-950/30',
        warning: 'border-yellow-500/50 text-yellow-800 dark:border-yellow-500 [&>svg]:text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30',
        success: 'border-green-500/50 text-green-800 dark:border-green-500 [&>svg]:text-green-600 bg-green-50 dark:bg-green-950/30',
        info: 'border-blue-500/50 text-blue-800 dark:border-blue-500 [&>svg]:text-blue-600 bg-blue-50 dark:bg-blue-950/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, dismissible, onDismiss, children, ...props }, ref) => {
    const getIcon = () => {
      switch (variant) {
        case 'destructive':
          return <XCircle className="h-4 w-4" />;
        case 'warning':
          return <AlertTriangle className="h-4 w-4" />;
        case 'success':
          return <CheckCircle className="h-4 w-4" />;
        case 'info':
          return <Info className="h-4 w-4" />;
        default:
          return <Info className="h-4 w-4" />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {getIcon()}
        <div className="flex-1">
          {children}
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
