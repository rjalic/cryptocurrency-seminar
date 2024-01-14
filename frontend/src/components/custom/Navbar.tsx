import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu.tsx';
import { Book, BookA, FileEdit, LogIn, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <NavigationMenu orientation="vertical" className="bg-primary">
            <div className="flex flex-col h-full justify-between mx-2">
                <NavigationMenuList className="flex-col gap-4 mt-4">
                    <NavigationMenuItem className="bg-green-600 rounded-3xl p-2">
                        <FileEdit size={32} stroke="white" />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="bg-green-600 rounded-3xl p-2">
                        <Book size={32} stroke="white" />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="bg-green-600 rounded-3xl p-2">
                        <BookA size={32} stroke="white" />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="bg-green-600 rounded-3xl p-2">
                        <Users size={32} stroke="white" />
                    </NavigationMenuItem>
                </NavigationMenuList>
                <Link to="/login" className="flex justify-center mb-4">
                    <LogIn size={32} stroke="white" />
                </Link>
            </div>
        </NavigationMenu>
    );
}
