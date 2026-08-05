/* 站点信息常量,开发者修改此处即可全局替换页面底部作者与仓库信息 */
const SITE_AUTHOR = "RikkaLove0721";
const SITE_AUTHOR_URL = "https://github.com/RikkaLove0721";
const SITE_REPO_NAME = "RikkaLove0721.github.io";
const SITE_REPO_URL = "https://github.com/RikkaLove0721/RikkaLove0721.github.io";

const authorLink = document.getElementById("author-link");
const repoLink = document.getElementById("repo-link");
authorLink.textContent = SITE_AUTHOR;
authorLink.setAttribute("href", SITE_AUTHOR_URL);
repoLink.textContent = SITE_REPO_NAME;
repoLink.setAttribute("href", SITE_REPO_URL);
