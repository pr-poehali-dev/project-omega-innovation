import { useState } from 'react'
import Icon from '@/components/ui/icon'

const BUDGET = 100_000_000_000

const ITEMS = [
  { id: 1,   emoji: '🍬', name: 'Жвачка', price: 1, description: 'Мятная, 5 штук' },
  { id: 2,   emoji: '🥤', name: 'Газировка', price: 2, description: 'Кола, 0.5 л' },
  { id: 3,   emoji: '🍦', name: 'Мороженое', price: 3, description: 'Ванильный рожок' },
  { id: 4,   emoji: '🍔', name: 'Бургер', price: 5, description: 'Просто поесть' },
  { id: 5,   emoji: '☕', name: 'Кофе в Starbucks', price: 7, description: 'Гранде латте' },
  { id: 6,   emoji: '🍺', name: 'Пиво в баре', price: 8, description: 'Крафтовое, пинта' },
  { id: 7,   emoji: '🍕', name: 'Пицца', price: 12, description: 'Маргарита, большая' },
  { id: 8,   emoji: '🎟️', name: 'Билет в кино', price: 15, description: 'IMAX, конечно' },
  { id: 9,   emoji: '📚', name: 'Книга', price: 20, description: 'Бестселлер NYT' },
  { id: 10,  emoji: '🧢', name: 'Кепка Supreme', price: 40, description: 'Лимитированная серия' },
  { id: 11,  emoji: '🌹', name: 'Букет роз', price: 50, description: '11 штук, с доставкой' },
  { id: 12,  emoji: '🎮', name: 'Игра в Steam', price: 60, description: 'AAA-новинка' },
  { id: 13,  emoji: '🎧', name: 'AirPods Pro', price: 90, description: 'С шумодавом' },
  { id: 14,  emoji: '👟', name: 'Кроссовки Nike', price: 150, description: 'Air Max лимитка' },
  { id: 15,  emoji: '🍾', name: 'Бутылка Dom Pérignon', price: 200, description: 'Урожай 2015 года' },
  { id: 16,  emoji: '🎸', name: 'Акустическая гитара', price: 300, description: 'Yamaha F310' },
  { id: 17,  emoji: '🕶️', name: 'Очки Gucci', price: 400, description: 'Солнцезащитные, оригинал' },
  { id: 18,  emoji: '🕹️', name: 'PlayStation 5', price: 500, description: 'Со всеми играми' },
  { id: 19,  emoji: '🛴', name: 'Электросамокат', price: 800, description: 'Xiaomi Pro 3' },
  { id: 20,  emoji: '⌚', name: 'Apple Watch Ultra', price: 900, description: 'Titanium, GPS' },
  { id: 21,  emoji: '📱', name: 'iPhone 16 Pro', price: 1_200, description: 'Последняя модель' },
  { id: 22,  emoji: '🎻', name: 'Скрипка ручной работы', price: 2_000, description: 'Итальянский мастер' },
  { id: 23,  emoji: '🛵', name: 'Скутер', price: 3_000, description: 'Электрический' },
  { id: 24,  emoji: '💻', name: 'MacBook Pro', price: 3_500, description: 'M4 Max, 64 ГБ' },
  { id: 25,  emoji: '🎺', name: 'Труба Bach Stradivarius', price: 4_500, description: 'Профессиональная' },
  { id: 26,  emoji: '🛋️', name: 'Дизайнерский диван', price: 8_000, description: 'Итальянская кожа' },
  { id: 27,  emoji: '🖼️', name: 'Картина молодого художника', price: 10_000, description: 'Галерея Сохо, Лондон' },
  { id: 28,  emoji: '💎', name: 'Бриллиантовое кольцо', price: 15_000, description: '2 карата, платина' },
  { id: 29,  emoji: '🏍️', name: 'Мотоцикл Ducati', price: 25_000, description: 'Panigale V4' },
  { id: 30,  emoji: '🐎', name: 'Породистая лошадь', price: 30_000, description: 'Арабский скакун' },
  { id: 31,  emoji: '⛵', name: 'Парусная яхта', price: 50_000, description: '12 метров, Средиземноморье' },
  { id: 32,  emoji: '⌚', name: 'Patek Philippe', price: 60_000, description: 'Nautilus, золото' },
  { id: 33,  emoji: '🚗', name: 'Tesla Model S', price: 90_000, description: 'Plaid, 1020 л.с.' },
  { id: 34,  emoji: '🐕', name: 'Редкая порода собаки', price: 150_000, description: 'Тибетский мастиф' },
  { id: 35,  emoji: '🚤', name: 'Моторная яхта', price: 200_000, description: '18 метров, 4 каюты' },
  { id: 36,  emoji: '🏠', name: 'Квартира в Москве', price: 300_000, description: '2 комнаты, центр' },
  { id: 37,  emoji: '🏎️', name: 'Lamborghini', price: 500_000, description: 'Huracán EVO' },
  { id: 38,  emoji: '🎨', name: 'Картина Бэнкси', price: 700_000, description: 'Оригинал, с сертификатом' },
  { id: 39,  emoji: '🏄', name: 'Вилла на Бали', price: 1_000_000, description: 'С бассейном и персоналом' },
  { id: 40,  emoji: '🚁', name: 'Вертолёт', price: 1_500_000, description: 'Robinson R66' },
  { id: 41,  emoji: '🐆', name: 'Гепард (легально)', price: 2_000_000, description: 'ОАЭ, с документами' },
  { id: 42,  emoji: '🏡', name: 'Вилла в Испании', price: 3_000_000, description: 'Побережье Коста-Брава' },
  { id: 43,  emoji: '🏰', name: 'Замок в Шотландии', price: 5_000_000, description: 'XIV век, 40 комнат' },
  { id: 44,  emoji: '✈️', name: 'Частный самолёт', price: 7_000_000, description: 'Cessna Citation' },
  { id: 45,  emoji: '🦁', name: 'Частный зоопарк', price: 10_000_000, description: 'С настоящими львами' },
  { id: 46,  emoji: '🌊', name: 'Подводная лодка', price: 15_000_000, description: 'Туристическая, 8 мест' },
  { id: 47,  emoji: '🎰', name: 'Казино в Лас-Вегасе', price: 20_000_000, description: 'Небольшое, но своё' },
  { id: 48,  emoji: '🌲', name: 'Посадить лес', price: 30_000_000, description: '300 млн деревьев' },
  { id: 49,  emoji: '🏝️', name: 'Частный остров', price: 50_000_000, description: 'Где-то в Карибском море' },
  { id: 50,  emoji: '🏫', name: '100 школ', price: 50_000_000, description: 'По всей планете' },
  { id: 51,  emoji: '🚀', name: 'Ракета SpaceX', price: 62_000_000, description: 'Один запуск Falcon 9' },
  { id: 52,  emoji: '🎡', name: 'Парк аттракционов', price: 80_000_000, description: 'Как маленький Дисней' },
  { id: 53,  emoji: '🐘', name: 'Спасти слонов Африки', price: 100_000_000, description: 'Все 415 000 особей' },
  { id: 54,  emoji: '🏟️', name: 'Стадион', price: 150_000_000, description: 'На 50 000 мест' },
  { id: 55,  emoji: '🎬', name: 'Киностудия', price: 200_000_000, description: 'Снять блокбастер' },
  { id: 56,  emoji: '🌋', name: 'Вулканический остров', price: 250_000_000, description: 'Исландия, необитаемый' },
  { id: 57,  emoji: '🛥️', name: 'Мегаяхта', price: 300_000_000, description: '90 метров роскоши' },
  { id: 58,  emoji: '🎢', name: 'Тематический парк', price: 400_000_000, description: 'Свой Disneyland' },
  { id: 59,  emoji: '🏙️', name: 'Небоскрёб в NYC', price: 500_000_000, description: '60 этажей на Манхэттене' },
  { id: 60,  emoji: '🌌', name: 'Телескоп как Хаббл', price: 600_000_000, description: 'На орбите Земли' },
  { id: 61,  emoji: '🛸', name: 'Полёт на МКС', price: 700_000_000, description: 'Как Том Круз' },
  { id: 62,  emoji: '🏔️', name: 'Горнолыжный курорт', price: 800_000_000, description: 'Альпы, 5 трасс' },
  { id: 63,  emoji: '⚽', name: 'Футбольный клуб', price: 1_000_000_000, description: 'Средний клуб АПЛ' },
  { id: 64,  emoji: '🎲', name: 'Онлайн-казино', price: 1_200_000_000, description: 'С лицензией, 10M игроков' },
  { id: 65,  emoji: '🌿', name: 'Национальный парк', price: 1_500_000_000, description: 'Как Йеллоустоун, только свой' },
  { id: 66,  emoji: '🏖️', name: 'Курорт на Мальдивах', price: 1_800_000_000, description: '50 вилл над водой' },
  { id: 67,  emoji: '🌍', name: 'Накормить страну', price: 2_000_000_000, description: '1 год еды для Эфиопии' },
  { id: 68,  emoji: '🎠', name: 'Сеть отелей', price: 2_500_000_000, description: '50 отелей по всему миру' },
  { id: 69,  emoji: '🔬', name: 'Научная лаборатория', price: 3_000_000_000, description: 'Как ЦЕРН, только компактнее' },
  { id: 70,  emoji: '🚢', name: 'Круизный лайнер', price: 3_500_000_000, description: '300 метров, 5000 пассажиров' },
  { id: 71,  emoji: '🌐', name: 'Стартап как Uber', price: 4_000_000_000, description: 'Раунд B, горячая ниша' },
  { id: 72,  emoji: '🏦', name: 'Купить банк', price: 5_000_000_000, description: 'Средний европейский банк' },
  { id: 73,  emoji: '🎪', name: 'Медиахолдинг', price: 6_000_000_000, description: '10 каналов + стриминг' },
  { id: 74,  emoji: '⚡', name: 'Атомная электростанция', price: 7_000_000_000, description: 'На 1 млн домов' },
  { id: 75,  emoji: '🌆', name: 'Купить город', price: 10_000_000_000, description: 'Небольшой, тысяч на 50' },
  { id: 76,  emoji: '🛰️', name: 'Запустить спутник', price: 15_000_000_000, description: 'На орбиту Земли' },
  { id: 77,  emoji: '🐋', name: 'Спасти океаны', price: 20_000_000_000, description: 'Очистить Тихий океан от пластика' },
  { id: 78,  emoji: '🧬', name: 'Вылечить болезнь', price: 30_000_000_000, description: 'Финансировать исследования рака' },
  { id: 79,  emoji: '🌏', name: 'Купить страну', price: 50_000_000_000, description: 'ВВП небольшого государства' },
  { id: 80,  emoji: '🌞', name: 'Солнечная энергия для Африки', price: 100_000_000_000, description: 'Весь континент на 10 лет' },
  // Бонусные абсурдные позиции
  { id: 81,  emoji: '🍟', name: 'Картошка фри', price: 3, description: 'Средняя, без соуса' },
  { id: 82,  emoji: '🧃', name: 'Сок в пакетике', price: 1, description: 'Яблочный, 200 мл' },
  { id: 83,  emoji: '🪥', name: 'Зубная щётка', price: 4, description: 'Oral-B, средняя жёсткость' },
  { id: 84,  emoji: '🧦', name: 'Носки', price: 6, description: 'Хлопок, пара' },
  { id: 85,  emoji: '🪣', name: 'Ведро', price: 9, description: 'Пластиковое, 10 литров' },
  { id: 86,  emoji: '🎈', name: 'Воздушный шарик', price: 2, description: 'Красный, гелиевый' },
  { id: 87,  emoji: '🖊️', name: 'Ручка BIC', price: 1, description: 'Синяя, шариковая' },
  { id: 88,  emoji: '🧻', name: 'Туалетная бумага', price: 3, description: '4 рулона, 3 слоя' },
  { id: 89,  emoji: '🥄', name: 'Серебряная ложка', price: 25, description: 'Настоящее серебро 925' },
  { id: 90,  emoji: '🪆', name: 'Матрёшка', price: 30, description: 'Расписная, 7 слоёв' },
  { id: 91,  emoji: '🦆', name: 'Резиновая уточка', price: 5, description: 'Пищит при нажатии' },
  { id: 92,  emoji: '🎀', name: 'Бант для кошки', price: 2, description: 'Розовый, с блёстками' },
  { id: 93,  emoji: '🪁', name: 'Рогатка', price: 8, description: 'Деревянная, классика' },
  { id: 94,  emoji: '🧲', name: 'Магнит на холодильник', price: 3, description: 'Из Парижа' },
  { id: 95,  emoji: '🎯', name: 'Дартс', price: 20, description: 'Набор из 3 стрел' },
  { id: 96,  emoji: '🪐', name: 'Назвать астероид', price: 150, description: 'Официально, через реестр МАС' },
  { id: 97,  emoji: '🦕', name: 'Зуб динозавра', price: 2_500, description: 'Трицератопс, 65 млн лет' },
  { id: 98,  emoji: '🌡️', name: 'Метеостанция', price: 5_000, description: 'Профессиональная, с радаром' },
  { id: 99,  emoji: '🧊', name: 'Айсберг на аукционе', price: 500_000, description: 'Гренландия, 10 000 тонн льда' },
  { id: 100, emoji: '🌈', name: 'Сделать радугу', price: 1_000_000, description: 'Система распыления воды над городом' },
]

