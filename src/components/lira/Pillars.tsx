import React from 'react'

export const LiraPillars: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Clareza antes de densidade',
      desc: 'O painel é operado entre um corte e o próximo. Cada tela responde a uma pergunta só, sem poluição visual ou distrações.',
      highlight: '#00D3F2',
      tag: 'OPERABILIDADE ÁGIL',
    },
    {
      num: '02',
      title: 'Escuro é o padrão',
      desc: 'A tela fica ligada doze horas por dia num balcão de atendimento. A luz fica rigorosamente reservada para dados cruciais e ação.',
      highlight: '#9034F3',
      tag: 'CONFORTO VISUAL',
    },
    {
      num: '03',
      title: 'Um acento, muitos sentidos',
      desc: 'Ciano é sempre ação ou foco. Cores categóricas só existem para separar estado de agendamento (verde para pago, âmbar para pendente, rosa para no-show).',
      highlight: '#34E5A0',
      tag: 'SEMÂNTICA RIGOROSA',
    },
    {
      num: '04',
      title: 'Feito para vestir outra marca',
      desc: 'Todo componente continua matematicamente legível quando a agência altera o acento e o raio para atender os salões da sua carteira.',
      highlight: '#C4FF44',
      tag: 'WHITE-LABEL TOTAL',
    },
  ]

  return (
    <section id="pilares" className="py-20 md:py-28 bg-[#070708] border-b border-[#1A1B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1A1E] border border-[#14454F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D3F2]" />
            <span className="text-[12px] font-mono tracking-[0.08em] uppercase text-[#CEFAFE]">
              MANIFESTO DO SISTEMA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E5E2E3] mb-4">
            Quatro princípios que não se negociam
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA3]">
            Desenhado para o ritmo real do salão e para a escala operacional das agências de tráfego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-[#0E1A1E]/60 border border-[#14454F] rounded-[20px] p-8 hover:border-[#00D3F2]/50 transition-all hover:bg-[#0E1A1E] group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-mono text-[#53EAFD] font-semibold">
                  {pillar.num}
                </span>
                <span className="text-[11px] font-mono tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full bg-[#070708] border border-[#14454F] text-[#9A9DA3]">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-[-0.02em]">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[#9A9DA3] leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
