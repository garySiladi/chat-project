const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const moment = require("moment");

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const getRandomTo = to => Math.floor(Math.random() * to);

module.exports = () => {
  const data = {
    articles: [],
    article_comments: [],
    users: [],
    therapies: [],
    therapy_categories: [],
    therapy_schedules: []
  };
  for (let i = 0; i < 20; i++) {
    data.articles.push({
      id: i,
      date_of_adding: new Date("2019-04-15"),
      heading: lorem.generateWords(5),
      source: lorem.generateWords(3),
      article_text: lorem.generateParagraphs(7),
      insight: lorem.generateSentences(5),
      cropped_insight: lorem.generateSentences(1),
      title_photo: "https://via.placeholder.com/1000x800/afe" //TODO: change image link
    });
    data.article_comments.push({
      id: i,
      article_id: getRandomTo(20),
      user_id: getRandomTo(20),
      comment: lorem.generateSentences(3)
    });
    data.users.push({
      id: i,
      name: "Random User"
    });
    data.therapies.push({
      id: i,
      category_therapy: getRandomTo(3),
      heading: lorem.generateWords(2),
      insight: lorem.generateSentences(5),
      cropped_insight: lorem.generateSentences(1),
      title_photo: "https://via.placeholder.com/1000x800/efa" //TODO: change image link
    });
    data.therapy_schedules.push({
      id: i,
      attendants: 1,
      max_attendants: getRandomTo(8) + 1,
      artetherapy_id: getRandomTo(20),
      price: getRandomTo(20),
      date: moment(moment()).add(getRandomTo(5), "days"),
      time_length: getRandomTo(90) + 1,
      room: getRandomTo(10) + 1,
      therapeut_name: lorem.generateWords(1)
    });
  }
  for (let i = 0; i < 3; i++) {
    data.therapy_categories.push({
      id: i,
      category_name: `Category ${i}`
    });
  }
  return data;
};
