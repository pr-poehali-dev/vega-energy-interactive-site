import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/cd88e86c-4bf0-4232-b73d-f2649ed8c761/files/c58470e2-6327-40fe-853a-e5a0a1eae01d.jpg';
const KIDS_IMG = 'https://cdn.poehali.dev/projects/cd88e86c-4bf0-4232-b73d-f2649ed8c761/files/bf29d511-d08f-47c7-9a25-8cb6bd16597a.jpg';
const VR_IMG = 'https://cdn.poehali.dev/projects/cd88e86c-4bf0-4232-b73d-f2649ed8c761/files/6a9bfdca-bae8-42a2-b882-ee46a7f67df5.jpg';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'games', label: 'Игры' },
  { id: 'prices', label: 'Цены' },
  { id: 'booking', label: 'Бронирование' },
  { id: 'about', label: 'О нас' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contacts', label: 'Контакты' },
];

const GAMES = [
  { icon: 'Headset', title: 'VR-арена', desc: 'Погружение в виртуальную реальность. Битвы, гонки, приключения в полном 360°', color: 'cyan', tag: '16+' },
  { icon: 'Gamepad2', title: 'Аркадный зал', desc: 'Более 50 аркадных автоматов — классика и новинки для истинных геймеров', color: 'purple', tag: '6+' },
  { icon: 'Zap', title: 'Лазертаг', desc: 'Командные бои в тёмных лабиринтах с лазерным оружием и тактическими заданиями', color: 'yellow', tag: '8+' },
  { icon: 'Baby', title: 'Детская зона', desc: 'Безопасные интерактивные игры и аттракционы для малышей от 3 лет', color: 'pink', tag: '3+' },
  { icon: 'Users', title: 'Семейная зона', desc: 'Совместные игры для всей семьи: квизы, настолки, мультиплеерные приключения', color: 'cyan', tag: 'Все' },
  { icon: 'Trophy', title: 'Киберспорт', desc: 'Топовые ПК-станции, турниры и тренировки для серьёзных игроков', color: 'purple', tag: '14+' },
];

const PRICES = [
  {
    name: 'Старт', price: '599', per: '/ час',
    features: ['1 зона на выбор', 'Аркадный зал', 'Детская зона', 'Консультация администратора'],
    color: 'cyan', popular: false,
  },
  {
    name: 'Энерджи', price: '1 299', per: '/ час',
    features: ['Все игровые зоны', 'VR-арена включена', 'Лазертаг included', 'Приоритетная очередь', 'Напиток в подарок'],
    color: 'purple', popular: true,
  },
  {
    name: 'Семейный', price: '2 499', per: '/ 3 часа',
    features: ['До 4 человек', 'Все зоны открыты', 'Детская + семейная зоны', 'Личный гид по центру', 'Фотосессия в подарок'],
    color: 'yellow', popular: false,
  },
];

const GALLERY = [
  { src: HERO_IMG, title: 'Главный зал' },
  { src: VR_IMG, title: 'VR-арена' },
  { src: KIDS_IMG, title: 'Детская зона' },
  { src: HERO_IMG, title: 'Аркадный зал' },
  { src: VR_IMG, title: 'Лазертаг арена' },
  { src: KIDS_IMG, title: 'Семейная зона' },
];

const COLOR_MAP: Record<string, string> = {
  cyan: 'var(--neon-cyan)',
  purple: 'var(--neon-purple)',
  yellow: 'var(--neon-yellow)',
  pink: 'var(--neon-pink)',
};

