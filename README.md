## Movecar (ReactNative+Redux, Typescript)

Мобильное приложение “Отслеживание ТС (транспортные средства)” на React Native, использующее API Google Maps.

[Код последней версии приложения](https://github.com/PushToTalkMe/movecar/tree/release)

---

- _Инструкция по локальному запуску приложения_.

Перейти в IDE (например, VS), запустить терминал и ввести команды:

- git clone https://github.com/PushToTalkMe/movecar.git
- cd movecar/
- git checkout release
- yarn install
- yarn start
- Затем, необходимо установить Expo Go на своё устройство (если телефон на Android) или Camera App (если телефон на iOS) и отсканирвоать QR код, отображаемый в терминале IDE.

---

В нем были реализованы следующие функции:

- _Экран списка ТС_.

1. Пользователь имеет возможность отфильтровать ТС по их категориям, нажатием кнопки “Применить” по категориям:
   1. Грузовой;
   2. Пассажирский;
   3. Спецтранспорт.
2. Элементы списка содержат:
   1. Название ТС — формируется: ТС #порядковый номер в базе;
   2. Имя водителя;
   3. Категория ТС.
3. Экран имеет возможность переключать вид с режима списка на просмотр на карте, где будут отображено местоположение ТС разными значками в соответствии с типом ТС.

▪ _Экран ТС_.

1. Кликая на ТС, пользователь попадает на экран конкретного ТС. Данный экран содержит:
   1. Карту с местонахождением водителя;
   2. Категория ТС;
   3. Имя водителя;
   4. Контактный номер водителя;
   5. Кнопка “Позвонить”. Открывает приложение с набором номера и уже подставленным номером водителя;
   6. Кнопка “Написать”. Открывает приложение whatsapp с чатом водителя и предустановленным сообщением: “Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе”.

▪ _Экран с настройками._

Содержит возможность переключение языков с русского на английский и наоборот.

---
