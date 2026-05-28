import { useState } from 'react'
import Icon from '@/components/ui/icon'

const BUDGET = 10_000_000_000

const ITEMS = [
  { id: 1,  emoji: '🍔', name: 'Бургер', price: 5, description: 'Просто поесть' },
  { id: 2,  emoji: '☕', name: 'Кофе в Starbucks', price: 7, description: 'Гранде латте' },
  { id: 3,  emoji: '🎟️', name: 'Билет в кино', price: 15, description: 'IMAX, конечно' },
  { id: 4,  emoji: '📚', name: 'Книга', price: 20, description: 'Бестселлер NYT' },
  { id: 5,  emoji: '🎮', name: 'Игра в Steam', price: 60, description: 'AAA-новинка' },
  { id: 6,  emoji: '👟', name: 'Кроссовки Nike', price: 150, description: 'Air Max лимитка' },
  { id: 7,  emoji: '📱', name: 'iPhone 16 Pro', price: 1_200, description: 'Последняя модель' },
  { id: 8,  emoji: '🛵', name: 'Скутер', price: 3_000, description: 'Электрический' },
  { id: 9,  emoji: '💻', name: 'MacBook Pro', price: 3_500, description: 'M4 Max, 64 ГБ' },
  { id: 10, emoji: '🛋️', name: 'Дизайнерский диван', price: 8_000, description: 'Итальянская кожа' },
  { id: 11, emoji: '🏍️', name: 'Мотоцикл Ducati', price: 25_000, description: 'Panigale V4' },
  { id: 12, emoji: '🚗', name: 'Tesla Model S', price: 90_000, description: 'Plaid, 1020 л.с.' },
  { id: 13, emoji: '🏠', name: 'Квартира в Москве', price: 300_000, description: '2 комнаты, центр' },
  { id: 14, emoji: '🏎️', name: 'Lamborghini', price: 500_000, description: 'Huracán EVO' },
  { id: 15, emoji: '🚁', name: 'Вертолёт', price: 1_500_000, description: 'Robinson R66' },
  { id: 16, emoji: '🏡', name: 'Вилла в Испании', price: 3_000_000, description: 'Побережье Коста-Брава' },
  { id: 17, emoji: '✈️', name: 'Частный самолёт', price: 7_000_000, description: 'Cessna Citation' },
  { id: 18, emoji: '🦁', name: 'Частный зоопарк', price: 10_000_000, description: 'С настоящими львами' },
  { id: 19, emoji: '🌲', name: 'Посадить лес', price: 30_000_000, description: '300 млн деревьев' },
  { id: 20, emoji: '🏝️', name: 'Частный остров', price: 50_000_000, description: 'Где-то в Карибском море' },
  { id: 21, emoji: '🏫', name: '100 школ', price: 50_000_000, description: 'По всей планете' },
  { id: 22, emoji: '🚀', name: 'Ракета SpaceX', price: 62_000_000, description: 'Один запуск Falcon 9' },
  { id: 23, emoji: '🐘', name: 'Спасти слонов Африки', price: 100_000_000, description: 'Все 415 000 особей' },
  { id: 24, emoji: '🎬', name: 'Киностудия', price: 200_000_000, description: 'Снять блокбастер' },
  { id: 25, emoji: '🛥️', name: 'Мегаяхта', price: 300_000_000, description: '90 метров роскоши' },
  { id: 26, emoji: '🏙️', name: 'Небоскрёб в NYC', price: 500_000_000, description: '60 этажей на Манхэттене' },
  { id: 27, emoji: '⚽', name: 'Футбольный клуб', price: 1_000_000_000, description: 'Средний клуб АПЛ' },
  { id: 28, emoji: '🌍', name: 'Накормить страну', price: 2_000_000_000, description: '1 год еды для Эфиопии' },
  { id: 29, emoji: '🏦', name: 'Купить банк', price: 5_000_000_000, description: 'Средний европейский банк' },
  { id: 30, emoji: '🌐', name: 'Купить всё', price: 10_000_000_000, description: 'Весь бюджет за раз' },
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
      {remaining <= 0 && (
        <div className="border-t border-gray-800 px-6 py-4 text-center">
          <p className="text-white tracking-widest uppercase text-sm">💸 Всё потрачено! Планета куплена.</p>
        </div>
      )}
    </div>
  )
}