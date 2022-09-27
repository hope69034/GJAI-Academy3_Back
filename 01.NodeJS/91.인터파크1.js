// 인터파크 베스트 셀러 목록
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');    // npm i iconv-lite

url = 'http://book.interpark.com/display/collectlist.do?_method=BestsellerHourNew201605&bestTp=1&dispNo=028';

axios.get(url, {responseType: 'arraybuffer'}) // 유알엘불러오기

    .then(res => {
        let contentType = res.headers['content-type'];
        console.log(contentType);               // MS949(EUC-KR)
        let charset = contentType.includes('charset=') ? contentType.split('charset=')[1] : 'utf-8';
        let data = iconv.decode(res.data, charset);

        const $ = cheerio.load(data); //cheerio 객체선언 (유알엘객체)

        $('.rankBestContentList > ol > li').each((index, element) => {   // .클래스 선택자   ol 이랑 li는 태그 선택자
            let title = $(element).find('.itemName').text().trim();
            let author = $(element).find('.author').text().trim();
            author = author.split(',').map(x => x.trim()).join(', ');
            let company = $(element).find('.company').text().trim();
            let price = $(element).find('.price > em').text().trim();
            console.log(index+1, '============================================');
            console.log(`제목:\t\t${title}`);
            console.log(`저/역자:\t${author}`);
            console.log(`출판사:\t\t${company}`);
            console.log(`가격:\t\t${price}원`);
        });
    })

    .catch(err => {
        console.log(err);
    });