function formatMoney(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

interface Props {
  onClose: () => void
}

export default function SpendingGame({ onClose }: Props) {
  const [spent, setSpent] = useState<Record<number, number>>({})
  const [showSummary, setShowSummary] = useState(false)

  const totalSpent = Object.entries(spent).reduce((sum, [id, count]) => {
    const item = ITEMS.find(i => i.id === Number(id))
    return sum + (item ? item.price * count : 0)
  }, 0)

  const remaining = BUDGET - totalSpent
  const progress = (totalSpent / BUDGET) * 100

  function buy(id: number) {
    const item = ITEMS.find(i => i.id === id)!
    if (remaining >= item.price) {
      setSpent(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    }
  }

  function sell(id: number) {
    setSpent(prev => {
      const next = { ...prev }
      if (next[id] > 1) next[id]--
      else delete next[id]
      return next
    })
  }

  const purchasedItems = ITEMS.filter(i => (spent[i.id] || 0) > 0)

  if (showSummary) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col font-mono overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full px-6 py-12 flex flex-col min-h-full">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">итоговый список</p>
          <h2 className="text-white text-3xl font-bold mb-1">Ты потратил</h2>
          <p className="text-4xl font-bold mb-8" style={{ color: totalSpent >= BUDGET ? '#f87171' : '#a3e635' }}>
            {formatMoney(totalSpent)}
          </p>

          {purchasedItems.length === 0 ? (
            <p className="text-gray-600 text-sm">Ты ничего не купил. Жадина 👀</p>
          ) : (
            <div className="flex flex-col gap-3 mb-8">
              {purchasedItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border border-gray-800 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <div className="text-white text-sm font-bold">{item.name}</div>
                      <div className="text-gray-500 text-xs">{item.description}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-white text-sm">×{spent[item.id]}</div>
                    <div className="text-gray-400 text-xs">{formatMoney(item.price * spent[item.id])}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-gray-800 pt-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 uppercase tracking-widest">Осталось</span>
              <span className={remaining <= 0 ? 'text-red-400 font-bold' : 'text-white font-bold'}>{formatMoney(remaining)}</span>
            </div>
          </div>

          {remaining <= 0 && (
            <p className="text-white text-center tracking-widest uppercase text-sm mb-8">💸 Планета куплена. Поздравляем.</p>
          )}

          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => setShowSummary(false)}
              className="flex-1 border border-gray-700 text-gray-400 hover:text-white hover:border-white py-3 text-xs tracking-widest uppercase transition-colors"
            >
              Назад
            </button>
            <button
              onClick={() => { setSpent({}); setShowSummary(false) }}
              className="flex-1 bg-white text-black py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Начать заново
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col font-mono">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">осталось потратить</p>
          <p className={`text-2xl font-bold tracking-tight ${remaining <= 0 ? 'text-red-400' : 'text-white'}`}>
            {formatMoney(remaining)}
          </p>
          <div className="mt-2 h-1 bg-gray-800 w-64 max-w-full">
            <div
              className="h-1 bg-white transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
        <button onClick={onClose} className="text-gray-600 hover:text-white transition-colors ml-4">
          <Icon name="X" size={20} />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 content-start">
        {ITEMS.map(item => {
          const count = spent[item.id] || 0
          const canAfford = remaining >= item.price
          return (
            <div
              key={item.id}
              className={`border p-4 transition-colors ${count > 0 ? 'border-white bg-white/5' : 'border-gray-800 hover:border-gray-600'}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className="text-white text-sm font-bold">{item.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.description}</div>
                  <div className="text-gray-400 text-xs mt-1 tracking-wider">{formatMoney(item.price)}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  {count > 0 && (
                    <button
                      onClick={() => sell(item.id)}
                      className="w-7 h-7 border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center text-lg leading-none"
                    >
                      −
                    </button>
                  )}
                  {count > 0 && (
                    <span className="text-white text-sm w-4 text-center">{count}</span>
                  )}
                  <button
                    onClick={() => buy(item.id)}
                    disabled={!canAfford}
                    className={`w-7 h-7 border flex items-center justify-center text-lg leading-none transition-colors ${canAfford ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-800 text-gray-800 cursor-not-allowed'}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      {purchasedItems.length > 0 && (
        <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between">
          {remaining <= 0
            ? <p className="text-red-400 tracking-widest uppercase text-xs">💸 Планета куплена!</p>
            : <p className="text-gray-500 text-xs tracking-widest uppercase">куплено {purchasedItems.length} позиций</p>
          }
          <button
            onClick={() => setShowSummary(true)}
            className="bg-white text-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
          >
            Итог →
          </button>
        </div>
      )}
    </div>
  )
}