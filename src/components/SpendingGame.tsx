import { useState } from 'react'
import Icon from '@/components/ui/icon'

const BUDGET = 100_000_000_000

const ITEMS = [
  { id: 1,   img: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=80&h=80&fit=crop', name: 'Жвачка', price: 1, description: 'Мятная, 5 штук' },
  { id: 2,   img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=80&h=80&fit=crop', name: 'Газировка', price: 2, description: 'Кола, 0.5 л' },
  { id: 3,   img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=80&h=80&fit=crop', name: 'Мороженое', price: 3, description: 'Ванильный рожок' },
  { id: 4,   img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop', name: 'Бургер', price: 5, description: 'Просто поесть' },
  { id: 5,   img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&h=80&fit=crop', name: 'Кофе в Starbucks', price: 7, description: 'Гранде латте' },
  { id: 6,   img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=80&h=80&fit=crop', name: 'Пиво в баре', price: 8, description: 'Крафтовое, пинта' },
  { id: 7,   img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&h=80&fit=crop', name: 'Пицца', price: 12, description: 'Маргарита, большая' },
  { id: 8,   img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=80&h=80&fit=crop', name: 'Билет в кино', price: 15, description: 'IMAX, конечно' },
  { id: 9,   img: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=80&h=80&fit=crop', name: 'Книга', price: 20, description: 'Бестселлер NYT' },
  { id: 10,  img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=80&h=80&fit=crop', name: 'Кепка Supreme', price: 40, description: 'Лимитированная серия' },
  { id: 11,  img: 'https://images.unsplash.com/photo-1490750967868-88df5691aef4?w=80&h=80&fit=crop', name: 'Букет роз', price: 50, description: '11 штук, с доставкой' },
  { id: 12,  img: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=80&h=80&fit=crop', name: 'Игра в Steam', price: 60, description: 'AAA-новинка' },
  { id: 13,  img: 'https://images.unsplash.com/photo-1588423771073-b8903fead770?w=80&h=80&fit=crop', name: 'AirPods Pro', price: 90, description: 'С шумодавом' },
  { id: 14,  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop', name: 'Кроссовки Nike', price: 150, description: 'Air Max лимитка' },
  { id: 15,  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop', name: 'Бутылка Dom Pérignon', price: 200, description: 'Урожай 2015 года' },
  { id: 16,  img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=80&h=80&fit=crop', name: 'Акустическая гитара', price: 300, description: 'Yamaha F310' },
  { id: 17,  img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop', name: 'Очки Gucci', price: 400, description: 'Солнцезащитные, оригинал' },
  { id: 18,  img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=80&h=80&fit=crop', name: 'PlayStation 5', price: 500, description: 'Со всеми играми' },
  { id: 19,  img: 'https://images.unsplash.com/photo-1558618047-f4e60c1e3e13?w=80&h=80&fit=crop', name: 'Электросамокат', price: 800, description: 'Xiaomi Pro 3' },
  { id: 20,  img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=80&h=80&fit=crop', name: 'Apple Watch Ultra', price: 900, description: 'Titanium, GPS' },
  { id: 21,  img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop', name: 'iPhone 16 Pro', price: 1_200, description: 'Последняя модель' },
  { id: 22,  img: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=80&h=80&fit=crop', name: 'Скрипка ручной работы', price: 2_000, description: 'Итальянский мастер' },
  { id: 23,  img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=80&h=80&fit=crop', name: 'Скутер', price: 3_000, description: 'Электрический' },
  { id: 24,  img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop', name: 'MacBook Pro', price: 3_500, description: 'M4 Max, 64 ГБ' },
  { id: 25,  img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=80&h=80&fit=crop', name: 'Труба Bach Stradivarius', price: 4_500, description: 'Профессиональная' },
  { id: 26,  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&h=80&fit=crop', name: 'Дизайнерский диван', price: 8_000, description: 'Итальянская кожа' },
  { id: 27,  img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=80&h=80&fit=crop', name: 'Картина молодого художника', price: 10_000, description: 'Галерея Сохо, Лондон' },
  { id: 28,  img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=80&h=80&fit=crop', name: 'Бриллиантовое кольцо', price: 15_000, description: '2 карата, платина' },
  { id: 29,  img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=80&h=80&fit=crop', name: 'Мотоцикл Ducati', price: 25_000, description: 'Panigale V4' },
  { id: 30,  img: 'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=80&h=80&fit=crop', name: 'Породистая лошадь', price: 30_000, description: 'Арабский скакун' },
  { id: 31,  img: 'https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?w=80&h=80&fit=crop', name: 'Парусная яхта', price: 50_000, description: '12 метров, Средиземноморье' },
  { id: 32,  img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=80&h=80&fit=crop', name: 'Patek Philippe', price: 60_000, description: 'Nautilus, золото' },
  { id: 33,  img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=80&h=80&fit=crop', name: 'Tesla Model S', price: 90_000, description: 'Plaid, 1020 л.с.' },
  { id: 34,  img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop', name: 'Редкая порода собаки', price: 150_000, description: 'Тибетский мастиф' },
  { id: 35,  img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=80&h=80&fit=crop', name: 'Моторная яхта', price: 200_000, description: '18 метров, 4 каюты' },
  { id: 36,  img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&h=80&fit=crop', name: 'Квартира в Москве', price: 300_000, description: '2 комнаты, центр' },
  { id: 37,  img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=80&h=80&fit=crop', name: 'Lamborghini', price: 500_000, description: 'Huracán EVO' },
  { id: 38,  img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=80&h=80&fit=crop', name: 'Картина Бэнкси', price: 700_000, description: 'Оригинал, с сертификатом' },
  { id: 39,  img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=80&h=80&fit=crop', name: 'Вилла на Бали', price: 1_000_000, description: 'С бассейном и персоналом' },
  { id: 40,  img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=80&h=80&fit=crop', name: 'Вертолёт', price: 1_500_000, description: 'Robinson R66' },
  { id: 41,  img: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=80&h=80&fit=crop', name: 'Гепард (легально)', price: 2_000_000, description: 'ОАЭ, с документами' },
  { id: 42,  img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&h=80&fit=crop', name: 'Вилла в Испании', price: 3_000_000, description: 'Побережье Коста-Брава' },
  { id: 43,  img: 'https://images.unsplash.com/photo-1548625361-58a9b86aa83b?w=80&h=80&fit=crop', name: 'Замок в Шотландии', price: 5_000_000, description: 'XIV век, 40 комнат' },
  { id: 44,  img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=80&h=80&fit=crop', name: 'Частный самолёт', price: 7_000_000, description: 'Cessna Citation' },
  { id: 45,  img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=80&h=80&fit=crop', name: 'Частный зоопарк', price: 10_000_000, description: 'С настоящими львами' },
  { id: 46,  img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=80&h=80&fit=crop', name: 'Подводная лодка', price: 15_000_000, description: 'Туристическая, 8 мест' },
  { id: 47,  img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=80&h=80&fit=crop', name: 'Казино в Лас-Вегасе', price: 20_000_000, description: 'Небольшое, но своё' },
  { id: 48,  img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=80&h=80&fit=crop', name: 'Посадить лес', price: 30_000_000, description: '300 млн деревьев' },
  { id: 49,  img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=80&h=80&fit=crop', name: 'Частный остров', price: 50_000_000, description: 'Где-то в Карибском море' },
  { id: 50,  img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=80&h=80&fit=crop', name: '100 школ', price: 50_000_000, description: 'По всей планете' },
  { id: 51,  img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=80&h=80&fit=crop', name: 'Ракета SpaceX', price: 62_000_000, description: 'Один запуск Falcon 9' },
  { id: 52,  img: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=80&h=80&fit=crop', name: 'Парк аттракционов', price: 80_000_000, description: 'Как маленький Дисней' },
  { id: 53,  img: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?w=80&h=80&fit=crop', name: 'Спасти слонов Африки', price: 100_000_000, description: 'Все 415 000 особей' },
  { id: 54,  img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop', name: 'Стадион', price: 150_000_000, description: 'На 50 000 мест' },
  { id: 55,  img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=80&h=80&fit=crop', name: 'Киностудия', price: 200_000_000, description: 'Снять блокбастер' },
  { id: 56,  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', name: 'Вулканический остров', price: 250_000_000, description: 'Исландия, необитаемый' },
  { id: 57,  img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=80&h=80&fit=crop', name: 'Мегаяхта', price: 300_000_000, description: '90 метров роскоши' },
  { id: 58,  img: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=80&h=80&fit=crop', name: 'Тематический парк', price: 400_000_000, description: 'Свой Disneyland' },
  { id: 59,  img: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=80&h=80&fit=crop', name: 'Небоскрёб в NYC', price: 500_000_000, description: '60 этажей на Манхэттене' },
  { id: 60,  img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=80&h=80&fit=crop', name: 'Телескоп как Хаббл', price: 600_000_000, description: 'На орбите Земли' },
  { id: 61,  img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=80&h=80&fit=crop', name: 'Полёт на МКС', price: 700_000_000, description: 'Как Том Круз' },
  { id: 62,  img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=80&h=80&fit=crop', name: 'Горнолыжный курорт', price: 800_000_000, description: 'Альпы, 5 трасс' },
  { id: 63,  img: 'https://images.unsplash.com/photo-1540747913346-19212a4c52d6?w=80&h=80&fit=crop', name: 'Футбольный клуб', price: 1_000_000_000, description: 'Средний клуб АПЛ' },
  { id: 64,  img: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=80&h=80&fit=crop', name: 'Онлайн-казино', price: 1_200_000_000, description: 'С лицензией, 10M игроков' },
  { id: 65,  img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=80&h=80&fit=crop', name: 'Национальный парк', price: 1_500_000_000, description: 'Как Йеллоустоун, только свой' },
  { id: 66,  img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=80&h=80&fit=crop', name: 'Курорт на Мальдивах', price: 1_800_000_000, description: '50 вилл над водой' },
  { id: 67,  img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=80&h=80&fit=crop', name: 'Накормить страну', price: 2_000_000_000, description: '1 год еды для Эфиопии' },
  { id: 68,  img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=80&h=80&fit=crop', name: 'Сеть отелей', price: 2_500_000_000, description: '50 отелей по всему миру' },
  { id: 69,  img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=80&h=80&fit=crop', name: 'Научная лаборатория', price: 3_000_000_000, description: 'Как ЦЕРН, только компактнее' },
  { id: 70,  img: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=80&h=80&fit=crop', name: 'Круизный лайнер', price: 3_500_000_000, description: '300 метров, 5000 пассажиров' },
  { id: 71,  img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=80&h=80&fit=crop', name: 'Стартап как Uber', price: 4_000_000_000, description: 'Раунд B, горячая ниша' },
  { id: 72,  img: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=80&h=80&fit=crop', name: 'Купить банк', price: 5_000_000_000, description: 'Средний европейский банк' },
  { id: 73,  img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=80&fit=crop', name: 'Медиахолдинг', price: 6_000_000_000, description: '10 каналов + стриминг' },
  { id: 74,  img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=80&h=80&fit=crop', name: 'Атомная электростанция', price: 7_000_000_000, description: 'На 1 млн домов' },
  { id: 75,  img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=80&h=80&fit=crop', name: 'Купить город', price: 10_000_000_000, description: 'Небольшой, тысяч на 50' },
  { id: 76,  img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=80&h=80&fit=crop', name: 'Запустить спутник', price: 15_000_000_000, description: 'На орбиту Земли' },
  { id: 77,  img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=80&h=80&fit=crop', name: 'Спасти океаны', price: 20_000_000_000, description: 'Очистить Тихий океан от пластика' },
  { id: 78,  img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=80&h=80&fit=crop', name: 'Вылечить болезнь', price: 30_000_000_000, description: 'Финансировать исследования рака' },
  { id: 79,  img: 'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=80&h=80&fit=crop', name: 'Купить страну', price: 50_000_000_000, description: 'ВВП небольшого государства' },
  { id: 80,  img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=80&h=80&fit=crop', name: 'Солнечная энергия для Африки', price: 100_000_000_000, description: 'Весь континент на 10 лет' },
  { id: 81,  img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&h=80&fit=crop', name: 'Картошка фри', price: 3, description: 'Средняя, без соуса' },
  { id: 82,  img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=80&h=80&fit=crop', name: 'Сок в пакетике', price: 1, description: 'Яблочный, 200 мл' },
  { id: 83,  img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop', name: 'Зубная щётка', price: 4, description: 'Oral-B, средняя жёсткость' },
  { id: 84,  img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=80&h=80&fit=crop', name: 'Носки', price: 6, description: 'Хлопок, пара' },
  { id: 85,  img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=80&h=80&fit=crop', name: 'Ведро', price: 9, description: 'Пластиковое, 10 литров' },
  { id: 86,  img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=80&h=80&fit=crop', name: 'Воздушный шарик', price: 2, description: 'Красный, гелиевый' },
  { id: 87,  img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=80&h=80&fit=crop', name: 'Ручка BIC', price: 1, description: 'Синяя, шариковая' },
  { id: 88,  img: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=80&h=80&fit=crop', name: 'Туалетная бумага', price: 3, description: '4 рулона, 3 слоя' },
  { id: 89,  img: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=80&h=80&fit=crop', name: 'Серебряная ложка', price: 25, description: 'Настоящее серебро 925' },
  { id: 90,  img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=80&h=80&fit=crop', name: 'Матрёшка', price: 30, description: 'Расписная, 7 слоёв' },
  { id: 91,  img: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=80&h=80&fit=crop', name: 'Резиновая уточка', price: 5, description: 'Пищит при нажатии' },
  { id: 92,  img: 'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=80&h=80&fit=crop', name: 'Бант для кошки', price: 2, description: 'Розовый, с блёстками' },
  { id: 93,  img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=80&h=80&fit=crop', name: 'Рогатка', price: 8, description: 'Деревянная, классика' },
  { id: 94,  img: 'https://images.unsplash.com/photo-1502920514313-52581002a659?w=80&h=80&fit=crop', name: 'Магнит на холодильник', price: 3, description: 'Из Парижа' },
  { id: 95,  img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop', name: 'Дартс', price: 20, description: 'Набор из 3 стрел' },
  { id: 96,  img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=80&h=80&fit=crop', name: 'Назвать астероид', price: 150, description: 'Официально, через реестр МАС' },
  { id: 97,  img: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=80&h=80&fit=crop', name: 'Зуб динозавра', price: 2_500, description: 'Трицератопс, 65 млн лет' },
  { id: 98,  img: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=80&h=80&fit=crop', name: 'Метеостанция', price: 5_000, description: 'Профессиональная, с радаром' },
  { id: 99,  img: 'https://images.unsplash.com/photo-1551373884-8a0750074df7?w=80&h=80&fit=crop', name: 'Айсберг на аукционе', price: 500_000, description: 'Гренландия, 10 000 тонн льда' },
  { id: 100, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop', name: 'Сделать радугу', price: 1_000_000, description: 'Система распыления воды над городом' },
]

const SORTED_ITEMS = [...ITEMS].sort((a, b) => a.price - b.price)

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
                    <img src={item.img} alt={item.name} className="w-10 h-10 object-cover shrink-0 grayscale opacity-80" />
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
        {SORTED_ITEMS.map(item => {
          const count = spent[item.id] || 0
          const canAfford = remaining >= item.price
          return (
            <div
              key={item.id}
              className={`border p-4 transition-colors ${count > 0 ? 'border-white bg-white/5' : 'border-gray-800 hover:border-gray-600'}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0 flex gap-3 items-start">
                  <img src={item.img} alt={item.name} className="w-12 h-12 object-cover shrink-0 grayscale opacity-80" />
                  <div className="min-w-0">
                    <div className="text-white text-sm font-bold">{item.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.description}</div>
                    <div className="text-gray-400 text-xs mt-1 tracking-wider">{formatMoney(item.price)}</div>
                  </div>
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