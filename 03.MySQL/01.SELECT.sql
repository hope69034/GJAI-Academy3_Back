/* 
데이터 조작 언어 DML 
*/

/* mysql > db(database) > table > 사용자,글,댓글 */
USE world;   /* use database  db세렉 */
SHOW TABLES;  /* db안의 table확인 */
DESC city;   /* city table의 구조 보기  */
/* 이름변수는 소문자다 */

/* 

SELECT 문  : 조회의 용도

SELECT 필드명(컬럼) FROM 테이블명 (파일이름)
   WHERE 조건
   ORDER BY 필드명 순서(어센딩OR디센딩)
   LIMIT 숫자 OFFSET 숫자 (가져올 개수 몇개를건너띄워서몇개가져와라)
   GROUP BY 필드명(그룹핑할컬럼)
   HAVING 그룹조건
   JOIN 테이블명
   ON 조인 조건; (끝에 세미콜론;)
*/

/* select * 필드명을 전부 셀렉하는 것  */
SELECT * FROM city; /* select(필드명)  *(전부)  from city(table명)  */
SELECT * FROM city WHERE countrycode="KOR"; /* 필드명에 대소문자 구별은 안함 */\
/*countrycode는 필드명 KOR은 value */
                           /* 셀렉트에 제한을 검 countrycode가 KOR인 것을 세렉 */
SELECT * FROM city WHERE DISTRICT="Kwangju";
/* 필드명으로 */
/* 아래서 name은 키워드면서 필드명 (색상다름) population은 필드명 */
SELECT `Name`, population FROM city WHERE CountryCode="KOR"; /* city는 table명 */
/* CountryCode="KOR"  필드명="value" */
/* Name 은 다른프로그램에서도쓰링ㄹ수잇는 키워드라서 ``가 필수다 
원래의 이름과 대소문자를 그대로 입력하기 위해서 */

SELECT COUNT(*) FROM city; /* 개수세기  시티는 테이블 */
SELECT `name`, population FROM city WHERE countrycode='KOR' AND population>1000000;
SELECT distinct district FROM city WHERE countrycode="KOR"; /* 유니크한 district만 셀렉 중복제거 */

/* 호남지역도시 셀렉 */
SELECT * FROM city WHERE district="Kwangju" OR district="Chollabuk" OR district="Chollanam";
/* 인구가백만보다 크고 인구가 짝수인 것 */
SELECT * FROM city WHERE countrycode="kor" AND population>1000000 AND population%2=0;
/* 범위지정 - 같은코드 */
SELECT * FROM city WHERE countrycode="kor" AND population>1000000 AND population<2000000;
SELECT * FROM city WHERE countrycode="kor" AND population BETWEEN 1000000 AND 2000000;

/* like활용 전라로 시작하는 것 셀렉   전라남북도의 도시 */
SELECT * FROM city WHERE countrycode="kor" AND district LIKE "cholla%";

/*  인구수가 천만 이상의 도시를 인구수의 내림차순 조회  DESC는 디센딩descending */ 
SELECT * FROM city WHERE population>8000000 ORDER BY population DESC; /* DESC생략시 오름차순 어센딩 */
/* 오름차순 어센딩 입력은 asc 또는 생략*/

/* 이름으로 오름차순 조회 */
SELECT * FROM city WHERE district="chollanam" order BY NAME;

/* 한국의 도시를 district는 오름차순으로 name 도 오름차순 */
/* 디스트릭트(도시)명으로 오름차순 정렬을 하고 같은 도시면 거기서 name으로 오름차순 */
SELECT * FROM city WHERE countrycode="kor" ORDER BY district, NAME;
/* # 한국의 도시를 district는 오름차순으로  인구수는 내림차순 */
/* 광역시도별로 도시 인구수가 많은 것분터 보여줘라 = 같은말 */
SELECT * FROM city WHERE countrycode="kor" ORDER BY district, population DESC;

/* 함수 */

/* 한국의 도시가 몇개인가 */
SELECT COUNT(*) FROM city WHERE countrycode="kor";
/* 한국 도시의 인구의 합 */
SELECT SUM(population) FROM city WHERE countrycode="kor";
/* 평균 */
SELECT avg(population) FROM city WHERE countrycode="kor";
/* 컬럼명에 average라고 표시한다 */
SELECT avg(population) as average FROM city WHERE countrycode="kor";
SELECT max(population) as average FROM city WHERE countrycode="kor"; /* 최대 */
SELECT min(population) as average FROM city WHERE countrycode="kor"; /* 최소 */
/* 묶어서 조회 */
SELECT max(population),min(population),avg(population) FROM city WHERE countrycode="kor";

