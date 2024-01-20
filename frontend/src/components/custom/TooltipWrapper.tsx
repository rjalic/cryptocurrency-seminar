import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { ReactNode } from 'react';

interface Props {
    content: ReactNode;
    children: ReactNode;
}

export function TooltipWrapper({ children, content }: Props) {
    return (
        <TooltipProvider delayDuration={500}>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}