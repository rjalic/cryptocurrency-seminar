import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { ReactNode } from 'react';

interface Props {
    trigger: ReactNode;
    content: ReactNode;
}

export function TooltipWrapper({ trigger, content }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{trigger}</TooltipTrigger>
                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}