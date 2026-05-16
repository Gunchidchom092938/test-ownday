export default function CircleTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-black text-white  w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[22px]">
            {children}
        </span>
    );
}
