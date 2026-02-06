import { SharedData } from '@/types';
import { router } from '@inertiajs/react';
import { CircleCheck, CircleX } from 'lucide-react';
import { toast } from 'sonner';

const handler = (page: { props: SharedData }) => {
    if (page.props.flash && page.props.flash.success) {
        toast(
            <div className="flex items-center gap-2">
                <CircleCheck className="text-green-500" />
                {page.props.flash.success}
            </div>,
        );
    }
    if (page.props.flash && page.props.flash.error) {
        toast(
            <div className="flex items-center gap-2">
                <CircleX className="text-red-500" />
                {page.props.flash.error}
            </div>,
        );
    }
    if (page.props.flash && page.props.flash.warning) {
        toast(<div className="flex items-center gap-2">{page.props.flash.warning}</div>);
    }
    if (page.props.flash && page.props.flash.info) {
        toast(<div className="flex items-center gap-2">{page.props.flash.info}</div>);
    }
};
router.on('success', (e) => {
    setTimeout(() => handler(e.detail.page));
});

export default function useFlash() {
    return {
        handler,
    };
}