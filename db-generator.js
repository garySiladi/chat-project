module.exports = () => {
  const data = { articles: [] };
  for (let i = 0; i < 100; i++) {
    data.articles.push({
      id: i,
      heading: "Sample Heading",
      cropped_insight:
        "Sample text with a little twist. It seems like a lorem ipsum, but it was written manually. It ends here and now.",
      title_photo: "https://via.placeholder.com/214x160/afe"
    });
  }
  return data;
};
