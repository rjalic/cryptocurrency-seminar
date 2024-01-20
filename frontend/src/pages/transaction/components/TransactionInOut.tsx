import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { TooltipWrapper } from '@/components/custom/TooltipWrapper.tsx';
import { HelpCircle } from 'lucide-react';

interface Props {
    vins: {
        address: string;
        amount: number;
    }[];
    vouts: {
        address: string;
        amount: number;
    }[];
}

export function TransactionInOut({ vins, vouts }: Props) {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b">
                    <CardTitle>Inputs</CardTitle>
                    <CardDescription className="ml-auto">
                        Number of inputs: {vins.length}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm p-6">
                    {vins.map((vin, idx) =>
                        <div className="grid gap-4" key={vin.address}>
                            <div className="flex items-center">
                                <div>Source Address</div>
                                <div className="font-semibold ml-auto">{vin.address}</div>
                            </div>
                            <div className="flex items-center">
                                <div>Amount:</div>
                                <div className="font-semibold ml-auto">{vin.amount.toFixed(8)} BTC</div>
                            </div>
                            {idx !== vins.length - 1 && <Separator />}
                        </div>,
                    )}
                </CardContent>
                <CardFooter className="pt-4 border-t text-md">
                    <div>Total:</div>
                    <div className="font-semibold ml-auto">
                        {vins.reduce((acc, vin) => vin.amount + acc, 0).toFixed(8)} BTC
                    </div>
                </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b">
                    <CardTitle>Outputs</CardTitle>
                    <CardDescription className="ml-auto">Number of outputs: {vouts.length}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm p-6">
                    {vouts.map((vout, idx) =>
                        <div className="grid gap-4" key={vout.address}>
                            <div className="flex items-center">
                                <div>Target Address:</div>
                                <div
                                    className="font-semibold ml-auto">{vout.address} {vout.address === 'Null Data Transaction' ?
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://btcinformation.org/en/glossary/null-data-transaction">
                                        <TooltipWrapper trigger={<HelpCircle size={16} />} content={'Click to find out more'} />
                                    </a>
                                    : null}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div>Amount:</div>
                                <div className="font-semibold ml-auto">{vout.amount.toFixed(8)} BTC
                                </div>
                            </div>
                            {idx !== vouts.length - 1 && <Separator />}
                        </div>,
                    )}
                </CardContent>
                <CardFooter className="pt-4 border-t text-md">
                    <div>Total:</div>
                    <div className="font-semibold ml-auto">
                        {vouts.reduce((acc, vout) => vout.amount + acc, 0).toFixed(8)} BTC
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}