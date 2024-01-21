import img from '../assets/img.png';
import { Button } from '@/components/ui/button.tsx';

export function NotFound() {
    return (
        <div className="flex flex-col gap-1 items-center justify-center h-screen">
            <img src={img} className="w-1/2"  alt={"Not found"}/>
            <h1 className="font-semibold text-3xl mb-3">404 Not Found</h1>
            <p className="text-lg">These are not the items you're looking for...</p>
            <p className="text-lg">...or maybe you just selected the wrong filter...</p>
            <Button onClick={() => history.go(-1)}>Go Back</Button>
        </div>
    );
}