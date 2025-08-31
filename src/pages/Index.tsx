import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const monsters = [
  {
    id: 1,
    name: "Теневой Преследователь",
    category: "Паранормальная сущность",
    threat: "Высокая",
    location: "Подъезды, лестничные пролеты",
    description: "Темная фигура, скользящая по углам зрения. Проявляется в слабо освещенных коридорах многоквартирных домов. Питается страхом и одиночеством жителей.",
    characteristics: {
      height: "1.8-2.1м",
      manifestation: "Сумерки, ночь",
      behavior: "Избегает прямого контакта",
      weakness: "Яркий свет"
    },
    image: "/img/2ec53769-1b33-487f-bb75-c742a78e7441.jpg",
    lastSeen: "2024.08.29"
  },
  {
    id: 2,
    name: "Лифтовый Призрак",
    category: "Техногенная аномалия", 
    threat: "Средняя",
    location: "Лифтовые шахты, между этажами",
    description: "Призрачная сущность, обитающая в старых лифтах. Вызывает сбои в работе механизмов, заставляет лифт останавливаться на несуществующих этажах.",
    characteristics: {
      height: "Варьируется",
      manifestation: "В любое время",
      behavior: "Дезориентирует жертв",
      weakness: "Техническое обслуживание"
    },
    image: "/img/42434932-25ce-4747-872c-838808c6dd76.jpg",
    lastSeen: "2024.08.27"
  },
  {
    id: 3,
    name: "Шепчущий из Вентиляции",
    category: "Акустическая аномалия",
    threat: "Низкая",
    location: "Вентиляционные системы",
    description: "Голоса и шепот, исходящие из вентиляционных решеток. Передает фрагменты чужих разговоров, секреты и предупреждения о грядущих событиях.",
    characteristics: {
      height: "Бестелесная",
      manifestation: "Поздние вечерние часы",
      behavior: "Пассивно-информативное",
      weakness: "Шумоизоляция"
    },
    image: "/img/ff4e5b61-a792-450f-ba89-6bc8040cb8c7.jpg",
    lastSeen: "2024.08.30"
  }
];

const getThreatColor = (threat: string) => {
  switch (threat) {
    case 'Высокая': return 'bg-red-500/80 text-white';
    case 'Средняя': return 'bg-yellow-500/80 text-black';
    case 'Низкая': return 'bg-green-500/80 text-white';
    default: return 'bg-gray-500/80 text-white';
  }
};

export default function Index() {
  return (
    <div className="min-h-screen vhs-screen bg-vhs-black text-vhs-green">
      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* VHS Header */}
        <header className="text-center mb-12 relative">
          <div className="vhs-noise">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-4 glitch-text crt-flicker"
              data-text="БЕСТИАРИЙ"
            >
              БЕСТИАРИЙ
            </h1>
            <h2 
              className="text-2xl md:text-4xl mb-2 glitch-text"
              data-text="МУРИНО"
            >
              МУРИНО
            </h2>
            <div className="text-sm text-vhs-green/70 font-mono tracking-widest">
              ••• АНАЛОГОВАЯ АРХИВНАЯ СИСТЕМА ••• 
            </div>
            <div className="text-xs text-vhs-green/50 mt-2 font-mono">
              REC ● 31.08.2024 - СИГНАЛ ОБНАРУЖЕН
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-6 mb-8 text-sm font-mono">
          <div className="flex items-center gap-2 text-vhs-green">
            <Icon name="Database" size={16} />
            КАТАЛОГ: {monsters.length}
          </div>
          <Separator orientation="vertical" className="h-4 bg-vhs-green/30" />
          <div className="flex items-center gap-2 text-vhs-green/70">
            <Icon name="Signal" size={16} />
            СТАТУС: АКТИВЕН
          </div>
          <Separator orientation="vertical" className="h-4 bg-vhs-green/30" />
          <div className="flex items-center gap-2 text-vhs-pink">
            <Icon name="AlertTriangle" size={16} />
            УГРОЗА: ПЕРЕМЕННАЯ
          </div>
        </nav>

        {/* Monster Catalog */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
          {monsters.map((monster, index) => (
            <Card key={monster.id} className="bg-vhs-dark/80 border-vhs-green/30 shadow-lg shadow-vhs-green/10 hover:shadow-vhs-green/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-vhs-green text-xl font-mono glitch-text" data-text={monster.name}>
                        {monster.name}
                      </CardTitle>
                      <Badge className={getThreatColor(monster.threat)}>
                        {monster.threat}
                      </Badge>
                    </div>
                    <CardDescription className="text-vhs-green/70 font-mono text-sm">
                      #{String(index + 1).padStart(3, '0')} • {monster.category}
                    </CardDescription>
                  </div>
                  <div className="text-right text-xs text-vhs-green/50 font-mono">
                    ПОСЛЕДНЕЕ<br/>
                    НАБЛЮДЕНИЕ:<br/>
                    {monster.lastSeen}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 border-2 border-vhs-green/30 bg-vhs-black/50 overflow-hidden relative vhs-noise">
                      <img 
                        src={monster.image} 
                        alt={monster.name}
                        className="w-full h-full object-cover opacity-80 crt-flicker"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vhs-dark/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-vhs-pink font-mono text-sm mb-2 tracking-wide">ОПИСАНИЕ:</h4>
                      <p className="text-vhs-green/80 text-sm leading-relaxed font-mono">
                        {monster.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-vhs-pink font-mono text-sm mb-2 tracking-wide flex items-center gap-2">
                        <Icon name="MapPin" size={14} />
                        ЛОКАЦИЯ:
                      </h4>
                      <p className="text-vhs-green/80 text-sm font-mono">
                        {monster.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-vhs-green/20" />
                
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-vhs-pink">РОСТ:</span>
                    <div className="text-vhs-green/80">{monster.characteristics.height}</div>
                  </div>
                  <div>
                    <span className="text-vhs-pink">ПРОЯВЛЕНИЕ:</span>
                    <div className="text-vhs-green/80">{monster.characteristics.manifestation}</div>
                  </div>
                  <div>
                    <span className="text-vhs-pink">ПОВЕДЕНИЕ:</span>
                    <div className="text-vhs-green/80">{monster.characteristics.behavior}</div>
                  </div>
                  <div>
                    <span className="text-vhs-pink">СЛАБОСТЬ:</span>
                    <div className="text-vhs-green/80">{monster.characteristics.weakness}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="text-xs text-vhs-green/40 font-mono space-y-1">
            <div>••• АРХИВНАЯ СИСТЕМА МУРИНО v2.4.1 •••</div>
            <div>ОСТОРОЖНО: ИНФОРМАЦИЯ МОЖЕТ СОДЕРЖАТЬ ИСКАЖЕНИЯ</div>
            <div className="text-vhs-pink/60">
              ⚠ ПРИ ОБНАРУЖЕНИИ СУЩНОСТЕЙ НЕМЕДЛЕННО ПОКИНЬТЕ ЗОНУ ⚠
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}