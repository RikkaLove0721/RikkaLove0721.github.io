/* 站点信息常量,开发者修改此处即可全局替换页面底部作者、仓库与技术支持信息 */
const SITE_AUTHOR = "RikkaLove0721";
const SITE_AUTHOR_URL = "https://github.com/RikkaLove0721";
const SITE_REPO_NAME = "RikkaLove0721.github.io";
const SITE_REPO_URL = "https://github.com/RikkaLove0721/RikkaLove0721.github.io";
const SITE_TECH_NAME = "JularDepick";
const SITE_TECH_URL = "https://github.com/JularDepick";

/* 友情链接列表,文本与网址成对,跳转新标签页 */
const SITE_FRIEND_LINKS = [
  { name: "JularDepick's GitHub Pages", url: "https://JularDepick.github.io" }
];

const friendLinksEl = document.getElementById("friend-links");
if (friendLinksEl) {
  const linkIconSvg = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  const arrowSvg = '<svg class="icon card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  SITE_FRIEND_LINKS.forEach(function (link) {
    const a = document.createElement("a");
    a.className = "card";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = '<span class="card-icon">' + linkIconSvg + '</span>' +
      '<span class="card-body"><span class="card-title"></span></span>' +
      arrowSvg;
    a.querySelector(".card-title").textContent = link.name;
    friendLinksEl.appendChild(a);
  });
}

const authorLink = document.getElementById("author-link");
const repoLink = document.getElementById("repo-link");
const techLink = document.getElementById("tech-link");
authorLink.textContent = SITE_AUTHOR;
authorLink.setAttribute("href", SITE_AUTHOR_URL);
repoLink.textContent = SITE_REPO_NAME;
repoLink.setAttribute("href", SITE_REPO_URL);
techLink.textContent = SITE_TECH_NAME;
techLink.setAttribute("href", SITE_TECH_URL);
