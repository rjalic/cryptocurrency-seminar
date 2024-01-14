import { Bitcoin, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input.tsx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';

interface SearchState {
    type: 'blocks' | 'transactions' | 'addresses';
    query: string;
}

export function Header() {
    const [search, setSearch] = useReducer((state: SearchState, newState: Partial<SearchState>) => ({ ...state, ...newState }), {
        type: 'blocks',
        query: '',
    });

    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-center">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
                <Bitcoin className="p-1 w-7 h-7 bg-[#f7931a] text-white rounded-full" />
                <span className="whitespace-nowrap">Bitcoin Testnet Explorer</span>
            </Link>
            <form className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4 mx-auto">
                <div className="relative flex-1 ml-auto sm:flex-initial flex items-center gap-2">
                    <Input className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                           placeholder="Search..."
                           type="search"
                           onChange={(e) => setSearch({ query: e.target.value })}
                           value={search.query} />
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="outline">
                                <Filter className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuRadioGroup value={search.type}>
                                <DropdownMenuRadioItem
                                    onClick={() => setSearch({ type: 'blocks' })}
                                    value="blocks">
                                    Blocks
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    onClick={() => setSearch({ type: 'transactions' })}
                                    value="transactions">
                                    Transactions
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    onClick={() => setSearch({ type: 'addresses' })}
                                    value="addresses">
                                    Addresses
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Button type="submit">Search</Button>
            </form>
        </header>
    );
}
