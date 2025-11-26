"use client";

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, X, Loader2, Bot } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { aiHelpfulAssistant } from '@/ai/flows/ai-helpful-assistant';
import { cn } from '@/lib/utils';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export function AiChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isPending, startTransition] = useTransition();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim() || isPending) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');

        startTransition(async () => {
            const result = await aiHelpfulAssistant({ query: currentInput });
            const assistantMessage: Message = { role: 'assistant', content: result.response };
            setMessages(prev => [...prev, assistantMessage]);
        });
    };
    
    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollable = scrollAreaRef.current.querySelector('div');
            if (scrollable) {
                scrollable.scrollTo({
                    top: scrollable.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [messages]);

    useEffect(() => {
        if(isOpen && messages.length === 0){
            setMessages([{role: 'assistant', content: "Hello! I'm an AI assistant for Respondezap. How can I help you today?"}])
        }
    }, [isOpen, messages.length])

    return (
        <>
            <div className={cn("fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out", isOpen ? "opacity-0 translate-x-16" : "opacity-100 translate-x-0")}>
                <Button size="icon" className="rounded-full w-16 h-16 shadow-lg bg-primary hover:bg-primary/90" onClick={() => setIsOpen(true)}>
                    <MessageSquare className="h-8 w-8" />
                    <span className="sr-only">Open Chat</span>
                </Button>
            </div>

            <div className={cn("fixed bottom-4 right-4 z-50 w-full max-w-sm transition-all duration-300 ease-in-out", isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16 pointer-events-none")}>
                <Card className="shadow-2xl flex flex-col h-[600px]">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-6 w-6"/></AvatarFallback>
                            </Avatar>
                            <CardTitle className="font-headline text-xl">AI Assistant</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close chat</span>
                        </Button>
                    </CardHeader>
                    
                    <ScrollArea className="flex-1" ref={scrollAreaRef}>
                        <div className="space-y-4 p-4">
                            {messages.map((message, index) => (
                                <div key={index} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.role === 'assistant' && (
                                         <Avatar className="h-8 w-8">
                                            <AvatarFallback className="bg-primary text-primary-foreground">
                                                <Bot className="h-5 w-5"/>
                                            </AvatarFallback>
                                         </Avatar>
                                    )}
                                    <div className={cn('max-w-[80%] rounded-lg p-3 text-sm shadow-sm', message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card border')}>
                                        {message.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                                    </div>
                                </div>
                            ))}
                            {isPending && (
                                 <div className="flex items-start gap-3 justify-start">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="bg-primary text-primary-foreground">
                                            <Bot className="h-5 w-5"/>
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="max-w-[80%] rounded-lg p-3 text-sm bg-card border flex items-center">
                                        <Loader2 className="h-4 w-4 animate-spin"/>
                                    </div>
                                 </div>
                            )}
                        </div>
                    </ScrollArea>

                    <CardFooter className="p-4 border-t">
                        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                            <Input
                                id="message"
                                placeholder="Ask about Respondezap..."
                                className="flex-1"
                                autoComplete="off"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isPending}
                            />
                            <Button type="submit" size="icon" disabled={!input.trim() || isPending}>
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
