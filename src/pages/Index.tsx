import { useState } from 'react';
import Icon from '@/components/ui/icon';

const LOGO = 'https://cdn.poehali.dev/projects/cd88e86c-4bf0-4232-b73d-f2649ed8c761/bucket/e5e8a2ab-c5b7-4640-92a8-fde34758dff2.png';
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
  { icon: 'Headset', title: 'VR-арена', desc: 'Полное погружение в виртуальную реальность — битвы, гонки и приключения в 360°!', color: '#00c8d7', bg: '#e6fbfd', age: '16+', emoji: '🥽' },
  { icon: 'Gamepad2', title: 'Аркадный зал', desc: 'Более 50 аркадных автоматов — классика и новинки для истинных геймеров', color: '#00c8d7', bg: '#e6fbfd', age: '6+', emoji: '🕹️' },
  { icon: 'Zap', title: 'Лазертаг', desc: 'Командные бои в тёмных лабиринтах с лазерным оружием!', color: '#ffd000', bg: '#fff9e0', age: '8+', emoji: '⚡' },
  { icon: 'Baby', title: 'Детская зона', desc: 'Мягкие лабиринты, карусели и интерактивные игры для малышей от 3 лет', color: '#ff7eb3', bg: '#fff0f6', age: '3+', emoji: '🧸' },
  { icon: 'Users', title: 'Семейная зона', desc: 'Совместные игры для всей семьи: квизы, настолки и мультиплеерные приключения', color: '#7ecbff', bg: '#eef7ff', age: 'Все', emoji: '👨‍👩‍👧‍👦' },
  { icon: 'Trophy', title: 'Киберспорт', desc: 'Топовые ПК-станции, еженедельные турниры и тренировки для серьёзных игроков', color: '#00c8d7', bg: '#e6fbfd', age: '14+', emoji: '🏆' },
];

const PRICES = [
  {
    name: 'Старт', emoji: '⭐', price: '599', per: '/ час',
    features: ['1 зона на выбор', 'Аркадный зал', 'Детская зона', 'Консультация'],
    color: '#00c8d7', textColor: 'white', popular: false,
  },
  {
    name: 'Энерджи', emoji: '🌟', price: '1 299', per: '/ час',
    features: ['Все игровые зоны', 'VR-арена включена', 'Лазертаг included', 'Без очереди', 'Напиток в подарок 🎁'],
    color: '#ffd000', textColor: '#3a3a4a', popular: true,
  },
  {
    name: 'Семейный', emoji: '💫', price: '2 499', per: '/ 3 часа',
    features: ['До 4 человек', 'Все зоны открыты', 'Детская + семейная', 'Личный гид', 'Фотосессия в подарок 📸'],
    color: '#00c8d7', textColor: 'white', popular: false,
  },
];

const GALLERY = [
  { src: HERO_IMG, title: 'Главный зал' },
  { src: VR_IMG, title: 'VR-арена' },
  { src: KIDS_IMG, title: 'Детская зона' },
  { src: HERO_IMG, title: 'Аркадный зал' },
  { src: VR_IMG, title: 'Лазертаг' },
  { src: KIDS_IMG, title: 'Семейная зона' },
];

function StarBg() {
  const stars = [
    { top: '8%', left: '5%', size: 28, delay: 0 },
    { top: '12%', left: '88%', size: 22, delay: 0.5 },
    { top: '25%', left: '92%', size: 18, delay: 1 },
    { top: '60%', left: '3%', size: 20, delay: 0.8 },
    { top: '75%', left: '90%', size: 26, delay: 0.3 },
    { top: '85%', left: '8%', size: 16, delay: 1.2 },
    { top: '45%', left: '95%', size: 14, delay: 0.6 },
  ];
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s, i) => (
        <div key={i} className="absolute animate-bounce-slow star-deco text-2xl"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: `${s.delay}s`, opacity: 0.7 }}>
          ★
        </div>
      ))}
      <div className="absolute rounded-full opacity-20" style={{ width: 300, height: 300, background: 'radial-gradient(circle, #00c8d7, transparent)', top: '10%', right: '-80px' }} />
      <div className="absolute rounded-full opacity-15" style={{ width: 200, height: 200, background: 'radial-gradient(circle, #ffd000, transparent)', bottom: '20%', left: '-60px' }} />
    </div>
  );
}

