import {
  AtSign,
  ArrowUp,
  Check,
  CheckCheck,
  ChevronDown,
  CircleStop,
  Instagram,
  List,
  Mic,
  MoreVertical,
  Paperclip,
  Pencil,
  Phone,
  Plus,
  Signature,
  Smile,
  Undo2,
  X,
  Zap,
} from 'lucide-react';

function CustomerTimestamp() {
  return (
    <span className="ml-2 inline-flex shrink-0 items-center gap-1 text-[9px] text-[#94A3B8]">
      23:41
      <Check className="h-3 w-3" />
    </span>
  );
}

function AgentTimestamp() {
  return (
    <span className="ml-2 inline-flex shrink-0 items-center gap-1 text-[9px] text-[#94A3B8]">
      23:41
      <CheckCheck className="h-3.5 w-3.5" />
    </span>
  );
}

function CustomerMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[70%] rounded-[10px] rounded-bl-[2px] bg-white px-3 py-1.5 text-[12px] text-[#0F172A] ring-1 ring-[#E2E8F0]">
        <span>{text}</span>
        <CustomerTimestamp />
      </div>
    </div>
  );
}

function AgentMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[70%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[12px] text-[#0F172A]">
        <span>{text}</span>
        <AgentTimestamp />
      </div>
    </div>
  );
}