export default function Index() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', zone: '', date: '', time: '' });

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen scanline" style={{ background: 'var(--dark-bg)', fontFamily: 'Rubik, sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{ background: 'rgba(7,7,20,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))', boxShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
              <Icon name="Zap" size={20} className="text-black" />
            </div>
            <span className="font-orbitron font-black text-xl tracking-widest neon-text-cyan">ВЕГА</span>
            <span className="font-orbitron font-black text-xl tracking-widest text-white opacity-80">ЭНЕРДЖИ</span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-sm font-rubik uppercase tracking-wider transition-all duration-300 rounded-md cursor-pointer
                  ${activeNav === item.id ? 'neon-text-cyan' : 'text-white/60 hover:text-white'}`}
                style={activeNav === item.id ? { textShadow: '0 0 10px var(--neon-cyan)' } : {}}>
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo('booking')} className="neon-btn-solid hidden lg:block px-6 py-2 rounded-lg text-sm cursor-pointer">
            Забронировать
          </button>

          <button className="lg:hidden text-white cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-rubik uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-pointer">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('booking')} className="neon-btn-solid mt-3 mx-4 px-6 py-2 rounded-lg text-sm cursor-pointer">
              Забронировать
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="ВЕГА-Энерджи" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--dark-bg) 30%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-rubik tracking-widest uppercase"
              style={{ border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)', background: 'rgba(0,229,255,0.05)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--neon-cyan)' }} />
              Центр открыт · Ежедневно 10:00 – 23:00
            </div>

            <h1 className="font-orbitron font-black mb-6 leading-none">
              <span className="block text-5xl md:text-7xl text-white">ЗАРЯДИ</span>
              <span className="block text-5xl md:text-7xl neon-text-cyan">ИГРОВУЮ</span>
              <span className="block text-5xl md:text-7xl neon-text-purple">ЭНЕРГИЮ</span>
            </h1>

            <p className="text-xl text-white/60 font-rubik mb-10 max-w-xl leading-relaxed">
              Интерактивный игровой центр нового поколения. VR-арены, лазертаг, аркады и зоны для всей семьи — всё под одной крышей.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('booking')} className="neon-btn-solid px-8 py-4 rounded-xl text-base cursor-pointer">
                Забронировать сейчас
              </button>
              <button onClick={() => scrollTo('games')} className="neon-btn px-8 py-4 rounded-xl text-base cursor-pointer">
                Смотреть игры
              </button>
            </div>

            <div className="flex gap-10 mt-14">
              {[['50+', 'аттракционов'], ['5000', 'м² площадь'], ['12', 'зон отдыха']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-orbitron font-black text-3xl neon-text-cyan">{n}</div>
                  <div className="text-white/40 text-sm font-rubik uppercase tracking-wider mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <div className="text-white/30 text-xs font-rubik uppercase tracking-widest">Прокрутите вниз</div>
          <Icon name="ChevronDown" size={20} className="text-white/30" />
        </div>
      </section>

      {/* Games */}
      <section id="games" className="py-24 relative">
        <div className="absolute inset-0 section-glow-purple" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-purple)' }}>Игровые зоны</div>
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4">ВЫБЕРИ <span className="neon-text-cyan">ИГРУ</span></h2>
            <p className="text-white/50 font-rubik max-w-lg mx-auto">От тихих семейных вечеров до жарких киберспортивных турниров — у нас есть всё</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game, i) => {
              const c = COLOR_MAP[game.color];
              return (
                <div key={i} className="card-dark rounded-2xl p-6 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: `${c}15`, border: `1px solid ${c}40` }}>
                      <Icon name={game.icon} size={28} style={{ color: c }} />
                    </div>
                    <span className="text-xs font-orbitron px-3 py-1 rounded-full"
                      style={{ background: `${c}15`, color: c, border: `1px solid ${c}40` }}>
                      {game.tag}
                    </span>
                  </div>
                  <h3 className="font-orbitron font-bold text-lg text-white mb-2">{game.title}</h3>
                  <p className="text-white/50 font-rubik text-sm leading-relaxed">{game.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-rubik transition-all group-hover:gap-3" style={{ color: c }}>
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Zone */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-yellow)' }}>Специальная зона</div>
              <h2 className="font-orbitron font-black text-4xl text-white mb-6">СЕМЬЯ И <span className="neon-text-yellow">ДЕТИ</span></h2>
              <p className="text-white/60 font-rubik text-lg mb-6 leading-relaxed">
                Мы создали особые зоны, где каждый — от малышей до бабушек — найдёт развлечение по душе. Безопасно, весело, незабываемо.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Мягкие игровые лабиринты для детей от 3 лет',
                  'Интерактивные напольные игры для всей семьи',
                  'Настольные мультиплеерные квизы',
                  'Зона фото с яркими декорациями',
                  'Отдельные тихие комнаты для отдыха',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-rubik">
                    <Icon name="CheckCircle" size={18} style={{ color: 'var(--neon-yellow)', marginTop: '2px', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollTo('booking')}
                className="px-8 py-4 rounded-xl text-sm cursor-pointer font-orbitron font-bold uppercase tracking-wider transition-all duration-300"
                style={{ background: 'var(--neon-yellow)', color: 'var(--dark-bg)', border: '2px solid var(--neon-yellow)', boxShadow: '0 0 20px rgba(255,224,0,0.4)' }}>
                Забронировать для семьи
              </button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,224,0,0.3)', boxShadow: '0 0 40px rgba(255,224,0,0.1)' }}>
                <img src={KIDS_IMG} alt="Детская зона" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl p-4 hidden md:block"
                style={{ background: 'var(--dark-card)', border: '1px solid rgba(255,224,0,0.4)', boxShadow: '0 0 20px rgba(255,224,0,0.2)' }}>
                <div className="font-orbitron font-black text-2xl" style={{ color: 'var(--neon-yellow)' }}>3+</div>
                <div className="text-white/50 text-xs font-rubik uppercase tracking-wider">возраст</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-cyan)' }}>Тарифы</div>
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4">ВЫБЕРИ <span className="neon-text-purple">ТАРИФ</span></h2>
            <p className="text-white/50 font-rubik">Прозрачные цены без скрытых платежей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
            {PRICES.map((plan, i) => {
              const c = COLOR_MAP[plan.color];
              return (
                <div key={i} className={`rounded-2xl p-8 relative ${plan.popular ? 'scale-105' : ''}`}
                  style={{
                    background: plan.popular ? `linear-gradient(135deg, ${c}10, var(--dark-card))` : 'var(--dark-card)',
                    border: `1px solid ${plan.popular ? c : `${c}40`}`,
                    boxShadow: plan.popular ? `0 0 40px ${c}20` : 'none',
                  }}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-orbitron font-bold"
                      style={{ background: c, color: 'var(--dark-bg)' }}>
                      POPULAR
                    </div>
                  )}
                  <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: c }}>{plan.name}</div>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="font-orbitron font-black text-4xl text-white">{plan.price}</span>
                    <span className="text-white/40 font-rubik pb-1">₽{plan.per}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/70 font-rubik text-sm">
                        <Icon name="Check" size={16} style={{ color: c, marginTop: '2px', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollTo('booking')}
                    className="w-full py-3 rounded-xl font-orbitron font-bold text-sm uppercase tracking-wider cursor-pointer transition-all duration-300"
                    style={plan.popular
                      ? { background: c, color: 'var(--dark-bg)', boxShadow: `0 0 20px ${c}60` }
                      : { background: 'transparent', border: `1px solid ${c}`, color: c }}>
                    Выбрать
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-cyan)' }}>Онлайн-бронирование</div>
            <h2 className="font-orbitron font-black text-4xl text-white mb-4">ЗАБРОНИРУЙ <span className="neon-text-cyan">МЕСТО</span></h2>
            <p className="text-white/50 font-rubik">Займи лучшее место заранее — без очередей и ожидания</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'var(--dark-card)', border: '1px solid rgba(0,229,255,0.2)', boxShadow: '0 0 40px rgba(0,229,255,0.05)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Ваше имя', placeholder: 'Иван Иванов', key: 'name', type: 'text' },
                { label: 'Телефон', placeholder: '+7 (999) 000-00-00', key: 'phone', type: 'text' },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-xs font-rubik uppercase tracking-wider text-white/40 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    value={bookingForm[field.key as keyof typeof bookingForm]}
                    onChange={e => setBookingForm({ ...bookingForm, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-white font-rubik placeholder-white/20 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,229,255,0.2)' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(0,229,255,0.2)')}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-rubik uppercase tracking-wider text-white/40 mb-2">Игровая зона</label>
                <select value={bookingForm.zone} onChange={e => setBookingForm({ ...bookingForm, zone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white font-rubik outline-none transition-all appearance-none cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <option value="" disabled style={{ background: 'var(--dark-card)' }}>Выбрать зону</option>
                  {GAMES.map(g => <option key={g.title} value={g.title} style={{ background: 'var(--dark-card)' }}>{g.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-rubik uppercase tracking-wider text-white/40 mb-2">Тариф</label>
                <select className="w-full px-4 py-3 rounded-xl text-white font-rubik outline-none transition-all appearance-none cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <option style={{ background: 'var(--dark-card)' }}>Старт — 599₽/час</option>
                  <option style={{ background: 'var(--dark-card)' }}>Энерджи — 1299₽/час</option>
                  <option style={{ background: 'var(--dark-card)' }}>Семейный — 2499₽/3ч</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-rubik uppercase tracking-wider text-white/40 mb-2">Дата</label>
                <input type="date" value={bookingForm.date} onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white font-rubik outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', colorScheme: 'dark' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--neon-cyan)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(0,229,255,0.2)')} />
              </div>

              <div>
                <label className="block text-xs font-rubik uppercase tracking-wider text-white/40 mb-2">Время</label>
                <input type="time" value={bookingForm.time} onChange={e => setBookingForm({ ...bookingForm, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white font-rubik outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', colorScheme: 'dark' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--neon-cyan)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(0,229,255,0.2)')} />
              </div>
            </div>

            <button className="neon-btn-solid w-full mt-6 py-4 rounded-xl text-base cursor-pointer">
              Отправить заявку
            </button>
            <p className="text-center text-white/30 font-rubik text-xs mt-4">
              Мы свяжемся с вами в течение 30 минут для подтверждения
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 section-glow-purple opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(191,0,255,0.3)', boxShadow: '0 0 60px rgba(191,0,255,0.1)' }}>
                <img src={VR_IMG} alt="О нас" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute top-6 -left-6 rounded-xl p-5 hidden lg:block"
                style={{ background: 'var(--dark-card)', border: '1px solid rgba(0,229,255,0.3)', boxShadow: '0 0 20px rgba(0,229,255,0.15)' }}>
                <div className="font-orbitron font-black text-3xl neon-text-cyan">2019</div>
                <div className="text-white/40 text-xs font-rubik uppercase tracking-wider">год открытия</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-purple)' }}>О центре</div>
              <h2 className="font-orbitron font-black text-4xl text-white mb-6">МЫ — <span className="neon-text-purple">БОЛЬШЕ</span> ЧЕМ ИГРЫ</h2>
              <p className="text-white/60 font-rubik text-lg mb-4 leading-relaxed">
                ВЕГА-Энерджи — это пространство, где технологии встречаются с весельем. Мы создали место, где каждый найдёт своё приключение.
              </p>
              <p className="text-white/50 font-rubik mb-8 leading-relaxed">
                С 2019 года мы радуем гостей передовыми аттракционами, заботливым персоналом и постоянно обновляющимся парком развлечений.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['50 000+', 'гостей в год'], ['98%', 'довольных'], ['4.9★', 'рейтинг'], ['5 лет', 'на рынке']].map(([n, l]) => (
                  <div key={l} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="font-orbitron font-black text-2xl neon-text-purple">{n}</div>
                    <div className="text-white/40 text-xs font-rubik mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-cyan)' }}>Галерея</div>
            <h2 className="font-orbitron font-black text-4xl text-white mb-4">ВИД <span className="neon-text-cyan">ИЗНУТРИ</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div key={i}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${i === 0 ? 'md:col-span-2 row-span-2' : ''}`}
                style={{ border: '1px solid rgba(0,229,255,0.1)' }}>
                <img src={img.src} alt={img.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'h-64 md:h-full min-h-[320px]' : 'h-40 md:h-48'}`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(7,7,20,0.9), transparent)' }}>
                  <span className="font-orbitron text-sm neon-text-cyan">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-rubik uppercase tracking-widest mb-4" style={{ color: 'var(--neon-purple)' }}>Контакты</div>
            <h2 className="font-orbitron font-black text-4xl text-white mb-4">НАЙДИ <span className="neon-text-purple">НАС</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'MapPin', label: 'Адрес', value: 'ул. Энергетиков, 42\nг. Москва', color: 'cyan' },
              { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', color: 'purple' },
              { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 12:00–23:00\nСб–Вс: 10:00–23:00', color: 'yellow' },
              { icon: 'Mail', label: 'Email', value: 'info@vega-energy.ru', color: 'pink' },
            ].map((c, i) => {
              const col = COLOR_MAP[c.color];
              return (
                <div key={i} className="card-dark rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${col}15`, border: `1px solid ${col}40` }}>
                    <Icon name={c.icon} size={24} style={{ color: col }} />
                  </div>
                  <div className="text-white/40 text-xs font-rubik uppercase tracking-wider mb-2">{c.label}</div>
                  <div className="text-white font-rubik text-sm whitespace-pre-line">{c.value}</div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl flex items-center justify-center"
            style={{ border: '1px solid rgba(0,229,255,0.15)', height: '300px', background: 'rgba(0,229,255,0.03)' }}>
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4" style={{ color: 'var(--neon-cyan)' }} />
              <div className="font-orbitron text-white/40 text-sm uppercase tracking-wider">Карта откроется здесь</div>
              <div className="text-white/20 font-rubik text-xs mt-2">ул. Энергетиков, 42, Москва</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
                <Icon name="Zap" size={20} className="text-black" />
              </div>
              <span className="font-orbitron font-black text-lg neon-text-cyan">ВЕГА-ЭНЕРДЖИ</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_ITEMS.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="text-white/40 hover:text-white font-rubik text-sm uppercase tracking-wider transition-colors cursor-pointer">
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              {[{ icon: 'MessageCircle' }, { icon: 'Send' }, { icon: 'Instagram' }].map((s, i) => (
                <button key={i} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Icon name={s.icon} size={18} className="text-white/50" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-white/20 font-rubik text-sm"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            © 2024 ВЕГА-Энерджи. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  );
}