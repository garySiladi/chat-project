const LoremIpsum = require("lorem-ipsum").LoremIpsum;

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

const getRandomTo = to => Math.floor(Math.random() * to) + 1;

module.exports = () => {
  const data = { articles: [], article_comments: [], users: [] };
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
  }
  return data;
};
