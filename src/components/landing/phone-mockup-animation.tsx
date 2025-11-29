'use client';
import React, { useState, useEffect } from 'react';

const notificationsData = [
  { app: "DEPOSITA.AI", title: "Venda Cartão Depositada!", value: "R$ 347,00", time: "07:00" },
  { app: "DEPOSITA.AI", title: "Venda Cartão Depositada!", value: "R$ 450,50", time: "07:00" },
  { app: "DEPOSITA.AI", title: "Pix Depositado!", value: "R$ 1.200,00", time: "21:45" },
  { app: "DEPOSITA.AI", title: "Venda Pix Gerada!", value: "R$ 89,90", time: "10:30" },
  { app: "DEPOSITA.AI", title: "Pix Depositado!", value: "R$ 2.350,00", time: "11:30" },
  { app: "DEPOSITA.AI", title: "Pix Depositado!", value: "R$ 5.000,00", time: "21:45" },
];

const DepositaLogoSvg = () => (
    <svg viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#pma_paint0_linear_2267_93)"/>
        <defs>
            <linearGradient id="pma_paint0_linear_2267_93" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA700"/><stop offset="1" stopColor="#FF8000"/></linearGradient>
        </defs>
    </svg>
);

const NotificationCard = ({ notification, isVisible, isDarker }: { notification: typeof notificationsData[0], isVisible: boolean, isDarker: boolean }) => {
    return (
        <div 
            className={`notification-card ${isVisible ? 'animate-enter' : ''} ${isDarker ? 'darker' : ''}`}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div className="icon-box"><DepositaLogoSvg /></div>
            <div className="content">
                <div className="app-name">{notification.app}</div>
                <div className="title">{notification.title}</div>
                <div className="subtitle">Valor: {notification.value}</div>
            </div>
            <div className="time">{notification.time}</div>
        </div>
    );
};

export function PhoneMockupAnimation() {
    const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);

    useEffect(() => {
        const totalNotifications = notificationsData.length;
        const interval = setInterval(() => {
            setVisibleNotifications(prev => {
                if (prev.length < totalNotifications) {
                    return [...prev, prev.length];
                }
                // Optional: reset animation
                // return [0]; 
                return prev;
            });
        }, 800); // Animation delay for each card

        // Reset animation after a full cycle
        const cycleTime = 800 * (totalNotifications + 2); // add extra delay at the end
        const resetInterval = setInterval(() => {
            setVisibleNotifications([0]);
        }, cycleTime);


        return () => {
            clearInterval(interval);
            clearInterval(resetInterval);
        };
    }, []);

    return (
        <div className="main-container font-sans">
             <div className="bg-blur"></div>
            <div className="phone-mockup">
                <div className="notch"></div>
                <div className="screen">
                    <div className="status-bar">
                        <span>15:17</span>
                        <div className="flex items-center gap-1">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3333 0.666656C11.3333 0.666656 8.66667 0.14999 6 2.41666C3.33333 0.14999 0.666668 0.666656 0.666668 0.666656L6 8.33332L11.3333 0.666656Z" fill="white"/></svg>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.33333C3.66667 -0.666667 12.3333 -0.666667 16 5.33333M2.66667 5.33333C4.66667 2.33333 11.3333 2.33333 13.3333 5.33333M5.33333 5.33333C6.33333 4.33333 9.66667 4.33333 10.6667 5.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="0.5" width="20" height="11" rx="2" stroke="white"/><path d="M22 3.5V8.5" stroke="white" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="2.5" width="16" height="7" rx="1" fill="white"/></svg>
                        </div>
                    </div>
                    <div className="notification-feed">
                        {notificationsData.map((notification, index) => (
                            <NotificationCard 
                                key={index} 
                                notification={notification} 
                                isVisible={visibleNotifications.includes(index)}
                                isDarker={index > 3}
                            />
                        ))}
                    </div>
                    <div className="cta-footer">
                        <p className="cta-text">
                            Use <span className="cta-highlight">Deposita.ai</span> com <span className="cta-highlight">Respondechat.ai</span> no seu negócio
                        </p>
                        <div className="home-indicator"></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                    .font-inter { font-family: 'Inter', sans-serif; }
                    
                    .main-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        padding: 40px;
                      }
              
                      .phone-mockup {
                        width: 320px;
                        height: 650px;
                        background: #000;
                        border-radius: 50px;
                        padding: 12px;
                        position: relative;
                        box-shadow: 
                          0 0 0 2px #333,
                          0 0 0 4px #1a1a1a,
                          0 30px 60px rgba(0,0,0,0.6),
                          inset 0 0 20px rgba(255,255,255,0.1);
                        z-index: 10;
                      }
              
                      .notch {
                        position: absolute;
                        top: 22px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 90px;
                        height: 24px;
                        background: #000;
                        border-radius: 12px;
                        z-index: 20;
                      }
              
                      .screen {
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to bottom, #FF8A00 0%, #151010 50%, #151010 100%);
                        border-radius: 38px;
                        overflow: hidden;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                      }
              
                      .status-bar {
                        height: 44px; 
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 24px;
                        padding-top: 4px; 
                        color: white;
                        font-size: 15px;
                        font-weight: 600;
                        z-index: 25;
                        letter-spacing: -0.5px;
                      }
              
                      .notification-feed {
                        flex: 1;
                        padding: 10px 0;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        align-items: center;
                        mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
                        -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
                      }
              
                      .cta-footer {
                        width: 100%;
                        padding: 16px 20px 24px 20px;
                        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                        text-align: center;
                        z-index: 30;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 4px;
                      }
              
                      .cta-text {
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 11px;
                        font-weight: 500;
                        letter-spacing: 0.3px;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                      }
              
                      .cta-highlight {
                        color: #FF8A00;
                        font-weight: 700;
                      }
              
                      .home-indicator {
                        width: 130px;
                        height: 5px;
                        background: rgba(255, 255, 255, 0.3);
                        border-radius: 10px;
                        margin-top: 12px;
                      }
              
                      .notification-card {
                        width: 94%;
                        background: rgba(255, 255, 255, 0.12);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                        border-radius: 16px;
                        padding: 10px 12px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        color: white;
                        transform-origin: top center;
                        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                      }
              
                      .notification-card.darker {
                        background: rgba(0, 0, 0, 0.25);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                      }
              
                      .icon-box {
                        width: 42px;
                        height: 42px;
                        background: transparent; 
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
                      }
              
                      .content { flex: 1; min-width: 0; }
              
                      .title {
                        font-size: 12px;
                        font-weight: 700;
                        line-height: 1.2;
                        margin-bottom: 2px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      }
              
                      .app-name {
                        font-size: 9px;
                        text-transform: uppercase;
                        opacity: 0.6;
                        margin-bottom: 2px;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                      }
              
                      .subtitle {
                        font-size: 11px;
                        opacity: 0.9;
                        font-weight: 400;
                      }
              
                      .time {
                        font-size: 10px;
                        opacity: 0.7;
                        align-self: flex-start;
                        margin-top: 2px;
                        white-space: nowrap;
                      }
              
                      @keyframes slideIn {
                        0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
                        100% { opacity: 1; transform: translateY(0) scale(1); }
                      }
              
                      .animate-enter {
                        animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                      }

                       .bg-blur {
                        position: absolute;
                        width: 500px;
                        height: 500px;
                        background: radial-gradient(circle, rgba(255,165,0,0.2) 0%, rgba(0,0,0,0) 70%);
                        z-index: 0;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                `}</style>
        </div>
    );
}
