import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';

export function TransactionInOut() {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b">
                    <CardTitle>Inputs</CardTitle>
                    <CardDescription className="ml-auto">Number of inputs: 2</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm p-6">
                    {Array.from({ length: 2 }).map((_, i) => i + 1).map((_) =>
                        <>
                            <div className="flex items-center">
                                <div>Source Address</div>
                                <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                            </div>
                            <div className="flex items-center">
                                <div>Amount:</div>
                                <div className="font-semibold ml-auto">0.01000302 BTC</div>
                            </div>
                            <Separator />
                        </>
                    )}
                </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b">
                    <CardTitle>Outputs</CardTitle>
                    <CardDescription className="ml-auto">Number of outputs: 3</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm p-6">
                    {Array.from({ length: 3 }).map((_, i) => i + 1).map((_) =>
                        <>
                            <div className="flex items-center">
                                <div>Target Address:</div>
                                <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                            </div>
                            <div className="flex items-center">
                                <div>Amount:</div>
                                <div className="font-semibold ml-auto">0.01000302 BTC</div>
                            </div>
                            <Separator />
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}