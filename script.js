// // Savollar va javoblar
// const questions = {
//     1: { question: "1 + 1 nima?", answer: "2" },
//     2: { question: "5 + 3 nima?", answer: "8" },
//     3: { question: "10 - 7 nima?", answer: "3" },
//     4: { question: "6 x 4 nima?", answer: "24" },
//     5: { question: "9 / 3 nima?", answer: "3" },
//     // ... 50 gacha raqamlar uchun savollar qo'shish mumkin
//   };

//   // HTML elementlari
//   const numberSelect = document.getElementById('numberSelect');
//   const questionContainer = document.getElementById('question-container');
//   const questionElement = document.getElementById('question');
//   const answerInput = document.getElementById('answer');
//   const submitButton = document.getElementById('submitAnswer');
//   const resultElement = document.getElementById('result');
//   const resetButton = document.getElementById('resetButton');

//   // Raqamlar ro'yxatini yaratish
//   for (let i = 1; i <= 50; i++) {
//     let option = document.createElement("option");
//     option.value = i;
//     option.textContent = `Raqam ${i}`;
//     numberSelect.appendChild(option);
//   }

//   // Raqam tanlanganida savolni ko'rsatish
//   numberSelect.addEventListener('change', function() {
//     const selectedNumber = parseInt(numberSelect.value);

//     if (selectedNumber) {
//       const questionData = questions[selectedNumber];
//       if (questionData) {
//         questionElement.textContent = questionData.question;
//         questionContainer.style.display = "block";
//         resultElement.textContent = "";
//         answerInput.value = "";
//       }
//     } else {
//       questionContainer.style.display = "none";
//     }
//   });

//   // Javobni tekshirish
//   submitButton.addEventListener('click', function() {
//     const selectedNumber = parseInt(numberSelect.value);
//     const userAnswer = answerInput.value.trim();

//     if (selectedNumber && userAnswer) {
//       const correctAnswer = questions[selectedNumber].answer;
//       if (userAnswer === correctAnswer) {
//         resultElement.textContent = "To'g'ri javob!";
//         resultElement.style.color = "green";
//       } else {
//         resultElement.textContent = "Noto'g'ri javob!";
//         resultElement.style.color = "red";
//       }
//     } else {
//       resultElement.textContent = "Iltimos, javobni kiriting.";
//     }
//   });

//   // O'yinni qayta boshlash
//   resetButton.addEventListener('click', function() {
//     numberSelect.value = "";
//     questionContainer.style.display = "none";
//     resultElement.textContent = "";
//   });

