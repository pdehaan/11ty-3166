module.exports = {
  tags: ["posts"],
  layout: "blog-main",
  permalink(data) {
    const pageDate = data.page.date.toLocaleDateString("en-CA");
    const pageSlug = this.slugify(data.title ?? data.page.fileSlug);
    return `/blog/${pageDate}-${pageSlug}.html`
  },
};