export default function Index() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', zone: '', date: '', time: '', tariff: '' });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <StarBg />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50"
        style={{ background: 'rgba(210,248,252,0.92)', backdropFilter: 'blur(16px)', borderBottom: '3px solid rgba(0,200,215,0.2)', boxShadow: '0 4px 24px rgba(0,150,200,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <img src={LOGO} alt="ВЕГА-Энерджи" className="h-14 w-14 object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm cursor-pointer bg-transparent border-0 ${activeNav === item.id ? 'active' : ''}`}>
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo('booking')} className="btn-yellow hidden lg:block px-6 py-2.5 text-sm cursor-pointer">
            Забронировать 🎯
          </button>

          <button className="lg:hidden cursor-pointer bg-transparent border-0" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#3a3a4a' }}>
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden px-6 pb-4 pt-2" style={{ borderTop: '2px solid rgba(0,200,215,0.15)' }}>
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 text-sm font-bold cursor-pointer bg-transparent border-0"
                style={{ color: '#3a3a4a', borderBottom: '1px solid rgba(0,200,215,0.1)' }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('booking')} className="btn-yellow mt-4 w-full py-3 text-sm cursor-pointer">
              Забронировать 🎯
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-badge mb-6">🎮 Игровой центр №1 в городе</div>
              <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#3a3a4a' }}>
                Заряди свою <span style={{ color: '#00c8d7' }}>ИГРОВУЮ</span>{' '}
                <span style={{ color: '#ffd000' }}>ЭНЕРГИЮ!</span>
              </h1>
              <p className="text-lg mb-8 font-semibold" style={{ color: '#666677' }}>
                VR-арены, лазертаг, аркады, детская и семейная зоны — всё для незабываемого отдыха под одной крышей! 🚀
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={() => scrollTo('booking')} className="btn-yellow px-8 py-4 text-base cursor-pointer">
                  Забронировать сейчас!
                </button>
                <button onClick={() => scrollTo('games')} className="btn-outline px-8 py-4 text-base cursor-pointer">
                  Все зоны
                </button>
              </div>
              <div className="flex gap-8">
                {[['50+', 'аттракционов 🎡'], ['5000', 'м² площадь'], ['12', 'зон отдыха ✨']].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-3xl font-black" style={{ color: '#00c8d7' }}>{n}</div>
                    <div className="text-sm font-bold mt-1" style={{ color: '#888899' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden animate-float"
                  style={{ border: '4px solid rgba(0,200,215,0.35)', boxShadow: '0 24px 64px rgba(0,150,200,0.2)', maxWidth: 440 }}>
                  <img src={HERO_IMG} alt="ВЕГА-Энерджи" className="w-full object-cover" style={{ height: 360 }} />
                </div>
                <div className="absolute -top-6 -right-6 animate-wiggle">
                  <div className="rounded-2xl px-5 py-4 text-center"
                    style={{ background: 'linear-gradient(135deg, #ffd000, #ffbe00)', boxShadow: '0 8px 24px rgba(230,168,0,0.4)', border: '3px solid white' }}>
                    <div className="text-3xl font-black" style={{ color: '#3a3a4a' }}>★ 4.9</div>
                    <div className="text-xs font-bold" style={{ color: '#3a3a4a' }}>рейтинг</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3"
                  style={{ background: 'white', boxShadow: '0 8px 24px rgba(0,150,200,0.2)', border: '3px solid rgba(0,200,215,0.3)' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🟢</span>
                    <div>
                      <div className="text-sm font-black" style={{ color: '#3a3a4a' }}>Сейчас открыто</div>
                      <div className="text-xs font-semibold" style={{ color: '#888899' }}>до 23:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-4">🎮 Наши зоны</div>
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ color: '#3a3a4a' }}>
              Выбери <span style={{ color: '#00c8d7' }}>свою игру!</span>
            </h2>
            <p className="text-lg font-semibold" style={{ color: '#888899' }}>От тихих семейных вечеров до жарких турниров — у нас есть всё</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game, i) => (
              <div key={i} className="card-fun p-6 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
                    style={{ background: game.bg }}>
                    {game.emoji}
                  </div>
                  <span className="text-sm font-black px-3 py-1 rounded-full"
                    style={{ background: game.bg, color: game.color }}>
                    {game.age}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: '#3a3a4a' }}>{game.title}</h3>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: '#888899' }}>{game.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                  style={{ color: game.color }}>
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="py-20 relative z-10 wave-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden"
                style={{ border: '4px solid rgba(255,208,0,0.4)', boxShadow: '0 20px 60px rgba(230,168,0,0.15)' }}>
                <img src={KIDS_IMG} alt="Детская зона" className="w-full object-cover" style={{ height: 380 }} />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 text-center"
                style={{ background: 'linear-gradient(135deg, #ffd000, #ffbe00)', border: '3px solid white', boxShadow: '0 8px 24px rgba(230,168,0,0.35)' }}>
                <div className="text-3xl font-black" style={{ color: '#3a3a4a' }}>3+</div>
                <div className="text-xs font-bold" style={{ color: '#3a3a4a' }}>с 3 лет</div>
              </div>
            </div>

            <div>
              <div className="section-badge section-badge-yellow mb-6">👨‍👩‍👧‍👦 Специальная зона</div>
              <h2 className="text-4xl font-black mb-5" style={{ color: '#3a3a4a' }}>
                Семья и <span style={{ color: '#e6a800' }}>дети!</span>
              </h2>
              <p className="text-lg font-semibold mb-6 leading-relaxed" style={{ color: '#666677' }}>
                Мы создали особые зоны, где каждый — от малышей до бабушек — найдёт развлечение по душе. Безопасно, весело, незабываемо! 🌈
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '🧩 Мягкие игровые лабиринты для детей от 3 лет',
                  '🎮 Интерактивные напольные игры',
                  '🃏 Настольные мультиплеерные квизы',
                  '📸 Зона фото с яркими декорациями',
                  '☕ Уютные комнаты отдыха для родителей',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold" style={{ color: '#555566' }}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollTo('booking')} className="btn-yellow px-8 py-4 text-base cursor-pointer">
                Забронировать для семьи 👨‍👩‍👧
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-4">💰 Наши тарифы</div>
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ color: '#3a3a4a' }}>
              Выбери <span style={{ color: '#00c8d7' }}>тариф!</span>
            </h2>
            <p className="font-semibold text-lg" style={{ color: '#888899' }}>Прозрачные цены без скрытых платежей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
            {PRICES.map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 relative ${plan.popular ? 'scale-105' : 'card-fun'}`}
                style={plan.popular ? {
                  background: `linear-gradient(145deg, ${plan.color}, #ffe855)`,
                  border: '4px solid white',
                  boxShadow: '0 20px 60px rgba(230,168,0,0.35)',
                } : {}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-black"
                    style={{ background: '#3a3a4a', color: 'white' }}>
                    🔥 Популярный
                  </div>
                )}
                <div className="text-4xl mb-3">{plan.emoji}</div>
                <div className="text-lg font-black mb-1" style={{ color: plan.popular ? plan.textColor : '#3a3a4a' }}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-black" style={{ color: plan.popular ? plan.textColor : '#3a3a4a' }}>{plan.price}₽</span>
                  <span className="font-bold pb-1" style={{ color: plan.popular ? 'rgba(58,58,74,0.6)' : '#aaa' }}>{plan.per}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-semibold"
                      style={{ color: plan.popular ? plan.textColor : '#555566' }}>
                      <Icon name="Check" size={16} style={{ color: plan.popular ? '#3a3a4a' : '#00c8d7', marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('booking')}
                  className={`w-full py-3 rounded-2xl font-black text-sm cursor-pointer transition-all duration-200 ${plan.popular ? 'btn-cyan' : 'btn-yellow'}`}>
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 relative z-10 wave-section">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-badge mb-4">📅 Онлайн-запись</div>
            <h2 className="text-4xl font-black mb-3" style={{ color: '#3a3a4a' }}>
              Забронируй <span style={{ color: '#00c8d7' }}>место!</span>
            </h2>
            <p className="font-semibold" style={{ color: '#888899' }}>Без очередей и ожидания — займи лучшее место заранее</p>
          </div>

          {submitted ? (
            <div className="card-fun p-12 text-center animate-pop-in">
              <div className="text-7xl mb-4">🎉</div>
              <h3 className="text-2xl font-black mb-2" style={{ color: '#3a3a4a' }}>Заявка принята!</h3>
              <p className="font-semibold" style={{ color: '#888899' }}>Мы свяжемся с вами в течение 30 минут</p>
              <button onClick={() => setSubmitted(false)} className="btn-cyan mt-6 px-8 py-3 cursor-pointer">
                Новая заявка
              </button>
            </div>
          ) : (
            <div className="card-fun p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Ваше имя</label>
                  <input
                    className="input-fun w-full px-4 py-3 text-sm"
                    placeholder="Иван Иванов"
                    value={bookingForm.name}
                    onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Телефон</label>
                  <input
                    className="input-fun w-full px-4 py-3 text-sm"
                    placeholder="+7 (999) 000-00-00"
                    value={bookingForm.phone}
                    onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Игровая зона</label>
                  <select
                    className="input-fun w-full px-4 py-3 text-sm cursor-pointer"
                    value={bookingForm.zone}
                    onChange={e => setBookingForm({ ...bookingForm, zone: e.target.value })}
                  >
                    <option value="">Выбрать зону</option>
                    {GAMES.map(g => <option key={g.title} value={g.title}>{g.emoji} {g.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Тариф</label>
                  <select
                    className="input-fun w-full px-4 py-3 text-sm cursor-pointer"
                    value={bookingForm.tariff}
                    onChange={e => setBookingForm({ ...bookingForm, tariff: e.target.value })}
                  >
                    <option value="">Выбрать тариф</option>
                    <option>⭐ Старт — 599₽/час</option>
                    <option>🌟 Энерджи — 1299₽/час</option>
                    <option>💫 Семейный — 2499₽/3ч</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Дата</label>
                  <input
                    type="date"
                    className="input-fun w-full px-4 py-3 text-sm"
                    value={bookingForm.date}
                    onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-black mb-2" style={{ color: '#3a3a4a' }}>Время</label>
                  <input
                    type="time"
                    className="input-fun w-full px-4 py-3 text-sm"
                    value={bookingForm.time}
                    onChange={e => setBookingForm({ ...bookingForm, time: e.target.value })}
                  />
                </div>
              </div>
              <button onClick={() => setSubmitted(true)} className="btn-yellow w-full mt-6 py-4 text-base cursor-pointer">
                Отправить заявку 🎯
              </button>
              <p className="text-center text-sm font-semibold mt-3" style={{ color: '#aab' }}>
                Мы свяжемся с вами в течение 30 минут
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-6">🏆 О нас</div>
              <h2 className="text-4xl font-black mb-5" style={{ color: '#3a3a4a' }}>
                Мы — больше <span style={{ color: '#00c8d7' }}>чем игры!</span>
              </h2>
              <p className="text-lg font-semibold mb-4 leading-relaxed" style={{ color: '#666677' }}>
                ВЕГА-Энерджи — это пространство, где технологии встречаются с весельем. С 2019 года мы создаём незабываемые впечатления для всей семьи!
              </p>
              <p className="font-semibold mb-8 leading-relaxed" style={{ color: '#888899' }}>
                Постоянно обновляем парк развлечений, следим за безопасностью и счастьем каждого гостя. Нас выбирают снова и снова! 💙
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['50 000+', 'гостей в год 🎉'], ['98%', 'довольных ❤️'], ['4.9★', 'рейтинг'], ['5 лет', 'работаем']].map(([n, l]) => (
                  <div key={l} className="card-fun p-4 text-center">
                    <div className="text-2xl font-black" style={{ color: '#00c8d7' }}>{n}</div>
                    <div className="text-xs font-bold mt-1" style={{ color: '#888899' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden"
                style={{ border: '4px solid rgba(0,200,215,0.3)', boxShadow: '0 20px 60px rgba(0,150,200,0.15)' }}>
                <img src={VR_IMG} alt="О нас" className="w-full object-cover" style={{ height: 420 }} />
              </div>
              <div className="absolute top-6 -right-5 rounded-2xl px-5 py-4 text-center"
                style={{ background: 'white', border: '3px solid rgba(0,200,215,0.3)', boxShadow: '0 8px 24px rgba(0,150,200,0.15)' }}>
                <div className="text-3xl font-black" style={{ color: '#00c8d7' }}>2019</div>
                <div className="text-xs font-bold" style={{ color: '#888899' }}>год открытия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 relative z-10 wave-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-4">📸 Галерея</div>
            <h2 className="text-4xl font-black mb-3" style={{ color: '#3a3a4a' }}>
              Вид <span style={{ color: '#00c8d7' }}>изнутри!</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div key={i}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${i === 0 ? 'md:col-span-2 row-span-2' : ''}`}
                style={{ border: '3px solid rgba(0,200,215,0.2)' }}>
                <img src={img.src} alt={img.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-108 ${i === 0 ? 'h-64 md:h-full min-h-72' : 'h-40 md:h-52'}`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,80,100,0.7), transparent)' }}>
                  <span className="font-black text-sm text-white">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-4">📍 Контакты</div>
            <h2 className="text-4xl font-black mb-3" style={{ color: '#3a3a4a' }}>
              Найди <span style={{ color: '#00c8d7' }}>нас!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { emoji: '📍', label: 'Адрес', value: 'ул. Энергетиков, 42\nг. Москва', color: '#00c8d7' },
              { emoji: '📞', label: 'Телефон', value: '+7 (495) 123-45-67', color: '#00c8d7' },
              { emoji: '🕐', label: 'Режим работы', value: 'Пн–Пт: 12:00–23:00\nСб–Вс: 10:00–23:00', color: '#e6a800' },
              { emoji: '📧', label: 'Email', value: 'info@vega-energy.ru', color: '#00c8d7' },
            ].map((c, i) => (
              <div key={i} className="card-fun p-6 text-center">
                <div className="text-4xl mb-3">{c.emoji}</div>
                <div className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: c.color }}>{c.label}</div>
                <div className="text-sm font-semibold whitespace-pre-line" style={{ color: '#3a3a4a' }}>{c.value}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl flex items-center justify-center"
            style={{ height: 280, background: 'white', border: '3px solid rgba(0,200,215,0.2)', boxShadow: '0 8px 32px rgba(0,150,200,0.08)' }}>
            <div className="text-center">
              <div className="text-6xl mb-3">🗺️</div>
              <div className="font-black text-lg mb-1" style={{ color: '#3a3a4a' }}>Карта откроется здесь</div>
              <div className="text-sm font-semibold" style={{ color: '#aab' }}>ул. Энергетиков, 42, Москва</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-10"
        style={{ background: '#3a3a4a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
              <img src={LOGO} alt="ВЕГА-Энерджи" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-black text-lg" style={{ color: '#00c8d7' }}>ВЕГА-ЭНЕРДЖИ</div>
                <div className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>Игровой центр</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {NAV_ITEMS.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="text-sm font-bold cursor-pointer bg-transparent border-0 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00c8d7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {[{ icon: 'MessageCircle', label: 'VK' }, { icon: 'Send', label: 'TG' }, { icon: 'Instagram', label: 'IG' }].map((s, i) => (
                <button key={i} className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.12)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,200,215,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
                  <Icon name={s.icon} size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-sm font-semibold pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)' }}>
            © 2024 ВЕГА-Энерджи. Все права защищены. Сделано с ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