function BotMsg({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-[10px] rounded-br-[2px] bg-[#F1FDD4] px-3 py-1.5 text-[10px] leading-[1.55] text-[#0F172A]">
        {children}
        <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-[#94A3B8]">
          23:41
          <CheckCheck className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

function ContactInfoRow({
  icon,
  label,
  value,
  mutedValue = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mutedValue?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-1.5 text-[12px] text-[#64748B]">
        {icon}
        {label}
      </span>
      <span className={`text-[12px] ${mutedValue ? 'text-[#7B8794]' : 'text-[#0F172A]'}`}>
        {value}
      </span>
    </div>
  );
}

export function HeroChatReplica() {
  return (
    <div className="flex h-full overflow-hidden bg-[#FAFAFA]">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#FAFAFA]">
        <div className="flex shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                IS
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] ring-[1.5px] ring-white">
                <Phone className="h-2 w-2 fill-white text-white" />
              </span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-[#0F172A]">
                  Iarley Silva
                </span>
                <span className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-[#E2E8F0]">
                  Iarley
                </span>
              </div>
              <p className="text-[11px] text-[#64748B]">Atendente: Iarley</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Undo2 className="h-4 w-4 text-[#64748B]" />
            <Zap className="h-4 w-4 text-[#64748B]" />
            <span className="flex items-center justify-center rounded-lg bg-[#17C75A] px-3 py-1.5">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </span>
            <MoreVertical className="h-4 w-4 text-[#64748B]" />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-2">
          <span className="text-[11px] font-semibold text-[#94A3B8]">Tags</span>
          <span className="h-3.5 w-px bg-[#E2E8F0]" />
          <span className="rounded-xl bg-[#F8FAFC] px-3 py-1 text-[11px] text-[#94A3B8]">
            Etiquetas
          </span>
        </div>

        <div className="min-h-0 flex-1 space-y-2.5 overflow-hidden px-4 py-4">
          <CustomerMsg text="Oi, quero saber do meu pedido" />
          <AgentMsg text="Oi! Qual o número do pedido?" />
          <CustomerMsg text="#4521" />

          <BotMsg>
            <p className="font-semibold">Pedido #4521</p>
            <p>- Status: Em transporte</p>
            <p>- Previsão: 18/04</p>
            <p>- Transportadora: Jadlog</p>
          </BotMsg>

          <CustomerMsg text="Consigo trocar o endereço?" />

          <BotMsg>
            <p className="font-semibold">Endereço atualizado!</p>
            <p>Novo endereço salvo com sucesso.</p>
            <p className="mt-0.5">Precisa de mais alguma coisa?</p>
          </BotMsg>
        </div>

        <div className="shrink-0 bg-white px-4 pb-4 pt-3">
          <div className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] px-3 py-2">
            <div className="flex items-center gap-4 text-[#64748B]">
              <Smile className="h-[18px] w-[18px]" />
              <Paperclip className="h-[18px] w-[18px]" />
              <span className="flex items-center justify-center rounded-md bg-[#D9FDD3] p-1.5">
                <Signature className="h-[18px] w-[18px] text-[#16A34A]" />
              </span>
              <CircleStop className="h-[18px] w-[18px]" />
              <Zap className="h-[18px] w-[18px]" />
            </div>
            <div className="flex-1 truncate text-[11px] text-[#CBD5E1]">
              Comece a escrever uma mensagem. Coloque / para acessar os atalhos
            </div>
            <Mic className="h-[18px] w-[18px] shrink-0 text-[#64748B]" />
            <div className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#E2E8F0] px-4 py-2 text-[12px] font-semibold text-[#64748B]">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
              Enviar
            </div>
          </div>
        </div>
      </div>

      <aside className="hidden w-[230px] shrink-0 border-l border-[#E5E7EB] bg-[#F7F8FA] px-3 py-3 xl:flex xl:flex-col">
        <div className="flex items-center justify-between text-[#6B7280]">
          <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111827]">
            <X className="h-3.5 w-3.5 text-[#6B7280]" />
            Dados do contato
          </div>
          <Pencil className="h-3.5 w-3.5" />
        </div>

        <div className="mt-3 flex flex-col items-center gap-1.5">
          <div className="relative h-[80px] w-[80px]">
            <div
              className="h-full w-full rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/contact-iarley.png')" }}
            />
            <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-[#F7F8FA]">
              <Phone className="h-2.5 w-2.5 fill-white text-white" />
            </span>
          </div>
          <p className="text-[14px] font-semibold text-[#0F172A]">Iarley Silva</p>
          <p className="text-[10px] text-[#8A94A6]">Criado em 02/04/2026</p>
        </div>

        <div className="mt-4 space-y-2.5">
          <ContactInfoRow
            icon={<Phone className="h-3.5 w-3.5" />}
            label="Telefone"
            value="+55 (98) 81201979"
          />
          <ContactInfoRow
            icon={<AtSign className="h-3.5 w-3.5" />}
            label="E-mail"
            value="Não informado"
            mutedValue
          />
          <ContactInfoRow
            icon={<Instagram className="h-3.5 w-3.5" />}
            label="Instagram"
            value="Não informado"
            mutedValue
          />
        </div>

        <div className="mt-3 space-y-2.5">
          <div className="rounded-xl bg-[#ECECEF] px-3 py-2.5">
            <div className="flex items-center justify-between text-[13px] font-semibold text-[#4B5563]">
              Fluxos
              <ChevronDown className="h-4 w-4 text-[#6B7280]" />
            </div>
          </div>

          <div className="rounded-xl bg-[#ECECEF] px-3 py-2.5">
            <div className="flex items-center justify-between text-[13px] font-semibold text-[#4B5563]">
              Remarketing
              <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#7B8794]">Nenhum selecionado</span>
              <div className="inline-flex items-center gap-2 text-[#6B7280]">
                <CircleStop className="h-4 w-4" />
                <List className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-[#ECECEF] px-3 py-2.5">
            <span className="text-[13px] font-semibold text-[#4B5563]">Observações</span>
            <div className="inline-flex items-center gap-2 text-[#6B7280]">
              <span className="text-[12px] font-semibold">0</span>
              <Plus className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-[#ECECEF] px-3 py-2.5">
            <span className="text-[13px] font-semibold text-[#4B5563]">Outras informações</span>
            <ChevronDown className="h-4 w-4 text-[#D1D5DB]" />
          </div>
        </div>
      </aside>
    </div>
  );
}
