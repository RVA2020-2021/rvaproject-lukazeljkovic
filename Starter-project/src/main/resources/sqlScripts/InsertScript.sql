

INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (-100, 'TestLiga', 'TestLiga');

INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (-100, 'TestNaziv',to_date('04.03.1945.','dd.mm.yyyy.'), 'Test',-100);

INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (-100, 'TestIme', 'TestPrezime','1782',to_date('23.10.1987.','dd.mm.yyyy.'),-100,-100);


INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (1, 'Srbin', 'Srb');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (2, 'Kanadjanin', 'Kan');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (3, 'Italijan', 'Ita');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (4, 'Alzirac', 'Alz');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (5, 'Holandjanin', 'Hol');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (6, 'Nemac', 'Nem');


INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (1, 'Linglong tire Super liga Srbije', 'Linglong');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (2, 'La liga', 'La');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (3, 'Premier liga', 'Premier');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (4, 'Bundes liga', 'Bundes');



INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (1, 'Crvena Zvezda',to_date('04.03.1945.','dd.mm.yyyy.'), 'Beograd',1);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (2, 'Barselona', to_date('29.11.1899.','dd.mm.yyyy.'), 'Barselona',2);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga",3)
VALUES (3, 'West Ham United', to_date('07.06.1995.','dd.mm.yyyy.'), 'London',3);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (4, 'Borusija Dortmund', to_date('19.12.1909.','dd.mm.yyyy.'), 'Dortmund',4);

INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (1, 'Milan', 'Borjan','1782',to_date('23.10.1987.','dd.mm.yyyy.'),2,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (2, 'Dijego', 'Falćineli','1783',to_date('26.06.1991.','dd.mm.yyyy.'),3,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (3, 'Milan', 'Pavkov','1783',to_date('09.02.1994.','dd.mm.yyyy.'),1,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (4, 'Frenkie', 'De Jong','1999',to_date('12.05.1997.','dd.mm.yyyy.'),5,2);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (5, 'Mohamed', 'Said Benrahma','1389',to_date('10.08.1995.','dd.mm.yyyy.'),4,3);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (6, 'Steffen', 'Tigges','1231',to_date('31.07.1998.','dd.mm.yyyy.'),6,4);