


/*
 * 날짜/시간 조작
 */
 /* 선생님 */
CREATE TABLE dateTable (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dt DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO dateTable VALUES (DEFAULT, DEFAULT);
INSERT INTO dateTable (dt) VALUES
	('2022-08-28 17:22:21'), ('2022-02-15 10:22:24'),
	('2022-12-09 22:13:24'), ('2022-07-06 20:15:18');
SELECT * FROM dateTable;

# 2022-09-23 형식
SELECT DATE_FORMAT(dt, '%Y-%m-%d') FROM dateTable;
# 02:28:00 PM 형식
SELECT DATE_FORMAT(dt, '%r') FROM dateTable;
SELECT DATE_FORMAT(dt, '%h:%i:%s %p') FROM dateTable;
# 22-09-23 14:28 형식
SELECT DATE_FORMAT(dt, '%y-%m-%d %H:%i') FROM dateTable;

SELECT NOW(), CURDATE(), CURTIME();
# 날짜 더하기/빼기
SELECT DATE_ADD(NOW(), INTERVAL 40 DAY);
SELECT DATE_SUB(NOW(), INTERVAL 3 MONTH);
# D-day 계산
SELECT TO_DAYS('2022-11-17') - TO_DAYS(NOW());
# 요일 : 1 - 일요일
SELECT DAYOFWEEK(dt) FROM dateTable;




/* 나 */
INSERT INTO datetable VALUES (DEFAULT, DEFAULT);
SELECT * FROM datetable; 

SELECT DATE_FORMAT(dt,"%Y-%m-%d") FROM dateTable;
SELECT DATE_FORMAT(dt,"%r") FROM dateTable;
SELECT DATE_FORMAT(dt,"%h:-%i:-%s %p") FROM dateTable;
seLECT now(), curdate(), curtime();

/* 날짜더하기뺴기 */
SELECT date_add(now(), interval 40 day);
SELECT date_sub(now(), interval 3 month);

/* 디 데이 */
select to_days("2022-11-17")-to_days(now()); 
  /* 현재 09.23 : 디데이계산 55일 */

/* 요일 */
select dayofweek(dt) from datetable; /* 1은 일요일 2는 월요일 금용리은6 */ 

select date_format(dt,"%y-%m-%d %H:%i") from dateTable;