// Savollar va 4 ta javob variantlari
const questions = {
    1: {
        question: "Kompyuter tizimi nima?",
        options: ["Kompyuter tizimi — bu apparat (kompyuterning jismoniy qismlari) va dasturiy ta'minotdan (operatsion tizim, dasturlar) iborat bo'lib, ular birgalikda ishlaydi.", "Kompyuter tizimi faqat apparatdan iborat bo'ladi.", "Kompyuter tizimi faqat dasturiy ta'minotdan iborat bo'ladi.", "Kompyuter tizimi faqat internetga ulangan kompyuterdan iborat bo'ladi."],
        answer: "Kompyuter tizimi — bu apparat (kompyuterning jismoniy qismlari) va dasturiy ta'minotdan (operatsion tizim, dasturlar) iborat bo'lib, ular birgalikda ishlaydi."
    },
    2: {
        question: "Kompyuterning asosiy qismlari nimalardan iborat?",
        options: ["Kompyuterning asosiy qismlari: protsessor (CPU), xotira (RAM va ROM), disklarda saqlash (HDD, SSD), monitör, klaviatura, sichqoncha, tarmoq kartasi.", "Kompyuterning asosiy qismlari faqat protsessor va monitor.", "Kompyuterning asosiy qismlari faqat protsessor va sichqoncha.", "Kompyuterning asosiy qismlari faqat monitor va klaviaturadan iborat."],
        answer: "Kompyuterning asosiy qismlari: protsessor (CPU), xotira (RAM va ROM), disklarda saqlash (HDD, SSD), monitör, klaviatura, sichqoncha, tarmoq kartasi."
    },
    3: {
        question: "RAM va ROM o'rtasidagi farqni tushuntiring.",
        options: ["RAM faqat o'qish uchun, ROM esa faqat yozish uchun ishlatiladi.", "RAM doimiy xotira, ROM esa vaqtinchalik xotira.", "RAM va ROM bir xil ishlash printsipiga ega.", "RAM (Random Access Memory) — bu vaqtinchalik xotira bo'lib, kompyuter ish faoliyatida qo'llaniladi."],
        answer: "RAM (Random Access Memory) — bu vaqtinchalik xotira bo'lib, kompyuter ish faoliyatida qo'llaniladi."
    },
    4: {
        question: "Kompyuterning ishlash prinsipi qanday?",
        options: ["Kompyuter ishlash prinsipi faqat ma'lumotlarni saqlashdan iborat.", "Kompyuter ishlash prinsipi faqat natijalarni chiqarishdan iborat.", "Kompyuter ishlash prinsipi — bu ma'lumotlarni olish, qayta ishlash va natijalarni chiqarish jarayonidan iborat.", "Kompyuter ishlash prinsipi faqat ma'lumotlarni olishdan iborat."],
        answer: "Kompyuter ishlash prinsipi — bu ma'lumotlarni olish, qayta ishlash va natijalarni chiqarish jarayonidan iborat."
    },
    5: {
        question: "Operatsion tizim nima va uning vazifalari qanday?",
        options: ["Operatsion tizim (OT) kompyuterning barcha resurslarini boshqaradi, dasturlarni ishga tushuradi va foydalanuvchi bilan o'zaro aloqani ta'minlaydi.", "Operatsion tizim faqat kompyuterning apparat qismlarini boshqaradi.", "Operatsion tizim faqat kompyuterni ishga tushirish uchun ishlatiladi.", "Operatsion tizim faqat dasturlarni ishlatish uchun zarur."],
        answer: "Operatsion tizim (OT) kompyuterning barcha resurslarini boshqaradi, dasturlarni ishga tushuradi va foydalanuvchi bilan o'zaro aloqani ta'minlaydi."
    },
    6: {
        question: " Kompyuterning ishlash prinsipi qanday?",
        options: ["Kompyuter ishlash prinsipi faqat natijalarni chiqarishdan iborat.", "Kompyuter ishlash prinsipi faqat ma'lumotlarni olishdan iborat.", "Kompyuterning ishlash prinsipi — bu ma'lumotlarni olish, qayta ishlash va natijalarni chiqarish jarayonidan iborat.", "Kompyuter ishlash prinsipi faqat ma'lumotlarni saqlashdan iborat."],
        answer: "Kompyuterning ishlash prinsipi — bu ma'lumotlarni olish, qayta ishlash va natijalarni chiqarish jarayonidan iborat."
    },
    7: {
        question: " Operatsion tizimning asosiy vazifalari nimalardan iborat?",
        options: ["Operatsion tizim faqat apparat qismlarini boshqaradi, dasturlarga ta'sir qilmaydi.", "Operatsion tizimning asosiy vazifalari: kompyuter resurslarini boshqarish, dasturlarni ishga tushirish va foydalanuvchi bilan muloqot qilish.", "Operatsion tizim faqat internet tarmog'ini boshqaradi.", "Operatsion tizimning vazifalari faqat dasturlarni ishlatishdir."],
        answer: "Operatsion tizimning asosiy vazifalari: kompyuter resurslarini boshqarish, dasturlarni ishga tushirish va foydalanuvchi bilan muloqot qilish."
    },
    8: {
        question: "Dasturlash tili nima?",
        options: [" Dasturlash tili — bu kompyuterga buyruqlar berish va dasturni yaratish uchun ishlatiladigan sintaksisga ega til.", "Dasturlash tili — bu kompyuterni boshqarish uchun ishlatiladigan apparat.", "Dasturlash tili faqat matnlarni ishlash uchun ishlatiladi.", "Dasturlash tili faqat raqamlarni hisoblash uchun ishlatiladi."],
        answer: " Dasturlash tili — bu kompyuterga buyruqlar berish va dasturni yaratish uchun ishlatiladigan sintaksisga ega til."
    },
    9: {
        question: "Algoritm tushunchasini tushuntiring.",
        options: ["Algoritm — faqat bir marta bajariladigan amallar ketma-ketligi.", "Algoritm — kompyuter dasturining xatoliklari to'plami.", "Algoritm — bu faqat matematik hisob-kitoblar.", "Algoritm — ma'lum bir muammoni yechish uchun bajariladigan ketma-ket amallar."],
        answer: "Algoritm — ma'lum bir muammoni yechish uchun bajariladigan ketma-ket amallar."
    },
    10: {
        question: "O'zgaruvchilar nima va ularni qanday ishlatish mumkin?",
        options: ["O'zgaruvchilar — dasturda ma'lumotlarni saqlash uchun ishlatiladigan nomlangan joylar. Ularni qiymatlar bilan belgilab, dastur davomida o'zgartirish mumkin.", "O'zgaruvchilar kompyuter apparatida joylashgan va faqat bir marta ishlatiladi.", "O'zgaruvchilar faqat matnli qiymatlarni saqlaydi.", "O'zgaruvchilar — bu doimiy qiymatlarni saqlash uchun ishlatiladi."],
        answer: "O'zgaruvchilar — dasturda ma'lumotlarni saqlash uchun ishlatiladigan nomlangan joylar. Ularni qiymatlar bilan belgilab, dastur davomida o'zgartirish mumkin."
    },
    11: {
        question: "Axborot texnologiyalari nima?",
        options: ["Axborot texnologiyalari faqat kompyuter dasturlarini yaratish texnologiyalaridir.", "Axborot texnologiyalari — axborotni saqlash, qayta ishlash va uzatish uchun ishlatiladigan texnologiyalar.", "Axborot texnologiyalari faqat internetda ishlatiladigan texnologiyalar.", "Axborot texnologiyalari faqat ma'lumotlarni saqlash texnologiyalari."],
        answer: "Axborot texnologiyalari — axborotni saqlash, qayta ishlash va uzatish uchun ishlatiladigan texnologiyalar."
    },
    12: {
        question: " Internet tarmog'ining imkoniyatlari nimalardan iborat?",
        options: ["Internet faqat o'yinlar uchun ishlatiladi.", "Internet faqat ijtimoiy tarmoqlar uchun ishlatiladi.", "Internet faqat elektron pochta yuborish uchun ishlatiladi.", " Internet tarmog'i: axborot almashish, elektron pochta, ijtimoiy tarmoqlar, onlayn o'qish va ishlar qilish imkoniyatlarini beradi."],
        answer: " Internet tarmog'i: axborot almashish, elektron pochta, ijtimoiy tarmoqlar, onlayn o'qish va ishlar qilish imkoniyatlarini beradi."
    },
    13: {
        question: "Elektron pochta qanday ishlaydi?",
        options: ["Elektron pochta xabarlarni yuborish uchun fax yoki pochta xizmatini ishlatadi.", "Elektron pochta faqat faollashtirilgan hisoblar orqali ishlaydi.", "Elektron pochta faqat SMS yuborish uchun ishlatiladi.", "Elektron pochta foydalanuvchilarga xabarlarni yuborish va qabul qilish imkoniyatini beradi. Xabar SMTP protokoli yordamida yuboriladi, IMAP yoki POP3 orqali qabul qilinadi."],
        answer: "Elektron pochta foydalanuvchilarga xabarlarni yuborish va qabul qilish imkoniyatini beradi. Xabar SMTP protokoli yordamida yuboriladi, IMAP yoki POP3 orqali qabul qilinadi."
    },
    14: {
        question: "URL nima?",
        options: ["URL — bu internetga ulanadigan qurilmaning IP manzili.", "URL — bu faqat veb-brauzer uchun maxsus fayllardir.", "URL — bu faqat veb-saytlarning nomidir.", "URL  — bu internetdagi resursning manzilini ko'rsatadigan matnli ifodadir."],
        answer: "URL  — bu internetdagi resursning manzilini ko'rsatadigan matnli ifodadir."
    },
    15: {
        question: "Wi-Fi tarmog'i nima",
        options: ["Wi-Fi — bu simsiz tarmoq orqali internetga ulanish texnologiyasidir.", "Wi-Fi — bu faqat kompyuterlar uchun ishlatiladigan tarmoq texnologiyasidir.", "Wi-Fi — bu faqat katta kompaniyalarda ishlatiladigan tarmoq.", "Wi-Fi — bu faqat telefonlar uchun ishlatiladigan tarmoq."],
        answer: "Wi-Fi — bu simsiz tarmoq orqali internetga ulanish texnologiyasidir."
    },
    16: {
        question: "Ma'lumotlar bazasi nima?",
        options: ["Ma'lumotlar bazasi — bu faqat onlayn tizimlar uchun mo'ljallangan saqlash joyi.", "Ma'lumotlar bazasi — tashkilotning ma'lumotlarini tartibli saqlash uchun mo'ljallangan tizim.", "Ma'lumotlar bazasi — faqat kompyuter tarmog'ida ishlaydigan tizim.", "Ma'lumotlar bazasi — faqat matnlarni saqlash tizimi."],
        answer: "Ma'lumotlar bazasi — tashkilotning ma'lumotlarini tartibli saqlash uchun mo'ljallangan tizim."
    },
    17: {
        question: "LAN tarmog'ining xususiyatlari nimalardan iborat?",
        options: ["LAN tarmog'ida faqat bir xil turdagi qurilmalar ulanishi mumkin.", "LAN tarmog'ida kompyuterlar va qurilmalar bir-biriga yaqin joylashgan va yuqori tezlikda ishlaydi.", "LAN tarmog'i faqat faollashtirilgan qurilmalar bilan ishlaydi.", "LAN tarmog'ida qurilmalar bir-biridan juda uzoq masofada joylashadi."],
        answer: "LAN tarmog'ida kompyuterlar va qurilmalar bir-biriga yaqin joylashgan va yuqori tezlikda ishlaydi."
    },
    18: {
        question: "LAN tarmog'i nima?",
        options: ["LAN tarmog'i faqat Wi-Fi orqali ishlaydi.", "LAN — bu faqat bir nechta serverlarni ulash uchun ishlatiladigan tarmoq.", "LAN — bu kichik hududdagi kompyuterlar va qurilmalarni ulash uchun ishlatiladigan tarmoqdir.", "LAN — bu global miqyosdagi kompyuterlar tarmog'idir."],
        answer: "LAN — bu kichik hududdagi kompyuterlar va qurilmalarni ulash uchun ishlatiladigan tarmoqdir."
    },
    19: {
        question: "WAN tarmog'i nima?",
        options: ["WAN — bu keng hududda, hatto davlatlararo tarmoqlarda kompyuterlarni ulash uchun ishlatiladigan tarmoqdir.", "WAN tarmog'i faqat mobil telefonlar uchun ishlatiladi.", "WAN tarmog'i faqat internetga ulangan qurilmalarni birlashtiradi.", "WAN — bu faqat kichik hududdagi qurilmalarni ulash tarmog'idir."],
        answer: "WAN — bu keng hududda, hatto davlatlararo tarmoqlarda kompyuterlarni ulash uchun ishlatiladigan tarmoqdir."
    },
    20: {
        question: "WAN tarmog'ining afzalliklari nimalardan iborat?",
        options: ["WAN tarmog'i keng hududda joylashgan kompyuterlar va qurilmalarni ulash imkonini beradi.", "WAN tarmog'ida faqat Wi-Fi tarmoqlari ishlatiladi.", "WAN tarmog'i juda past tezlikda ishlaydi.", "WAN tarmog'i faqat bitta binodagi kompyuterlarni ulash imkonini beradi."],
        answer: "WAN tarmog'i keng hududda joylashgan kompyuterlar va qurilmalarni ulash imkonini beradi."
    },
    21: {
        question: "VPN nima?",
        options: ["VPN faqat o'yinlar uchun ishlatiladigan xavfsizlik texnologiyasidir.", "VPN internetga ulanishni tezlashtirish uchun ishlatiladi.", " VPN  — bu internet orqali xavfsiz va shifrlangan ulanishni ta'minlaydigan texnologiya.", "VPN faqat lokal tarmoqlarni ulash uchun ishlatiladi."],
        answer: " VPN  — bu internet orqali xavfsiz va shifrlangan ulanishni ta'minlaydigan texnologiya."
    },
    22: {
        question: "VPN ning asosiy foydalari nimalardan iborat?",
        options: ["VPN faqat faollashtirilgan tarmoqlarni himoya qiladi.", "VPN internetga ulangan har qanday qurilmalarni avtomatik tarzda xavfsiz qiladi.", "VPN faqat mobil qurilmalarda ishlaydi.", "VPN foydalanuvchilarga internetda anonimlikni ta'minlash, ma'lumotlarni shifrlash va cheklangan kontentga kirishni amalga oshirish imkonini beradi."],
        answer: "VPN foydalanuvchilarga internetda anonimlikni ta'minlash, ma'lumotlarni shifrlash va cheklangan kontentga kirishni amalga oshirish imkonini beradi."
    },
    23: {
        question: "Server nima?",
        options: ["Server — bu faqat foydalanuvchining shaxsiy ma'lumotlarini saqlovchi qurilma.", "Server faqat bitta qurilma uchun xizmat qiladi.", "Server faqat internetga ulangan kompyuterlarni boshqaradi.", "Server — bu boshqa kompyuterlar yoki qurilmalarga xizmat ko'rsatadigan va ma'lumotlarni boshqaradigan kompyuter yoki tizim"],
        answer: "Server — bu boshqa kompyuterlar yoki qurilmalarga xizmat ko'rsatadigan va ma'lumotlarni boshqaradigan kompyuter yoki tizim"
    },
    24: {
        question: "Server va mijoz (client) o'rtasidagi farq nima?",
        options: ["Server faqat mijozlarni saqlaydi, mijoz esa faqat serverga ma'lumot yuboradi.", "Server va mijoz bir xil vazifalarni bajaradi, faqat ulanish tezligi farq qiladi.", "Server mijozlardan kelgan so'rovlarni qayta ishlaydi va ularga ma'lumotlarni taqdim etadi, mijoz esa serverdan xizmatlarni oladi.", "Server faqat ma'lumotlarni saqlash uchun ishlatiladi, mijoz esa ma'lumotlarni o'qish uchun ishlatiladi."],
        answer: "Server mijozlardan kelgan so'rovlarni qayta ishlaydi va ularga ma'lumotlarni taqdim etadi, mijoz esa serverdan xizmatlarni oladi."
    },
    25: {
        question: "Phishing nima?",
        options: ["Phishing — bu foydalanuvchidan shaxsiy ma'lumotlarni, masalan, parollarni yoki kredit karta raqamlarini o'g'irlash uchun internetda yolg'on ma'lumotlar yuborish usuli.", "Phishing — bu faqat kompyuter viruslarini tarqatish uchun ishlatiladi.", "Phishing — bu faqat shaxsiy ma'lumotlarni saqlash jarayonidir.", "Phishing — bu xavfsiz tarmoqni yaratish usuli."],
        answer: " Phishing — bu foydalanuvchidan shaxsiy ma'lumotlarni, masalan, parollarni yoki kredit karta raqamlarini o'g'irlash uchun internetda yolg'on ma'lumotlar yuborish usuli."
    },
    26: {
        question: "Phishing hujumidan qanday himoyalanish mumkin?",
        options: ["Phishingdan himoya qilish uchun faqat tizim parollarini almashtirish kerak.", "Foydalanuvchi ishonchsiz elektron pochta yoki xabarlarni ochmaslik, manzillarda noto'g'ri yoki shubhali havolalarni bosmaslik orqali himoyalanish mumkin.", "Phishingdan himoya qilish uchun faqat tarmoqni o'chirib qo'yish kerak.", "Phishingdan himoya qilish uchun faqat antivirusni o'rnatish kifoya qiladi."],
        answer: "Foydalanuvchi ishonchsiz elektron pochta yoki xabarlarni ochmaslik, manzillarda noto'g'ri yoki shubhali havolalarni bosmaslik orqali himoyalanish mumkin."
    },
    27: {
        question: "Pharming nima?",
        options: ["Pharming — bu faqat foydalanuvchi qurilmalarini shikastlaydi.", "Pharming — bu internetda foydalanuvchini noto'g'ri veb-saytga yo'naltirish orqali shaxsiy ma'lumotlarini o'g'irlash usuli.", "Pharming — bu internet tarmog'ini tezlashtirish uchun ishlatiladi.", "Pharming — bu antivirusni o'rnatishning xavfsiz usulidir."],
        answer: "Pharming — bu internetda foydalanuvchini noto'g'ri veb-saytga yo'naltirish orqali shaxsiy ma'lumotlarini o'g'irlash usuli."
    },
    28: {
        question: "Pharmingdan qanday himoya qilish mumkin?",
        options: ["Pharmingdan himoya qilish uchun faqat kompyuterni qayta ishga tushurish kerak.", "Pharmingni faqat parollarni o'zgartirish orqali oldini olish mumkin.", "Pharmingdan himoya qilish uchun faqat VPN xizmatidan foydalanish kifoya qiladi.", "DNS serverlarining xavfsizligini ta'minlash, shuningdek, saytlar manzillarini diqqat bilan tekshirish orqali himoya qilish mumkin."],
        answer: "DNS serverlarining xavfsizligini ta'minlash, shuningdek, saytlar manzillarini diqqat bilan tekshirish orqali himoya qilish mumkin."
    },
    29: {
        question: "Vishing nima?",
        options: [" Vishing — bu telefon orqali odamlarni aldash va ulardan shaxsiy ma'lumotlarini olish uchun ishlatiladigan usul.", "Vishing — bu faqat bank kartalarini tekshirish uchun ishlatiladi.", "Vishing — bu faqat mobil ilovalar orqali ma'lumotlarni yig'ish usuli.", "Vishing — bu internetda ma'lumotlarni himoya qilish usuli."],
        answer: " Vishing — bu telefon orqali odamlarni aldash va ulardan shaxsiy ma'lumotlarini olish uchun ishlatiladigan usul."
    },
    30: {
        question: "Harakat sensorlari nima?",
        options: ["Harakat sensorlari — bu muhitdagi harakatni aniqlash va qayd etish uchun ishlatiladigan qurilmalar.", "Harakat sensorlari faqat odamlarni aniqlash uchun ishlatiladi", "Harakat sensorlari faqat yorug'likni aniqlash uchun ishlatiladi.", "Harakat sensorlari faqat ob'ektlarning haroratini aniqlaydi."],
        answer: "3"
    },
    31: {
        question: "Harakat sensorlari qaysi sohalarda qo'llaniladi?",
        options: ["Harakat sensorlari faqat internet xizmatlarini yaxshilash uchun ishlatiladi.", "Harakat sensorlari xavfsizlik tizimlarida, avtomatik yoritishda va aqlli uy tizimlarida keng qo'llaniladi", "Harakat sensorlari faqat avtomobil tizimlarida qo'llaniladi.", "Harakat sensorlari faqat internet xizmatlarini yaxshilash uchun ishlatiladi."],
        answer: "Harakat sensorlari xavfsizlik tizimlarida, avtomatik yoritishda va aqlli uy tizimlarida keng qo'llaniladi"
    },
    32: {
        question: "Bosim sensorlari nima?",
        options: ["Bosim sensorlari faqat yorug'likni aniqlashda ishlatiladi.", "Bosim sensorlari faqat ob'ektlarning joylashuvini aniqlaydi.", " Bosim sensorlari — bu atrof-muhitdagi bosim o'zgarishlarini aniqlab, ularga mos ravishda elektr signalini ishlab chiqaradigan qurilmalar.", "Bosim sensorlari faqat haroratni aniqlash uchun ishlatiladi."],
        answer: "Bosim sensorlari — bu atrof-muhitdagi bosim o'zgarishlarini aniqlab, ularga mos ravishda elektr signalini ishlab chiqaradigan qurilmalar."
    },
    33: {
        question: "Harorat sensorlari nima?",
        options: ["Harorat sensorlari faqat yoritishni o'lchashda ishlatiladi.", "Harorat sensorlari faqat atmosferada mavjud gazlarni aniqlash uchun ishlatiladi.", "Harorat sensorlari faqat bosimni o'lchash uchun ishlatiladi.", "Harorat sensorlari — bu atrof-muhitdagi haroratni o'lchash va uni elektr signaliga aylantirish uchun ishlatiladigan qurilmalar."],
        answer: "Harorat sensorlari — bu atrof-muhitdagi haroratni o'lchash va uni elektr signaliga aylantirish uchun ishlatiladigan qurilmalar."
    },
    34: {
        question: "Harorat sensorlari qanday sohalarda ishlatiladi?",
        options: ["Harorat sensorlari faqat ma'lumotlarni saqlash uchun ishlatiladi.", "Harorat sensorlari faqat elektr energiyasini boshqarish uchun ishlatiladi.", "Harorat sensorlari sanoat, tibbiyot va avtomobil tizimlarida keng qo'llaniladi.", "Harorat sensorlari faqat uy qurilishida ishlatiladi."],
        answer: "Harorat sensorlari sanoat, tibbiyot va avtomobil tizimlarida keng qo'llaniladi."
    },
    35: {
        question: "Apparat ta'minoti nima?",
        options: ["Apparat ta'minoti — bu faqat ma'lumotlarni saqlash uchun ishlatiladigan qurilmalar.","Apparat ta'minoti — bu faqat kompyuter tarmoqlarini tashkil qilish uchun kerak bo'lgan komponentlar.","Apparat ta'minoti faqat dasturlarni o'rnatish bilan bog'liq."," Apparat ta'minoti — bu kompyuter tizimini ishlashiga yordam beradigan barcha jismoniy qurilmalar va komponentlar."],
        answer: " Apparat ta'minoti — bu kompyuter tizimini ishlashiga yordam beradigan barcha jismoniy qurilmalar va komponentlar."
    },
    
    36: {
        question: "Apparat ta'minoti qaysi qismlardan iborat?",
        options: ["Apparat ta'minoti faqat internetga ulanish tizimlaridan iborat.","Apparat ta'minoti kompyuterning barcha fizik qismlaridan, masalan, protsessor, xotira, disklar, monitor va klaviaturadan iborat.","Apparat ta'minoti faqat klaviatura va sichqonchadan iborat.","Apparat ta'minoti faqat kompyuter dasturidan iborat."],
        answer: "Apparat ta'minoti kompyuterning barcha fizik qismlaridan, masalan, protsessor, xotira, disklar, monitor va klaviaturadan iborat."
    },
    
    37: {
        question: "Ichki qurilmalar nima?",
        options: ["Ichki qurilmalar faqat printer va skaner kabi tashqi qurilmalardir.","Ichki qurilmalar — bu kompyuterning ichki qismlarini tashkil etadigan, asosan tizimni boshqarish va ma'lumotlarni saqlash uchun ishlatiladigan qurilmalardir. ","Ichki qurilmalar faqat sichqoncha va klaviaturadan iborat.","Ichki qurilmalar faqat kompyuter ekranidan iborat."],
        answer: "Ichki qurilmalar — bu kompyuterning ichki qismlarini tashkil etadigan, asosan tizimni boshqarish va ma'lumotlarni saqlash uchun ishlatiladigan qurilmalardir. "
    },
    
    38: {
        question: "Ichki qurilmalar qaysi funksiyalarni bajaradi?",
        options: ["Ichki qurilmalar kompyuterni ishlatish uchun zarur bo'lgan barcha asosiy operatsiyalarni bajaradi, masalan, ma'lumotlarni saqlash, qayta ishlash va boshqarish.","Ichki qurilmalar faqat kompyuterning saqlash joyini boshqaradi.","Ichki qurilmalar faqat kompyuterning tarmoq ulanishini boshqaradi.","Ichki qurilmalar faqat kompyuterga o'yin o'ynash imkoniyatini yaratadi"],
        answer: "Ichki qurilmalar kompyuterni ishlatish uchun zarur bo'lgan barcha asosiy operatsiyalarni bajaradi, masalan, ma'lumotlarni saqlash, qayta ishlash va boshqarish."
    },
    
    39: {
        question: "Tashqi qurilmalar nima?",
        options: ["Tashqi qurilmalar faqat kompyuter tizimlarini xavfsizligini ta'minlaydi.","Tashqi qurilmalar faqat internetga ulanishni ta'minlaydi.","Tashqi qurilmalar faqat kompyuter ichidagi xotira va protsessorlarni tashkil etadi.","Tashqi qurilmalar — bu kompyuterga tashqi ravishda ulanish orqali ishlaydigan qurilmalar. "],
        answer: "Tashqi qurilmalar — bu kompyuterga tashqi ravishda ulanish orqali ishlaydigan qurilmalar. "
    },
    
    40: {
        question: "Protsessor (CPU) nima?",
        options: ["Protsessor — bu kompyuterning markaziy ishlov berish birligi bo'lib, barcha hisoblash va ma'lumotlarni qayta ishlash jarayonlarini amalga oshiradi.","Protsessor — bu faqat kompyuter ekranini boshqaradi.","Protsessor — bu kompyuterga tashqi qurilmalarni ulash imkoniyatini beradi.","Protsessor — bu faqat kompyuterning grafik tizimini boshqaradi."],
        answer: "Protsessor (CPU) — bu kompyuterning markaziy ishlov berish birligi bo'lib, barcha hisoblash va ma'lumotlarni qayta ishlash jarayonlarini amalga oshiradi."
    },
    41: {
        question: "Protsessorning asosiy vazifasi nima?",
        options: ["Protsessor faqat tizimning ishga tushishini ta'minlaydi.","Protsessor faqat ma'lumotlarni saqlaydi.","Protsessor kompyuterning tashqi qurilmalarini boshqaradi.","Protsessor kompyuterdagi barcha arifmetik va mantiqiy hisob-kitoblarni amalga oshiradi, shuningdek, operatsion tizim va dasturiy ta'minotning boshqarilishini ta'minlaydi."],
        answer: "Protsessor kompyuterdagi barcha arifmetik va mantiqiy hisob-kitoblarni amalga oshiradi, shuningdek, operatsion tizim va dasturiy ta'minotning boshqarilishini ta'minlaydi."
    },
    42: {
        question: "RAM qanday ishlaydi?",
        options: ["RAM faqat tashqi qurilmalarni boshqaradi.","RAM ma'lumotlarni doimiy ravishda saqlaydi.","RAM kompyuterda faol ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlaydi, va kompyuter o'chirilganda bu ma'lumotlar yo'qoladi.","RAM faqat kompyuterga ulanish uchun ishlatiladi."],
        answer: "RAM kompyuterda faol ishlayotgan dasturlar va ma'lumotlarni vaqtincha saqlaydi, va kompyuter o'chirilganda bu ma'lumotlar yo'qoladi."
    },
    43: {
        question: "Xotira (RAM) nima?",
        options: ["Xotira (RAM) — bu kompyuterda vaqtinchalik ma'lumotlarni saqlash uchun ishlatiladigan qurilma bo'lib, dasturlarni va operatsion tizimni tezroq ishlashini ta'minlaydi.","Xotira (RAM) — bu faqat klaviatura bilan bog'liq qurilmadir.","Xotira (RAM) — bu faqat kompyuterda fayllarni saqlash uchun ishlatiladi.","Xotira (RAM) — bu kompyuterning qattiq diskidir."],
        answer: "Xotira (RAM) — bu kompyuterda vaqtinchalik ma'lumotlarni saqlash uchun ishlatiladigan qurilma bo'lib, dasturlarni va operatsion tizimni tezroq ishlashini ta'minlaydi."
    },
    44: {
        question: "Qattiq disk (HDD) nima?",
        options: ["Qattiq disk (HDD) — bu kompyuterning uzoq muddatli ma'lumotlarni saqlash uchun ishlatiladigan qurilma.","Qattiq disk (HDD) faqat video va audio fayllarni saqlaydi.","Qattiq disk (HDD) faqat tashqi qurilmalardir.","Qattiq disk (HDD) faqat kompyuterga yangi dasturlarni o'rnatish uchun ishlatiladi."],
        answer: "Qattiq disk (HDD) — bu kompyuterning uzoq muddatli ma'lumotlarni saqlash uchun ishlatiladigan qurilma."
    },
    45: {
        question: "Qattiq diskning vazifasi nima?",
        options: ["Qattiq disk faqat tarmoqni boshqaradi.","Qattiq disk faqat ma'lumotlarni vaqtinchalik saqlash uchun ishlatiladi.","Qattiq disk ma'lumotlarni uzoq vaqt davomida saqlaydi, shu jumladan operatsion tizim, dasturlar va foydalanuvchi fayllari.","Qattiq disk faqat video fayllarni saqlash uchun ishlatiladi."],
        answer: "Qattiq disk ma'lumotlarni uzoq vaqt davomida saqlaydi, shu jumladan operatsion tizim, dasturlar va foydalanuvchi fayllari."
    },
    46: {
        question: "Virus nima?",
        options: ["Virus — bu kompyuter dasturi bo'lib, boshqa dasturlar yoki fayllarga kirib olib, o'zini ko'paytirib, zarar yetkazish uchun ishlaydi.","Virus — bu faqat kompyuterning tezligini oshirish uchun ishlatiladi.","Virus — bu faqat ma'lumotlarni saqlash tizimi.","Virus — bu faqat kompyuterga yangi funksiyalar qo'shish uchun yaratilgan dastur."],
        answer: "Virus — bu kompyuter dasturi bo'lib, boshqa dasturlar yoki fayllarga kirib olib, o'zini ko'paytirib, zarar yetkazish uchun ishlaydi."
    },
    47: {
        question: "Virusning asosiy maqsadi nima?",
        options: ["Virusning maqsadi faqat internetda ishlashni ta'minlashdir.","Virusning maqsadi yangi dasturlarni yaratishdir.","Virusning maqsadi faqat tizimni tezlashtirishdir.","Virusning asosiy maqsadi kompyuterni yoki tarmoqni zararlash, foydalanuvchining ma'lumotlarini o'g'irlash yoki tizimni buzishdir."],
        answer: " Virusning asosiy maqsadi kompyuterni yoki tarmoqni zararlash, foydalanuvchining ma'lumotlarini o'g'irlash yoki tizimni buzishdir."
    },
    48: {
        question: "Internet nima?",
        options: ["Internet — bu faqat telefonlarga xizmat ko'rsatuvchi tarmoq.","Internet — bu faqat kompyuterga yangi dasturlarni o'rnatish uchun ishlatiladi.","Internet — bu faqat kompyuterda o'yin o'ynash uchun ishlatiladi.","Internet — bu global kompyuter tarmog'i bo'lib, dunyoning turli nuqtalaridagi qurilmalarni bir-biriga ulaydi va ma'lumotlarni almashish imkoniyatini yaratadi."],
        answer: "Internet — bu global kompyuter tarmog'i bo'lib, dunyoning turli nuqtalaridagi qurilmalarni bir-biriga ulaydi va ma'lumotlarni almashish imkoniyatini yaratadi."
    },
    49: {
        question: "Internetning tarixi qanday boshlangan?",
        options: ["Internet faqat telefon tarmog'ida ishlaydi."," Internet 1960-yillarda ARPANET nomli loyiha sifatida boshlandi va asta-sekin dunyo bo'ylab kengayib, bugungi kunda global tarmoqka aylangan.","nternetning tarixi 2000-yilda boshlandi.","Internet 1980-yillarda faqat o'yinlar uchun yaratilgan."],
        answer: " Internet 1960-yillarda ARPANET nomli loyiha sifatida boshlandi va asta-sekin dunyo bo'ylab kengayib, bugungi kunda global tarmoqka aylangan."
    },
    50: {
        question: "Internet qanday rivojlanib, bugungi kunga yetib bordi?",
        options: ["Internetni faqat mobil telefonlar orqali ishlatish mumkin.","Internet faqat televizorlar uchun ishlatiladi.","Internet 1990-yillarda World Wide Web (WWW) orqali ommalashdi va dunyo bo'ylab keng tarqaldi. Hozirda har xil servislar, ijtimoiy tarmoqlar, elektron tijorat va boshqa sohalarda keng qo'llaniladi.","Internet 2020-yilda yangi texnologiya sifatida joriy qilindi."],
        answer: "Internet 1990-yillarda World Wide Web (WWW) orqali ommalashdi va dunyo bo'ylab keng tarqaldi. Hozirda har xil servislar, ijtimoiy tarmoqlar, elektron tijorat va boshqa sohalarda keng qo'llaniladi."
    },
    
    // 50 gacha savollar qo'shish mumkin
};

