


INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Srbin', 'Srb');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Kanadjanin', 'Kan');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Italijan', 'Ita');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Alzirac', 'Alz');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Holandjanin', 'Hol');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (nextval('nacionalnost_seq'), 'Nemac', 'Nem');


INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (nextval('liga_seq'), 'Linglong tire Super liga Srbije', 'Linglong');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (nextval('liga_seq'), 'La liga', 'La');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (nextval('liga_seq'), 'Premier liga', 'Premier');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (nextval('liga_seq'), 'Bundes liga', 'Bundes');



INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (nextval('tim_seq'), 'Crvena Zvezda',to_date('04.03.1945.','dd.mm.yyyy.'), 'Beograd',1);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (nextval('tim_seq'), 'Barselona', to_date('29.11.1899.','dd.mm.yyyy.'), 'Barselona',2);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (nextval('tim_seq'), 'West Ham United', to_date('07.06.1995.','dd.mm.yyyy.'), 'London',3);
INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (nextval('tim_seq'), 'Borusija Dortmund', to_date('19.12.1909.','dd.mm.yyyy.'), 'Dortmund',4);

INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Milan', 'Borjan','1782',to_date('23.10.1987.','dd.mm.yyyy.'),2,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Dijego', 'Falcineli','1783',to_date('26.06.1991.','dd.mm.yyyy.'),3,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Milan', 'Pavkov','1783',to_date('09.02.1994.','dd.mm.yyyy.'),1,1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Frenkie', 'De Jong','1999',to_date('12.05.1997.','dd.mm.yyyy.'),5,2);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Mohamed', 'Said Benrahma','1389',to_date('10.08.1995.','dd.mm.yyyy.'),4,3);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (nextval('igrac_seq'), 'Steffen', 'Tiggers','1231',to_date('31.07.1998.','dd.mm.yyyy.'),6,4);

INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (-100, 'TestNacionalnost', 'Tes');


INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (-100, 'TestLiga', 'TestLiga');

INSERT INTO "tim"("id","naziv", "osnovan", "sediste", "liga")
VALUES (-100, 'TestNaziv',to_date('04.03.1945.','dd.mm.yyyy.'), 'Test',1);

INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (-100, 'TestIme', 'TestPrezime','1782',to_date('23.10.1987.','dd.mm.yyyy.'),1,1);
