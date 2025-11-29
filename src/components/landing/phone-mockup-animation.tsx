'use client';
import { Server, MessageSquare, Check, ShoppingCart, Copy, CheckCircle2 } from 'lucide-react';

export function PhoneMockupAnimation({ currentStep }: { currentStep: number }) {

    const Scene = ({ step, children }: { step: number; children: React.ReactNode }) => (
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentStep === step ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );

    const DepositaLogoSvg = () => (
        <svg viewBox="0 0 395 395" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M1 66C1 29.5492 30.5492 0 67 0H328C364.451 0 394 29.5492 394 66V329C394 365.451 364.451 395 328 395H67C30.5492 395 1 365.451 1 329V66Z" fill="url(#pma_paint0_linear_2267_93)"/>
            <defs>
                <linearGradient id="pma_paint0_linear_2267_93" x1="349.5" y1="26" x2="197.5" y2="395" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA700"/><stop offset="1" stopColor="#FF8000"/></linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="relative w-[320px] h-[650px] bg-gray-900 border-4 border-gray-800 rounded-[50px] shadow-2xl shadow-slate-900/30 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-2xl z-20"></div>
            
            <div className="relative w-full h-full bg-white rounded-[46px] overflow-hidden">
                {/* --- Scene 1: Checkout --- */}
                <Scene step={1}>
                    <div className="flex flex-col h-full bg-gray-50 text-gray-800 p-6 pt-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl">
                                <ShoppingCart className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">Seu Carrinho</h2>
                                <p className="text-xs text-gray-500">Finalize sua compra</p>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-3 mb-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Produto X</span>
                                <span className="font-bold">R$ 97,00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Taxas</span>
                                <span className="font-bold">R$ 0,00</span>
                            </div>
                            <div className="border-t border-dashed border-gray-200 my-2"></div>
                            <div className="flex justify-between items-center text-base font-bold">
                                <span>Total</span>
                                <span>R$ 97,00</span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center text-center p-4 bg-orange-500/10 rounded-lg border border-dashed border-orange-500/30">
                           <p className="text-sm font-medium text-orange-700">Aguardando pagamento...</p>
                           <div className="mt-4 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 w-full animate-pulse"></div>
                           </div>
                           <p className="text-xs text-orange-600 mt-2">O cliente abandonou o checkout</p>
                        </div>
                    </div>
                </Scene>

                {/* --- Scene 2: Webhook Processing --- */}
                <Scene step={2}>
                    <div className="flex flex-col items-center justify-center h-full bg-slate-800 text-white p-6 text-center">
                        <div className="relative flex items-center justify-center w-40 h-40">
                             <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                             <div className="relative w-24 h-24 flex items-center justify-center bg-slate-700 border-2 border-slate-600 rounded-full">
                                <Server className="w-10 h-10 text-blue-400" />
                             </div>
                        </div>
                        <h2 className="text-lg font-bold mt-8">Webhook Recebido</h2>
                        <p className="text-sm text-slate-400 mt-1">Processando dados do checkout abandonado...</p>
                    </div>
                </Scene>

                {/* --- Scene 3: WhatsApp Chat --- */}
                <Scene step={3}>
                    <div className="flex flex-col h-full bg-[#E5DDD5]">
                         <div className="bg-[#005E54] p-4 pt-10 flex items-center gap-3 text-white shadow-md z-10">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div>
                                <h3 className="font-bold text-sm">Carlos Mendes</h3>
                                <p className="text-xs opacity-80">online</p>
                            </div>
                        </div>
                        <div className="flex-1 p-4 space-y-3 overflow-y-auto" style={{backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAARCAYAAAA/x3R8AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABEaADAAQAAAABAAARAAAAAAAo4wVPAAAAZklEQVR4Ae3dMQ0AIAwD0dT+pbgoim4pB1sEwQAAAADgL8G9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvcE9wT3BvQIAAADgXwAn9QAB5o5cBAAAAABJRU5ErkJggg==")', opacity: 0.05}}>
                             <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                                    <p className="text-sm text-gray-800">Opa! Vi que você tentou comprar e não conseguiu. Quer ajuda pra finalizar?</p>
                                    <p className="text-[10px] text-gray-400 text-right mt-1">14:31</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-[#DCF8C6] p-3 rounded-lg max-w-[80%] shadow-sm">
                                    <p className="text-sm text-gray-800">Segue o PIX pra facilitar:</p>
                                    <div className="mt-2 p-2 bg-gray-100 rounded text-xs text-gray-600 font-mono flex items-center justify-between">
                                        <span>0002...abcd</span>
                                        <Copy className="w-3 h-3 text-gray-500" />
                                    </div>
                                    <div className="flex items-center justify-end gap-1 text-[10px] text-gray-500 mt-1">
                                        <span>14:32</span>
                                        <Check className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-2 border-t border-gray-200">
                             <div className="bg-white rounded-full h-10 w-full flex items-center px-4">
                                <p className="text-sm text-gray-400">Escreva uma mensagem...</p>
                            </div>
                        </div>
                    </div>
                </Scene>

                {/* --- Scene 4: Success Screen --- */}
                <Scene step={4}>
                    <div className="relative flex flex-col items-center justify-center h-full bg-green-600 text-white p-6 text-center overflow-hidden">
                        <div className="w-24 h-24 flex items-center justify-center bg-white/20 rounded-full">
                           <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-4xl font-bold mt-6">R$ 97,00</h2>
                        <p className="text-lg opacity-90 mt-1">Venda Recuperada!</p>
                        <p className="text-sm bg-white/20 px-3 py-1 rounded-full mt-6">Sucesso!</p>

                        {/* Notification Overlay */}
                        <div className={`
                            absolute top-5 left-1/2 -translate-x-1/2 w-[92%] p-3 rounded-2xl
                            bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl
                            flex items-center gap-3 transition-all duration-700 ease-in-out
                            ${currentStep === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                        `}>
                            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                                <DepositaLogoSvg />
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-xs font-bold text-white">Deposita.Ai</p>
                                <p className="text-sm font-semibold text-white leading-tight">Venda Aprovada!</p>
                                <p className="text-xs text-white/80">Você recuperou R$ 97,00</p>
                            </div>
                            <div className="text-xs text-white/50">agora</div>
                        </div>
                    </div>
                </Scene>
            </div>
        </div>
    );
}
