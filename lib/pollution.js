module.exports = bot => {
  const points = [
    { title: 'свердловская', id: '1', },
    { title: 'комсомольский', id: '2', },
    { title: 'железнодорожников', id: '3', },
    { title: 'копылова', id: '6', },
    { title: 'юности', id: '13', },
    { title: 'павлова', id: '14', },
    { title: 'перенсона', id: '17', },
    { title: 'ады', id: '18', },
    { title: 'киренского', id: '21', },
    { title: 'щорса', id: '22', },
    { title: 'базаиха', id: '25', },
  ];

  const url = 'http://krasnoyarsknebo.ru/share/';

  bot.on('inline_query', function({ inlineQuery, answerInlineQuery }) {
    let city = inlineQuery.query.trim();
    let p = points.map((el) => {
      return {
        id: el.id,
        title: el.title,
        message_text: url + el.id + '?t=' + (+new Date),
        type: 'article'
      };
    }).filter(el => !city || el.title.includes(city));

    return answerInlineQuery(p);
  });
};
