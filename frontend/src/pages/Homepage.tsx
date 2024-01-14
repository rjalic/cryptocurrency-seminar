import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs } from "@/components/ui/tabs"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Header } from '@/components/custom/Header.tsx';
import { Maximize2 } from 'lucide-react';

export function Homepage() {
    return (
        <div key="1" className="flex flex-col h-screen">
            <Header />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-semibold text-3xl">Bitcoin Testnet Explorer</h1>
                    <div className="flex items-center text-sm gap-2">
                        <a className="font-medium" href="#" target="_blank">
                            example.com
                        </a>
                        <Separator className="h-5" orientation="vertical" />
                        <div className="text-gray-500 flex items-center gap-2 dark:text-gray-400">
                            <span className="inline-block w-2 h-2 bg-[#09CE6B] rounded-full animate-ping duration-[5000]" />
                            32 users online
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <div className="flex flex-col gap-4 items-start py-2">
                        <div className="grid gap-1">
                            <Tabs>
                                <div className="flex gap-4">
                                    <div className="font-semibold">Blocks</div>
                                    <div className="font-semibold">Transactions</div>
                                    <div className="font-semibold">Accounts</div>
                                </div>
                                <div>
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </Tabs>
                        </div>
                        <Accordion className="w-full" collapsible type="single">
                            <AccordionItem value="block-height">
                                <AccordionTrigger className="text-base">Block Height</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid gap-2">
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-height-1" />
                                            1
                                        </Label>
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-height-2" />
                                            2
                                        </Label>
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-height-3" />
                                            3
                                        </Label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="block-hash">
                                <AccordionTrigger className="text-base">Block Hash</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid gap-2">
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-hash-1" />
                                            1
                                        </Label>
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-hash-2" />
                                            2
                                        </Label>
                                        <Label className="flex items-center gap-2 font-normal">
                                            <Checkbox id="block-hash-3" />
                                            3
                                        </Label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        <Card className="relative overflow-hidden">
                            <CardHeader className="flex flex-row items-center border-b">
                                <CardTitle>Block Details</CardTitle>
                                <CardDescription className="ml-auto">Height: 1</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 text-sm p-6">
                                <div className="flex items-center">
                                    <div>Block Hash:</div>
                                    <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Timestamp:</div>
                                    <div className="font-semibold ml-auto">1642582400</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Transactions:</div>
                                    <div className="font-semibold ml-auto">10</div>
                                </div>
                            </CardContent>
                            <CardFooter className="pb-4 px-6 justify-center bg-gradient-to-b from-background/50 to-background absolute inset-x-0 bottom-0">
                                <Button className="gap-2 rounded-full bg-white dark:bg-gray-950" size="sm" variant="outline">
                                    View Transactions
                                    <Maximize2 className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="relative overflow-hidden">
                            <CardHeader className="flex flex-row items-center border-b">
                                <CardTitle>Transactions</CardTitle>
                                <CardDescription className="ml-auto">10</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 text-sm p-6">
                                <div className="flex items-center">
                                    <div>Transaction Hash:</div>
                                    <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                                </div>
                                <div className="flex items-center">
                                    <div>From:</div>
                                    <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                                </div>
                                <div className="flex items-center">
                                    <div>To:</div>
                                    <div className="font-semibold ml-auto">0x1234567890abcdef</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Amount:</div>
                                    <div className="font-semibold ml-auto">1000</div>
                                </div>
                            </CardContent>
                            <CardFooter className="pb-4 px-6 justify-center bg-gradient-to-b from-background/50 to-background absolute inset-x-0 bottom-0">
                                <Button className="gap-2 rounded-full bg-white dark:bg-gray-950" size="sm" variant="outline">
                                    View Transaction
                                    <Maximize2 className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="relative overflow-hidden">
                            <CardHeader className="flex flex-row items-center border-b">
                                <CardTitle>Account Details</CardTitle>
                                <CardDescription className="ml-auto">Address: 0x1234567890abcdef</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 text-sm p-6">
                                <div className="flex items-center">
                                    <div>Balance:</div>
                                    <div className="font-semibold ml-auto">1000</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Transactions:</div>
                                    <div className="font-semibold ml-auto">10</div>
                                </div>
                            </CardContent>
                            <CardFooter className="pb-4 px-6 justify-center bg-gradient-to-b from-background/50 to-background absolute inset-x-0 bottom-0">
                                <Button className="gap-2 rounded-full bg-white dark:bg-gray-950" size="sm" variant="outline">
                                    View Transactions
                                    <Maximize2 className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
