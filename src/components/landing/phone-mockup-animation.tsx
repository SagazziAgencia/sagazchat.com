'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const notificationsData = [
    { app: "VALIDAPAY", title: "Venda Cartão Aprovada!", value: "R$ 347,00", time: "07:00" },
    { app: "VALIDAPAY", title: "Venda Pix Gerada!", value: "R$ 175,00", time: "10:30" },
    { app: "VALIDAPAY", title: "Pix Confirmado!", value: "R$ 5.000,00", time: "21:45" },
    { app: "VALIDAPAY", title: "Pix Confirmado!", value: "R$ 2.350,00", time: "11:30" },
    { app: "VALIDAPAY", title: "Venda Pix Gerada!", value: "R$ 89,90", time: "10:30" },
    { app: "VALIDAPAY", title: "Pix Confirmado!", value: "R$ 1.200,00", time: "21:45" },
    { app: "VALIDAPAY", title: "Venda Cartão Aprovada!", value: "R$ 450,50", time: "07:00" },
];

const ValidapayLogoSvg = () => (
    <img src="/images/validapay-logo.png" alt="Validapay" className="w-full h-full object-contain" />
);


const NotificationCard = ({ notification, isVisible }: { notification: typeof notificationsData[0], isVisible: boolean }) => {
    const isDarker = React.useMemo(() => Math.random() > 0.6, []);

    return (
        <div
            className={cn(
                'w-[94%] bg-[rgba(255,255,255,0.12)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-lg rounded-2xl p-3 flex items-center gap-3 text-white origin-top transition-all duration-500',
                isDarker && 'bg-[rgba(0,0,0,0.25)] border-[rgba(255,255,255,0.1)]',
                isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'
            )}
        >
            <div className="w-[56px] h-[56px] flex-shrink-0 drop-shadow-lg">
                <ValidapayLogoSvg />
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase opacity-60 font-semibold tracking-wider mb-0.5">{notification.app}</div>
                <div className="text-xs font-bold leading-tight truncate">{notification.title}</div>
                <div className="text-xs opacity-90">Valor: {notification.value}</div>
            </div>
            <div className="text-[10px] opacity-70 self-start mt-0.5 whitespace-nowrap">{notification.time}</div>
        </div>
    );
};

export function PhoneMockupAnimation() {
    const [notifications, setNotifications] = useState<Array<typeof notificationsData[0] & { key: number }>>([]);
    const [time, setTime] = useState('15:17');

    useEffect(() => {
        let notificationIndex = 0;

        const addNotification = () => {
            const newNotification = {
                ...notificationsData[notificationIndex % notificationsData.length],
                key: Date.now() + Math.random()
            };
            setNotifications(prev => [newNotification, ...prev.slice(0, 5)]);
            notificationIndex++;
        };

        addNotification();

        const scheduleNext = () => {
            const delay = Math.random() * 1000 + 1500;
            setTimeout(() => {
                addNotification();
                scheduleNext();
            }, delay);
        };

        const initialTimeout = setTimeout(scheduleNext, Math.random() * 1000 + 1500);

        const clockInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(clockInterval);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center py-4 sm:p-10 font-sans">
            <div className="w-[320px] h-[650px] max-w-[calc(100vw-3rem)] bg-black rounded-[50px] p-3 relative shadow-[0_0_0_2px_#333,0_0_0_4px_#1a1a1a,inset_0_0_20px_rgba(255,255,255,0.1)] z-10">
                <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-[90px] h-6 bg-black rounded-xl z-20"></div>
                <div className="w-full h-full bg-gradient-to-b from-[#1E3A8A] via-50% via-[#020938] to-[#020938] rounded-[38px] overflow-hidden relative flex flex-col">
                    <div className="h-11 w-full flex justify-between items-center px-6 pt-1 text-white text-[15px] font-semibold z-20 tracking-tighter">
                        <span>{time}</span>
                        <div className="flex items-center gap-1.5">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 10C1 9.44772 1.44772 9 2 9C2.55228 9 3 9.44772 3 10V11C3 11.5523 2.55228 12 2 12C1.44772 12 1 11.5523 1 11V10Z" /><path d="M5 7.5C5 6.94772 5.44772 6.5 6 6.5C6.55228 6.5 7 6.94772 7 7.5V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7.5Z" /><path d="M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V5Z" /><path d="M13 2.5C13 1.94772 13.4477 1.5 14 1.5C14.5523 1.5 15 1.94772 15 2.5V11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11V2.5Z" /></svg>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.00004 2.87207C11.9682 2.87207 14.6599 4.02021 16.6369 5.86776C16.9416 6.15252 17.4192 6.13605 17.7039 5.83129C17.9887 5.52652 17.9722 5.04896 17.6675 4.7642C15.4206 2.66442 12.3619 1.37207 9.00004 1.37207C5.63821 1.37207 2.57946 2.66442 0.332617 4.7642C0.0278553 5.04896 0.0113841 5.52652 0.296146 5.83129C0.580907 6.13605 1.05847 6.15252 1.36323 5.86776C3.3402 4.02021 6.03184 2.87207 9.00004 2.87207ZM9.00004 6.27643C10.9575 6.27643 12.7423 7.00947 14.0945 8.21481C14.4124 8.49811 14.4411 8.98616 14.1578 9.30403C13.8745 9.6219 13.3864 9.65063 13.0686 9.36733C11.9904 8.40632 10.5673 7.77643 9.00004 7.77643C7.43275 7.77643 6.00971 8.40632 4.93152 9.36733C4.61365 9.65063 4.12559 9.6219 3.8423 9.30403C3.559 8.98616 3.58773 8.49811 3.90561 8.21481C5.25776 7.00947 7.04259 6.27643 9.00004 6.27643ZM10.5298 11.0805C10.5298 11.9254 9.84483 12.6104 9.00004 12.6104C8.15525 12.6104 7.47025 11.9254 7.47025 11.0805C7.47025 10.2357 8.15525 9.55075 9.00004 9.55075C9.84483 9.55075 10.5298 10.2357 10.5298 11.0805Z" /></svg>
                            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.4" /><rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" /><path d="M23 4C23.5523 4 24 4.44772 24 5V7C24 7.55228 23.5523 8 23 8V4Z" fill="currentColor" fillOpacity="0.4" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 pt-2.5 pb-0 px-0 flex flex-col items-center gap-3 overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                        {notifications.map((notification) => (
                            <NotificationCard
                                key={notification.key}
                                notification={notification}
                                isVisible={true}
                            />
                        ))}
                    </div>
                    <div className="w-full p-4 pt-0 pb-6 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent text-center z-30 flex flex-col items-center gap-1">
                        <p className="text-[11px] font-medium text-[rgba(255,255,255,0.9)] tracking-wide shadow-2xl">
                            Use <span className="font-bold text-[#5B8DEF]">Validapay</span> com <span className="font-bold text-[#5B8DEF]">Sagazchat</span> no seu negócio
                        </p>
                        <div className="w-32 h-[5px] bg-[rgba(255,255,255,0.3)] rounded-full mt-3"></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-slide-in {
                    animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
            `}</style>
        </div>
    );
}