// HTML elementlari
const numberSelect = document.getElementById('numberSelect');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultElement = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

// Raqamlar ro'yxatini yaratish
for (let i = 1; i <= 50; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}`;
    numberSelect.appendChild(option);
}

// Raqam tanlanganda savol va variantlarni ko'rsatish
numberSelect.addEventListener('change', function () {
    const selectedNumber = parseInt(numberSelect.value);

    if (selectedNumber) {
        const questionData = questions[selectedNumber];
        if (questionData) {
            // Savolni va variantlarni ko'rsatish
            questionElement.textContent = questionData.question;
            optionsContainer.innerHTML = ""; // Eski variantlarni tozalash
            questionData.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.remove('correct', 'incorrect'); // Eski to'g'ri yoki noto'g'ri klasslarni olib tashlash
                button.addEventListener('click', function () {
                    checkAnswer(option, questionData.answer, button);
                });
                optionsContainer.appendChild(button);
            });
            questionContainer.style.display = "block";
            resultElement.textContent = "";
        }
    } else {
        questionContainer.style.display = "none";
    }
});

// Javobni tekshirish
function checkAnswer(selectedAnswer, correctAnswer, button) {
    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        resultElement.textContent = "To'g'ri javob!";
        resultElement.style.color = "green";
    } else {
        button.classList.add('incorrect');
        resultElement.textContent = "Noto'g'ri javob!";
        resultElement.style.color = "red";
    }

    // Variantlarni faqat bir marta tanlashga ruxsat berish
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
    });
}

// O'yinni qayta boshlash
resetButton.addEventListener('click', function () {
    numberSelect.value = "";
    questionContainer.style.display = "none";
    resultElement.textContent = "";
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
});
