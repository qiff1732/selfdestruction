const predictions = [
    "В ближайшую луну ты опоздаешь на работу, и босс скажет, что ты бесполезен, как Wi-Fi в лесу.",
    "Тёмные силы предрекают: твой кот насрёт в тапки, и ты будешь ходить с ароматом мести.",
    "Звёздный круг шепчет: купишь шаверму, а там сюрприз — просрочка, и ты проблюёшься на всю улицу.",
    "В тенях судьбы видно: твой бывший напишет, и ты, как дурак, побежишь к нему на кринж-свидание.",
    "Космос предсказывает: дедлайн горит, а ты спишь, и весь офис ржёт над твоим фейлом.",
    "Древние знаки говорят: лайкнешь фотку врага, и он решит, что ты его фанбой. Кринж уровня 80!",
    "В зеркале судьбы отражается: забудешь выключить камеру, и все увидят, как ты ковыряешь в носу.",
    "Тёмный круг предрекает: на вечеринке ляпнешь, что спал с соседкой, и все будут ржать до слёз.",
    "Звёзды выстроились: удалишь старый пост, но скрины уже у всех, и ты — мем года.",
    "В тенях ночи видно: прольёшь энергос на ноут, и он сгорит вместе с твоими мечтами о славе.",
    "Древние силы шепчут: билет на концерт купишь, а его отменят, и ты будешь реветь, как лох.",
    "Космический ветер предсказывает: проспишь будильник, и тебя уволят, но зато выспишься, бомжара!",
    "В звёздной пыли видно: найдёшь 500 рублей, но тут же проиграешь их в карты, как типичный дебил.",
    "Тёмные знаки говорят: запишешь видео, где падаешь в лужу, и станешь звездой интернета. Кринж!",
    "В тенях судьбы предрешено: попробуешь готовить, спалишь кухню, и пожарные будут ржать над тобой.",
    "Звёздный шепот предрекает: отправишь маме пошлый мем, и она скажет, что ты больше не её сын.",
    "Древние руны говорят: ляпнешь 'похер' на созвоне, и босс услышит. Готовься к увольнению, гений!",
    "В тенях ночи видно: начнёшь бегать, но упадёшь, и все будут ржать над твоим 'здоровым образом'.",
    "Космос предсказывает: скажешь другу, что он набрал вес, и он тебя заблокирует. Ну и вали, пухляш!",
    "Звёзды шепчут: сделаешь фотку, но даже фильтры не спасут — ты всё равно как картошка после дождя.",
    "Тёмные силы предрекают: попробуешь танцевать на вечеринке, но споткнёшься и станешь мемом.",
    "В звёздной пыли видно: купишь новый телефон, а он упадёт в унитаз на следующий день.",
    "Космический ветер шепчет: решишь сэкономить, но в итоге потратишь всё на шмотки с AliExpress.",
    "Древние знаки говорят: напишешь гневный коммент, а потом поймёшь, что это был твой босс.",
    "В тенях судьбы предрешено: решишь стать блогером, но твой первый стрим посмотрит только мама."
];

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function predictFuture() {
    const prediction = getRandomPrediction();
    localStorage.setItem('currentPrediction', prediction);
    window.location.href = 'prediction.html';
}