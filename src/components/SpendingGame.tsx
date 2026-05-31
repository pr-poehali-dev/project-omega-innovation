import { useState } from 'react'
import Icon from '@/components/ui/icon'

const BUDGET = 100_000_000_000

const ITEMS = [
  { id: 1,   img: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=80&h=80&fit=crop&auto=format', name: 'Жвачка', price: 1, description: 'Мятная, 5 штук' },
  { id: 2,   img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=80&h=80&fit=crop&auto=format', name: 'Газировка', price: 2, description: 'Кола, 0.5 л' },
  { id: 3,   img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=80&h=80&fit=crop&auto=format', name: 'Мороженое', price: 4, description: 'Ванильный рожок' },
  { id: 4,   img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop&auto=format', name: 'Бургер', price: 5, description: 'Просто поесть' },
  { id: 5,   img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&h=80&fit=crop&auto=format', name: 'Кофе в Starbucks', price: 7, description: 'Гранде латте' },
  { id: 6,   img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=80&h=80&fit=crop&auto=format', name: 'Пиво в баре', price: 8, description: 'Крафтовое, пинта' },
  { id: 7,   img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&h=80&fit=crop&auto=format', name: 'Пицца', price: 12, description: 'Маргарита, большая' },
  { id: 8,   img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=80&h=80&fit=crop&auto=format', name: 'Билет в кино', price: 15, description: 'IMAX, конечно' },
  { id: 9,   img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=80&h=80&fit=crop&auto=format', name: 'Книга', price: 20, description: 'Бестселлер NYT' },
  { id: 10,  img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=80&h=80&fit=crop&auto=format', name: 'Кепка Supreme', price: 40, description: 'Лимитированная серия' },
  { id: 11,  img: 'https://images.unsplash.com/photo-1490750967868-88df5691aef4?w=80&h=80&fit=crop&auto=format', name: 'Букет роз', price: 50, description: '11 штук, с доставкой' },
  { id: 12,  img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=80&h=80&fit=crop&auto=format', name: 'Игра в Steam', price: 60, description: 'AAA-новинка' },
  { id: 13,  img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=80&h=80&fit=crop&auto=format', name: 'AirPods Pro', price: 90, description: 'С шумодавом' },
  { id: 14,  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop&auto=format', name: 'Кроссовки Nike', price: 150, description: 'Air Max лимитка' },
  { id: 15,  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&auto=format', name: 'Бутылка Dom Pérignon', price: 200, description: 'Урожай 2015 года' },
  { id: 16,  img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=80&h=80&fit=crop&auto=format', name: 'Акустическая гитара', price: 300, description: 'Yamaha F310' },
  { id: 17,  img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop&auto=format', name: 'Очки Gucci', price: 400, description: 'Солнцезащитные, оригинал' },
  { id: 18,  img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=80&h=80&fit=crop&auto=format', name: 'PlayStation 5', price: 500, description: 'Со всеми играми' },
  { id: 19,  img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=80&h=80&fit=crop&auto=format', name: 'Электросамокат', price: 800, description: 'Xiaomi Pro 3' },
  { id: 20,  img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=80&h=80&fit=crop&auto=format', name: 'Apple Watch Ultra', price: 900, description: 'Titanium, GPS' },
  { id: 21,  img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop&auto=format', name: 'iPhone 16 Pro', price: 1_200, description: 'Последняя модель' },
  { id: 22,  img: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=80&h=80&fit=crop&auto=format', name: 'Скрипка ручной работы', price: 2_000, description: 'Итальянский мастер' },
  { id: 23,  img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=80&h=80&fit=crop&auto=format', name: 'Скутер', price: 3_000, description: 'Электрический' },
  { id: 24,  img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop&auto=format', name: 'MacBook Pro', price: 3_500, description: 'M4 Max, 64 ГБ' },
  { id: 25,  img: 'https://images.unsplash.com/photo-1493225255699-0f61a84acbd3?w=80&h=80&fit=crop&auto=format', name: 'Труба Bach Stradivarius', price: 4_500, description: 'Профессиональная' },
  { id: 26,  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&h=80&fit=crop&auto=format', name: 'Дизайнерский диван', price: 8_000, description: 'Итальянская кожа' },
  { id: 27,  img: 'https://images.unsplash.com/photo-1579541591970-288a0b8d3c42?w=80&h=80&fit=crop&auto=format', name: 'Картина молодого художника', price: 10_000, description: 'Галерея Сохо, Лондон' },
  { id: 28,  img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=80&h=80&fit=crop&auto=format', name: 'Бриллиантовое кольцо', price: 15_000, description: '2 карата, платина' },
  { id: 29,  img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=80&h=80&fit=crop&auto=format', name: 'Мотоцикл Ducati', price: 25_000, description: 'Panigale V4' },
  { id: 30,  img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=80&h=80&fit=crop&auto=format', name: 'Породистая лошадь', price: 30_000, description: 'Арабский скакун' },
  { id: 31,  img: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=80&h=80&fit=crop&auto=format', name: 'Парусная яхта', price: 50_000, description: '12 метров, Средиземноморье' },
  { id: 32,  img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=80&h=80&fit=crop&auto=format', name: 'Patek Philippe', price: 60_000, description: 'Nautilus, золото' },
  { id: 33,  img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=80&h=80&fit=crop&auto=format', name: 'Tesla Model S', price: 90_000, description: 'Plaid, 1020 л.с.' },
  { id: 34,  img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop&auto=format', name: 'Редкая порода собаки', price: 150_000, description: 'Тибетский мастиф' },
  { id: 35,  img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=80&h=80&fit=crop&auto=format', name: 'Моторная яхта', price: 200_000, description: '18 метров, 4 каюты' },
  { id: 36,  img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&h=80&fit=crop&auto=format', name: 'Квартира в Москве', price: 300_000, description: '2 комнаты, центр' },
  { id: 37,  img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=80&h=80&fit=crop&auto=format', name: 'Lamborghini', price: 500_000, description: 'Huracán EVO' },
  { id: 38,  img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=80&h=80&fit=crop&auto=format', name: 'Картина Бэнкси', price: 700_000, description: 'Оригинал, с сертификатом' },
  { id: 39,  img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=80&h=80&fit=crop&auto=format', name: 'Вилла на Бали', price: 1_000_000, description: 'С бассейном и персоналом' },
  { id: 40,  img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=80&h=80&fit=crop&auto=format', name: 'Вертолёт', price: 1_500_000, description: 'Robinson R66' },
  { id: 41,  img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=80&h=80&fit=crop&auto=format', name: 'Гепард (легально)', price: 2_000_000, description: 'ОАЭ, с документами' },
  { id: 42,  img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&h=80&fit=crop&auto=format', name: 'Вилла в Испании', price: 3_000_000, description: 'Побережье Коста-Брава' },
  { id: 43,  img: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=80&h=80&fit=crop&auto=format', name: 'Замок в Шотландии', price: 5_000_000, description: 'XIV век, 40 комнат' },
  { id: 44,  img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=80&h=80&fit=crop&auto=format', name: 'Частный самолёт', price: 7_000_000, description: 'Cessna Citation' },
  { id: 45,  img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=80&h=80&fit=crop&auto=format', name: 'Частный зоопарк', price: 10_000_000, description: 'С настоящими львами' },
  { id: 46,  img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&h=80&fit=crop&auto=format', name: 'Подводная лодка', price: 15_000_000, description: 'Туристическая, 8 мест' },
  { id: 47,  img: 'https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=80&h=80&fit=crop&auto=format', name: 'Казино в Лас-Вегасе', price: 20_000_000, description: 'Небольшое, но своё' },
  { id: 48,  img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=80&h=80&fit=crop&auto=format', name: 'Посадить лес', price: 30_000_000, description: '300 млн деревьев' },
  { id: 49,  img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=80&h=80&fit=crop&auto=format', name: 'Частный остров', price: 48_000_000, description: 'Где-то в Карибском море' },
  { id: 50,  img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=80&h=80&fit=crop&auto=format', name: '100 школ', price: 55_000_000, description: 'По всей планете' },
  { id: 51,  img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=80&h=80&fit=crop&auto=format', name: 'Ракета SpaceX', price: 62_000_000, description: 'Один запуск Falcon 9' },
  { id: 52,  img: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=80&h=80&fit=crop&auto=format', name: 'Парк аттракционов', price: 80_000_000, description: 'Как маленький Дисней' },
  { id: 53,  img: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=80&h=80&fit=crop&auto=format', name: 'Спасти слонов Африки', price: 100_000_000, description: 'Все 415 000 особей' },
  { id: 54,  img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&auto=format', name: 'Стадион', price: 150_000_000, description: 'На 50 000 мест' },
  { id: 55,  img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=80&h=80&fit=crop&auto=format', name: 'Киностудия', price: 200_000_000, description: 'Снять блокбастер' },
  { id: 56,  img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&auto=format', name: 'Вулканический остров', price: 250_000_000, description: 'Исландия, необитаемый' },
  { id: 57,  img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=80&h=80&fit=crop&auto=format', name: 'Мегаяхта', price: 300_000_000, description: '90 метров роскоши' },
  { id: 58,  img: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=80&h=80&fit=crop&auto=format', name: 'Тематический парк', price: 400_000_000, description: 'Свой Disneyland' },
  { id: 59,  img: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=80&h=80&fit=crop&auto=format', name: 'Небоскрёб в NYC', price: 500_000_000, description: '60 этажей на Манхэттене' },
  { id: 60,  img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=80&h=80&fit=crop&auto=format', name: 'Телескоп как Хаббл', price: 600_000_000, description: 'На орбите Земли' },
  { id: 61,  img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=80&h=80&fit=crop&auto=format', name: 'Полёт на МКС', price: 700_000_000, description: 'Как Том Круз' },
  { id: 62,  img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=80&h=80&fit=crop&auto=format', name: 'Горнолыжный курорт', price: 800_000_000, description: 'Альпы, 5 трасс' },
  { id: 63,  img: 'https://images.unsplash.com/photo-1540747913346-19212a4c52d6?w=80&h=80&fit=crop&auto=format', name: 'Футбольный клуб', price: 1_000_000_000, description: 'Средний клуб АПЛ' },
  { id: 64,  img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=80&h=80&fit=crop&auto=format', name: 'Онлайн-казино', price: 1_200_000_000, description: 'С лицензией, 10M игроков' },
  { id: 65,  img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=80&h=80&fit=crop&auto=format', name: 'Национальный парк', price: 1_500_000_000, description: 'Как Йеллоустоун, только свой' },
  { id: 66,  img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=80&h=80&fit=crop&auto=format', name: 'Курорт на Мальдивах', price: 1_800_000_000, description: '50 вилл над водой' },
  { id: 67,  img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=80&h=80&fit=crop&auto=format', name: 'Накормить страну', price: 2_000_000_000, description: '1 год еды для Эфиопии' },
  { id: 68,  img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=80&h=80&fit=crop&auto=format', name: 'Сеть отелей', price: 2_500_000_000, description: '50 отелей по всему миру' },
  { id: 69,  img: 'https://images.unsplash.com/photo-1532094349884-543290ef511c?w=80&h=80&fit=crop&auto=format', name: 'Научная лаборатория', price: 3_000_000_000, description: 'Как ЦЕРН, только компактнее' },
  { id: 70,  img: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=80&h=80&fit=crop&auto=format', name: 'Круизный лайнер', price: 3_500_000_000, description: '300 метров, 5000 пассажиров' },
  { id: 71,  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&auto=format', name: 'Стартап как Uber', price: 4_000_000_000, description: 'Раунд B, горячая ниша' },
  { id: 72,  img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop&auto=format', name: 'Купить банк', price: 5_000_000_000, description: 'Средний европейский банк' },
  { id: 73,  img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=80&h=80&fit=crop&auto=format', name: 'Медиахолдинг', price: 6_000_000_000, description: '10 каналов + стриминг' },
  { id: 74,  img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=80&h=80&fit=crop&auto=format', name: 'Атомная электростанция', price: 7_000_000_000, description: 'На 1 млн домов' },
  { id: 75,  img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=80&h=80&fit=crop&auto=format', name: 'Купить город', price: 10_000_000_000, description: 'Небольшой, тысяч на 50' },
  { id: 76,  img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=80&h=80&fit=crop&auto=format', name: 'Запустить спутник', price: 15_000_000_000, description: 'На орбиту Земли' },
  { id: 77,  img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=80&h=80&fit=crop&auto=format', name: 'Спасти океаны', price: 20_000_000_000, description: 'Очистить Тихий океан от пластика' },
  { id: 78,  img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=80&h=80&fit=crop&auto=format', name: 'Вылечить болезнь', price: 30_000_000_000, description: 'Финансировать исследования рака' },
  { id: 79,  img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop&auto=format', name: 'Купить страну', price: 50_000_000_000, description: 'ВВП небольшого государства' },
  { id: 80,  img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=80&h=80&fit=crop&auto=format', name: 'Солнечная энергия для Африки', price: 100_000_000_000, description: 'Весь континент на 10 лет' },
  { id: 81,  img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&h=80&fit=crop&auto=format', name: 'Картошка фри', price: 3, description: 'Средняя, без соуса' },
  { id: 82,  img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=80&h=80&fit=crop&auto=format', name: 'Сок в пакетике', price: 2, description: 'Яблочный, 200 мл' },
  { id: 83,  img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&auto=format', name: 'Зубная щётка', price: 4, description: 'Oral-B, средняя жёсткость' },
  { id: 84,  img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=80&h=80&fit=crop&auto=format', name: 'Носки', price: 6, description: 'Хлопок, пара' },
  { id: 85,  img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=80&h=80&fit=crop&auto=format', name: 'Ведро', price: 10, description: 'Пластиковое, 10 литров' },
  { id: 86,  img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=80&h=80&fit=crop&auto=format', name: 'Воздушный шарик', price: 2, description: 'Красный, гелиевый' },
  { id: 87,  img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=80&h=80&fit=crop&auto=format', name: 'Ручка BIC', price: 1, description: 'Синяя, шариковая' },
  { id: 88,  img: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=80&h=80&fit=crop&auto=format', name: 'Туалетная бумага', price: 3, description: '4 рулона, 3 слоя' },
  { id: 89,  img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop&auto=format', name: 'Серебряная ложка', price: 28, description: 'Настоящее серебро 925' },
  { id: 90,  img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=80&h=80&fit=crop&auto=format', name: 'Матрёшка', price: 35, description: 'Расписная, 7 слоёв' },
  { id: 91,  img: 'https://images.unsplash.com/photo-1516598540642-e8f40a09d939?w=80&h=80&fit=crop&auto=format', name: 'Резиновая уточка', price: 5, description: 'Пищит при нажатии' },
  { id: 92,  img: 'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=80&h=80&fit=crop&auto=format', name: 'Бант для кошки', price: 2, description: 'Розовый, с блёстками' },
  { id: 93,  img: 'https://images.unsplash.com/photo-1502662672603-b8d48f60dcea?w=80&h=80&fit=crop&auto=format', name: 'Рогатка', price: 9, description: 'Деревянная, классика' },
  { id: 94,  img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=80&h=80&fit=crop&auto=format', name: 'Магнит на холодильник', price: 3, description: 'Из Парижа' },
  { id: 95,  img: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=80&h=80&fit=crop&auto=format', name: 'Дартс', price: 22, description: 'Набор из 3 стрел' },
  { id: 96,  img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=80&h=80&fit=crop&auto=format', name: 'Назвать астероид', price: 160, description: 'Официально, через реестр МАС' },
  { id: 97,  img: 'https://images.unsplash.com/photo-1608890897892-6e3c9c7a8b13?w=80&h=80&fit=crop&auto=format', name: 'Зуб динозавра', price: 2_500, description: 'Трицератопс, 65 млн лет' },
  { id: 98,  img: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=80&h=80&fit=crop&auto=format', name: 'Метеостанция', price: 5_000, description: 'Профессиональная, с радаром' },
  { id: 99,  img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=80&h=80&fit=crop&auto=format', name: 'Айсберг на аукционе', price: 500_000, description: 'Гренландия, 10 000 тонн льда' },
  { id: 100, img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&h=80&fit=crop&auto=format', name: 'Сделать радугу', price: 1_000_000, description: 'Система распыления воды над городом' },
]

const SORTED_ITEMS = [...ITEMS].sort((a, b) => (a.price + a.id * 0.001) - (b.price + b.id * 0.001))

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
                    <img src={item.img} alt={item.name} className="w-10 h-10 object-cover shrink-0 grayscale opacity-80" onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=80&h=80&fit=crop&auto=format' }} />
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
              className={`border p-4 transition-all duration-150 select-none cursor-pointer ${count > 0 ? 'border-white bg-white/5' : 'border-gray-800 hover:border-gray-600'}`}
              style={{ transform: 'scale(1)', transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s, background 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)' }}
              onMouseDown={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(0.96)' }}
              onMouseUp={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)' }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0 flex gap-3 items-start">
                  <img src={item.img} alt={item.name} className="w-12 h-12 object-cover shrink-0 grayscale opacity-80" onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=80&h=80&fit=crop&auto=format' }} />
                  <div className="min-w-0">
                    <div className="text-white text-sm font-bold">{item.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.description}</div>
                    <div className="text-green-500 text-[10px] mt-1 tracking-wider">{formatMoney(item.price)}</div>
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