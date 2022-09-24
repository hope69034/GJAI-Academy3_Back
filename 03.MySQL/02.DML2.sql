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

/* 라운드 */
SELECT continent, COUNT(*), sum(gnp), avg(gnp) 
FROM country 
GROUP BY continent
/* 여기 소수점을 제거하는법  라운드활용 */
SELECT continent, round(COUNT(*)), round(sum(gnp)), avg(gnp) 
FROM country 
GROUP BY continent
/*3이면 일십백의자리에서반올림하기(소수점자리아님)  라운드 마이너스 활용 */
SELECT continent, round(COUNT(*)), round(sum(gnp)), round(avg(gnp),-3) 
FROM country 
GROUP BY continent

/* 업데이트 */
/* 밸류를 수정하는 업데이트 */
UPDATE 테이블명
   SET 필드명=값, 필드명=값, ... , 필드명=값
   WHERE 조건

/* 인서트 */
/* 맨 아래에 넣어준다  */
INSERT INTO 테이블명
/* 필드명을 사용하면 일부칼럼(필드)만 채우겠다는 것이고 필드명을 사용하지 않으면 모든 필드 */
   (필드명)
   VALUES (필드명에 대한 값)

USE world; 

SELECT * FROM city  ;

INSERT INTO city (NAME,      countrycode,   district , population  )
VALUES           ('Cardinal', "afg",        "kabol"  , 111         );

SELECT * FROM city  ;

/* 카피 */
/* 아래 설명 */

/* delete */
/* 해당테이블(문서)에서 조건에 해당하는 것을 지운다 */
DELETE FROM 테이블명 
	WHERE 조건 

/* 4. 삭제(DELETE) 
DELETE FROM 테이블명
	WHERE 조건
	조건에해당하는행전체를지운다
*/
USE world; 

SELECT * FROM citycopy  ;

DELETE FROM citycopy
	WHERE countrycode='nld';
	
SELECT * FROM citycopy  ;
	
DELETE FROM citycopy
	WHERE population<200000;










/* 업데이트 셋 웨얼 활용하기 */
SELECT * FROM city WHERE countrycode="kor" AND name like "k%"
해보면 광주가 k로 시작하니까 업데이트로 수정하기

UPDATE city 
	SET NAME="Gwangju", district="Gwangju"
	WHERE id=2336;

이렇게 바꾸고 아래서 확인
SELECT * FROM city WHERE NAME="Gwangju" ;
SELECT * FROM city WHERE countrycode="kor" AND name LIKE "G%"



/* 인서트 */
/* 맨 아래에 넣어준다  */
INSERT INTO 테이블명
/* 필드명을 사용하면 일부칼럼(필드)만 채우겠다는 것이고 필드명을 사용하지 않으면 모든 필드 */
   (필드명)
   VALUES (필드명에 대한 값)

/* 보고 */
SELECT * FROM city WHERE DISTRICT LIKE "CHOLLANAM"
/* 수정 */
INSERT INTO city
	       (NAME    , COUNTRYCODE, DISTRICT   ,POPULATION)
	VALUES ("HAENAM", "KOR"      , "CHOLLANAM", 100000   );
/* 확인 */
SELECT * FROM city WHERE DISTRICT LIKE "CHOLLANAM"


SELECT * FROM city  /* 해보고 */
/* 필드명을 생략하고 첫 칼럼(필드)이 아이디니까 디폴트로 그걸 유지하고 차례로 밸류 넣기 */
INSERT INTO city
	VALUES (DEFAULT, "JANGSUNG", "KOR","CHOLLANAM", 100000);
	
SELECT * FROM city WHERE NAME LIKE "JANGSUNG"







/* 업데이트 강화 */
UPDATE city, (SELECT * FROM city WHERE DISTRICT="CHOLLANAM") b
	SET city.population=b.population+50000 /* 플러스오만인구 */ /* 전남의 인구에 +오만 */
	WHERE city.id=b.id; /* 아이디가같으면 */






/* 카피 */
CREATE TABLE citycopy LIKE city;   /* 시티를 시티카피란이란으로 복사본만들기 */
SHOW TABLES; /* 확인 */
SELECT * FROM citycopy; /* 확인 */
INSERT INTO citycopy SELECT * FROM city;  /* 시티데이터를가져와서 복사본에넣기 */
SELECT * FROM citycopy; /* 확인 */

지우기
시티카피 테이블에서 a컨추리코드가 afg인 것을 지운다
seLECT * FROM citycopy LIMIT 10;
DELETE FROM citycopy  
	WHERE countrycode="afg";
seLECT * FROM citycopy LIMIT 10;
/*    (WHERE population>9000000) 인구백만인것을지운다 */
