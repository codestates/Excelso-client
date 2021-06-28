const axios = require('axios');
const cheerio = require("cheerio");

const getHtml = async () => {
    try {
      return await axios.get("https://www.coffeebay.com/home/menu/menu_smoobella");
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.tab-contents ul li");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('button.menu-parent-box p.menu-txt-item span.menu-name-title').text(),
          src: `https://coffeebay.com${$(this).find('button.menu-parent-box img').attr('src')}`,
          desc: $(this).find('div.menu-child-box div.menu-child-info-box p.menu-child-text-item').text().trim(),
      };
    });

    // const data = ulList.filter(n => n.title);
    return ulList;
  })
  .then(res => console.log(res));

