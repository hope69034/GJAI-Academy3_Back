


/*
 * 날짜/시간 조작
 */
 /* 선생님 */


# 빈 테이블 만들기 
CREATE TABLE dateTable (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dt DATETIME DEFAULT CURRENT_TIMESTAMP
);

# 현재시각 하나씩넣기
INSERT INTO datetable2 VALUES (DEFAULT, DEFAULT);
SELECT * FROM datetable2;

# 특정 시각 4개 넣기
INSERT INTO datetable2 (dt) 
VALUES ('2022-08-28 17:22:21'), 
   ('2022-02-15 10:22:24'),
	('2022-12-09 22:13:24'), 
	('2022-07-06 20:15:18');
SELECT * FROM datetable2;



2022-09-23  
SELECT DATE_FORMAT(dt, '%Y-%m-%d') FROM dateTable;

02:28:00 PM  
SELECT DATE_FORMAT(dt, '%r') FROM dateTable;
SELECT DATE_FORMAT(dt, '%h:%i:%s %p') FROM dateTable; /* 같은코드 */

22-09-23 14:28  
SELECT DATE_FORMAT(dt, '%y-%m-%d %H:%i') FROM dateTable;





/* date고유함수 */

# 날짜 더하기/빼기
SELECT DATE_ADD(NOW(), INTERVAL 40 DAY);
	/* 40일 후 시각을 알려준다 */
SELECT DATE_SUB(NOW(), INTERVAL 3 MONTH);
	/* 3달 전 시각을 알려준다 */

# D-day 계산
SELECT TO_DAYS('2022-11-17') - TO_DAYS(NOW());
	/* 현재 09.23 : 디데이계산 55일 */

# 무슨요일인지알아보기 : 1 - 일요일
SELECT DAYOFWEEK(dt) FROM dateTable;
	/* 1은 일요일 2는 월요일 금용리은6 */ 


/* SELECT NOW(), CURDATE(), CURTIME(); */