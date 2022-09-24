/* 
데이터 조작 언어 DML 
*/

/* 데이터보기 */
USE world; 
SHOW TABLES;
DESC city;
DESC country;
DESC countrylanguage;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM countrylanguage; 

/* 기본문법순서 */
SELECT 필드명
FROM 테이블
JOIN 테이블
ON 조인조건
WHERE 조건
ORDER BY 필드명 DESC내림차순 ASC또는생략 오름차순
GROUP BY 필드명
HAVING 그룹조건
LIMIT 숫자
OFFSET 숫자 














/* mysql > db(database) > table > 사용자,글,댓글 */
USE world;   /* use database  db세렉 */
SHOW TABLES;  /* db안의 table확인 */
DESC city;   /* city table의 구조 보기  */
SELECT * FROM city;
DESC country;
SELECT * FROM country;
/* 이름변수는 소문자다 */
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM countrylanguage; 
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

/* select 셀렉할 필드명  */
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

/*  인구수가 800만 이상의 도시를 인구수의 내림차순 조회  DESC는 디센딩descending */ 
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
/* count(*)로 총 행을 카운트 */
SELECT COUNT(*) FROM city WHERE countrycode="kor";
/* 한국 도시의 인구의 합 */
SELECT SUM(population) FROM city WHERE countrycode="kor";
/* 평균 */
SELECT avg(population) FROM city WHERE countrycode="kor";
/* 컬럼명에 average라고 표시한다 */
SELECT avg(population) AS `population.average` FROM city WHERE countrycode="kor";
SELECT max(population) AS  `population.max` FROM city WHERE countrycode="kor"; /* 최대 */
SELECT min(population) AS `population.min` FROM city WHERE countrycode="kor"; /* 최소 */
/* 묶어서 조회 */
SELECT max(population),min(population),avg(population) FROM city WHERE countrycode="kor";

/* 그룹만들기 */

/* 그룹_컨캣 */
/* # 전라남도의 도시 */
SELECT group_concat(NAME)  FROM city WHERE district="chollanam";

/* # 한국의 광역시도 */
SELECT group_concat(DISTINCT district)  FROM city WHERE countrycode="kor";

/* 그룹 바이 */
/* #  한국광역시도별 도시의 개수 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district

/* # 한국 광역시도별 도시의 개수  도시 개수순으로 내림차순하고 도시 수가 같으면 지역 ㄱㄴㄷ순으로 오름차순*/
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district ORDER BY COUNT(*) DESC, district;
/* 오더바이 정렬 오름차순 내림차순    카운트로 내림차순 디스트릭트로 오름차순 */

/* # 한국 광역시도별 도시의 개수 5개 이상인 것 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district HAVING COUNT(*)>=5;
/* 
HAVING 절 
- WHERE 절에서는 집계함수를 사용 할 수 없다.
- HAVING 절은 집계함수를 가지고 조건비교를 할 때 사용한다.
- HAVING절은 GROUP BY절과 함께 사용이 된다. 
*/

/* # 한구 광역시도별 도시의 개수 5개 이상인 것 내림차순정렬 */
SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district HAVING COUNT(*)>=5 ORDER BY COUNT(*) DESC;


/* 
# SELECT district FROM city WHERE countrycode="kor" 
# SELECT COUNT(*) FROM city WHERE countrycode="kor" 
# SELECT district FROM city WHERE countrycode="kor" GROUP BY district
# SELECT distinct district FROM city WHERE countrycode="kor" 
# SELECT COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district
# SELECT district, COUNT(*) FROM city WHERE countrycode="kor" 
# SELECT district, COUNT(*) FROM city WHERE countrycode="kor" GROUP BY district
 */






/* # 도시 개수가 100개 이상인 국가를 도시개수 내림차순 정렬 */
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode HAVING COUNT(*)>=100 ORDER BY COUNT(*) DESC;
/* //////////// */

/* 리미트 */
/* 도시개수가 많은 상위 5개 국가 */
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode  ORDER BY COUNT(*) DESC LIMIT 5;

/* 도시인구가 많은 상위 10개 국가 */
SELECT countrycode, sum(population) FROM city GROUP BY countrycode  ORDER BY COUNT(*) DESC LIMIT 10;

/* 오프셋 */
/* 상위 6위부터10위까지   5개를건너띄고 5개 */
/* 오프셋으로 5개를 버리고 리밋으로 상위5개를 셀렉 즉 6~10위 */
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
/* 
SELECT country.name AS `country.name` , city.name AS `city.name`, city.Population AS `city.Population`
FROM city 
JOIN country 
ON city.countrycode = country.Code 
ORDER BY city.Population DESC 
LIMIT 10;  
*/