/* 그룹만들기 */
/* # 전라남도의 도시 */
SELECT group_concat(NAME)  FROM city WHERE district="chollanam";

/* # 한국의 광역시도 */
SELECT group_concat(DISTINCT district)  FROM city WHERE countrycode="kor";

/* #  한국광역시도별 도시의 개수 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district

/* # 한국 광역시도별 도시의 개수  도시 개수순으로 내림차순하고 도시 수가 같으면 지역 ㄱㄴㄷ순으로 오름차순*/
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district ORDER BY COUNT(*) DESC, district;

/* # 한국 광역시도별 도시의 개수 5개 이상인 것 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district HAVING COUNT(*)>=5;

/* # 한구 광역시도별 도시의 개수 5개 이상인 것 내림차순정렬 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district HAVING COUNT(*)>=5 ORDER BY COUNT(*) DESC;








/* # 도시 개수가 100개 이상인 국가를 도시개수 내림차순 정렬 */
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode HAVING COUNT(*)>=100 ORDER BY COUNT(*) DESC;
/* //////////// */

/* 도시개수가 많은 상위 5개 국가 */
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode  ORDER BY COUNT(*) DESC LIMIT 5;

/* 도시인구가 많은 상위 10개 국가 */
SELECT countrycode, sum(population) FROM city GROUP BY countrycode  ORDER BY COUNT(*) DESC LIMIT 10;
/* 상위 6위부터10위까지   5개를건너띄고 5개 */
SELECT countrycode, sum(population) FROM city GROUP BY countrycode  ORDER BY COUNT(*) DESC LIMIT 5 OFFSET 5;

/*    
조인
inner join 교집합을 조인  끄집어내기 */

/* # 도시의 인구가 많은 국가 6위~10위 */
SELECT country.name, sum(city.population) FROM city 
inner join country on city.countrycode=country.code GROUP BY city.countrycode   
ORDER BY sum(city.population) DESC LIMIT 5 OFFSET 5;

/* 인구가 많은  전세계 도시 top10의 국가명,도시명,인구수 */
SELECT country.name, city.name, city.Population FROM city JOIN country 
ON city.countrycode = country.Code ORDER BY city.Population DESC LIMIT 10; 



/* 연습문제 */


SELECT * FROM city; 
SELECT * FROM countrylanguage; 
SELECT * FROM country; 


3) 대륙별로 국가숫자, GNP의 합, 평균 국가별 GNP는?
SELECT continent, COUNT(*), sum(gnp), avg(gnp) 
FROM country 
GROUP BY continent

/* 대륙별 국가숫자
SELECT continent, COUNT(*) FROM country GROUP BY continent
대륙별  gnp합
SELECT continent, sum(gnp) FROM country GROUP BY continent
평균굮가쥐엔피
SELECT avg(gnp) FROM country
 */



4) 아시아 대륙에서 인구가 가장 많은 도시 10개를 내림차순으로 보여줄 것
(대륙명, 국가명, 도시명, 인구수)

/* 인구가많은도시10ㄱ */
SELECT country.continent as `대륙명`, 
country.Name as `국가명`, 
city.name as `도시명`, 
city.Population as `인구수`  
FROM city 
JOIN country 
ON city.countrycode = country.Code  
ORDER BY city.Population DESC 
LIMIT 10; 
/* 아시아대륙조건누락 */



5) 전 세계에서 인구가 가장 많은 10개 도시에서 사용하는 공식언어는?
(도시명, 인구수, 언어명)

SELECT 
city.name as `도시명`, 
city.Population as `인구수` , 
         countrylanguage.language as `언어`,  
country.continent as `대륙명`, 
country.Name as `국가명` 
FROM city 
JOIN country 
ON city.countrycode = country.Code
         JOIN countrylanguage
         ON city.countrycode = countrylanguage.countrycode 
ORDER BY city.Population DESC 
LIMIT 10; 
/* 언어조건누락 */


SELECT 
city.name as `도시명`, 
city.Population as `인구수` , 
         countrylanguage.language as `언어`,  
country.continent as `대륙명`, 
country.Name as `국가명` 
FROM city 
JOIN country 
ON city.countrycode = country.Code
         JOIN countrylanguage
         ON country.Code = countrylanguage.countrycode 
ORDER BY city.Population DESC 
LIMIT 10; 



SELECT * FROM city; 
SELECT * FROM countrylanguage; 
SELECT * FROM country; 