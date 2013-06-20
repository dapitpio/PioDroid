inputDataObj={
  cities: [
    { id: 1, x: 19, y: 1, name: "Děčín", population: 53098 },
    { id: 2, x: 27, y: 1, name: "Liberec", population: 103977 }, 
    { id: 3, x: 19, y: 4, name: "Ústí nad Labem", population: 	94960 },
    { id: 4, x: 15, y: 3, name: "Teplice", population: 53610 },
    { id: 5, x: 28, y: 4, name: "Turnov", population: 14489 },
    { id: 6, x: 40, y: 4, name: "Broumov", population: 8151 },
    { id: 7, x: 36, y: 5, name: "Trutnov", population: 31903 },
    { id: 8, x: 13, y: 6, name: "Most", population: 67216 },
    { id: 9, x: 11, y: 7, name: "Chomutov", population: 50782 },
    { id: 10, x: 26, y: 7, name: "Mladá Boleslav", population: 46107 },
    { id: 11, x: 31, y: 7, name: "Jičín", population: 16448 },
    { id: 12, x: 39, y: 8, name: "Náchod", population: 21559 },
    { id: 13, x: 36, y: 8, name: "Jaroměř", population: 13010 },
    { id: 14, x: 38, y: 10, name: "Dobruška", population: 7089 },
    { id: 15, x: 6, y: 11, name: "Karlovy Vary", population: 53708 },
    { id: 16, x: 49, y: 12, name: "Jeseník", population: 12510 },
    { id: 17, x: 35, y: 12, name: "Hradec Králové", population: 94252 },
    { id: 18, x: 18, y: 13, name: "Kladno", population: 71654 },
    { id: 19, x: 22, y: 14, name: "Praha", population: 1233211 },
    { id: 20, x: 54, y: 14, name: "Krnov", population: 25211 },
    { id: 21, x: 1, y: 14, name: "Cheb", population: 35022 },
    { id: 22, x: 45, y: 14, name: "Králíky", population: 4651 },
    { id: 23, x: 35, y: 15, name: "Pardubice", population: 89245 },
    { id: 24, x: 29, y: 15, name: "Kolín", population: 30823 }, 
    { id: 25, x: 39, y: 16, name: "Vysoké Mýto", population: 12705 },
    { id: 26, x: 52, y: 16, name: "Bruntál", population: 17686 },
    { id: 27, x: 47, y: 17, name: "Šumperk", population: 27868 },
    { id: 28, x: 56, y: 17, name: "Opava", population: 60199 },
    { id: 29, x: 31, y: 18, name: "Čáslav", population: 10025 },
    { id: 30, x: 41, y: 18, name: "Česká Třebová", population: 16240 },
    { id: 31, x: 46, y: 18, name: "Zábřeh", population: 14416 },
    { id: 32, x: 60, y: 20, name: "Ostrava", population: 308374 },
    { id: 33, x: 51, y: 20, name: "Moravský Beroun", population: 3322 },
    { id: 34, x: 46, y: 20, name: "Mohelnice", population: 9862 },
    { id: 35, x: 42, y: 21, name: "Svitavy", population: 17476 },
    { id: 36, x: 11, y: 21, name: "Plzeň", population: 170620 },
    { id: 37, x: 63, y: 21, name: "Těšín (Cieszyn)", population: 35401 },
    { id: 38, x: 50, y: 21, name: "Šternberk", population: 14060 },
    { id: 39, x: 40, y: 22, name: "Polička", population: 9128 },
    { id: 40, x: 17, y: 22, name: "Příbram", population: 35475 },
    { id: 41, x: 60, y: 22, name: "Frýdek-Místek", population: 60339 },
    { id: 42, x: 33, y: 24, name: "Havlíčkův Brod", population: 24296 },
    { id: 43, x: 50, y: 24, name: "Olomouc", population: 102255 },
    { id: 44, x: 61, y: 24, name: "Frýdlant nad Ostravicí", population: 9727 },
    { id: 45, x: 54, y: 25, name: "Hranice", population: 19684 },
    { id: 46, x: 44, y: 26, name: "Boskovice", population: 11304 },
    { id: 47, x: 57, y: 26, name: "Valašské Meziříčí", population: 27336 },
    { id: 48, x: 48, y: 27, name: "Prostějov", population: 46278 },
    { id: 49, x: 52, y: 27, name: "Přerov", population: 47679 },
    { id: 50, x: 6, y: 27, name: "Domažlice", population: 10970 },
    { id: 51, x: 65, y: 27, name: "Čadca", population: 26004 },
    { id: 52, x: 24, y: 28, name: "Tábor", population: 36095 },
    { id: 53, x: 33, y: 28, name: "Jihlava", population: 51079 },
    { id: 54, x: 10, y: 28, name: "Klatovy", population: 23102 },
    { id: 55, x: 37, y: 29, name: "Velké Meziříčí", population: 11804 },
    { id: 56, x: 44, y: 29, name: "Blansko", population: 20984 },
    { id: 57, x: 93, y: 30, name: "Svidník", population: 12384 },
    { id: 58, x: 18, y: 30, name: "Písek", population: 29898 },
    { id: 59, x: 47, y: 30, name: "Vyškov", population: 21740 },
    { id: 60, x: 84, y: 30, name: "Stará Ľubovňa", population: 16363 },
    { id: 61, x: 51, y: 30, name: "Kroměříž", population: 29036 },
    { id: 62, x: 90, y: 30, name: "Bardejov", population: 33374 }, 
    { id: 63, x: 24, y: 31, name: "Soběslav", population: 7286 },
    { id: 64, x: 16, y: 31, name: "Strakonice", population: 23923 },
    { id: 65, x: 54, y: 31, name: "Zlín", population: 78066 },
    { id: 66, x: 36, y: 32, name: "Třebíč", population: 38717 },
    { id: 67, x: 64, y: 32, name: "Žilina", population: 85477 },
    { id: 68, x: 43, y: 32, name: "Brno", population: 404007 },
    { id: 69, x: 94, y: 32, name: "Stropkov", population: 10829 },
    { id: 70, x: 32, y: 32, name: "Telč", population: 5812 },
    { id: 71, x: 27, y: 33, name: "Jindřichův Hradec", population: 22604 },
    { id: 72, x: 59, y: 34, name: "Púchov", population: 18658 },
    { id: 73, x: 63, y: 34, name: "Rajec", population: 6078 },
    { id: 74, x: 70, y: 34, name: "Ružomberok", population: 29979 },
    { id: 75, x: 52, y: 35, name: "Uherské Hradiště", population: 26280 },
    { id: 76, x: 66, y: 35, name: "Martin", population: 59014 },
    { id: 77, x: 78, y: 35, name: "Poprad", population: 53685 },
    { id: 78, x: 83, y: 36, name: "Levoča", population: 14487 },
    { id: 79, x: 99, y: 36, name: "Snina", population: 21326 },
    { id: 80, x: 22, y: 37, name: "České Budějovice", population: 96053 },
    { id: 81, x: 90, y: 37, name: "Prešov", population: 91650 },
    { id: 82, x: 83, y: 38, name: "Spišská Nová Ves", population: 38354 },
    { id: 83, x: 44, y: 37, name: "Hustopeče", population: 5937 },
    { id: 84, x: 96, y: 37, name: "Humenné", population: 35028 },
    { id: 85, x: 57, y: 38, name: "Trenčín", population: 56760 },
    { id: 86, x: 94, y: 39, name: "Vranov nad Topľou?", population: 23020 }, 
    { id: 87, x: 48, y: 39, name: "Hodonín", population: 26290 },
    { id: 88, x: 38, y: 39, name: "Znojmo", population: 35177 },
    { id: 89, x: 73, y: 40, name: "Brezno", population: 22297 },
    { id: 90, x: 63, y: 40, name: "Prievidza", population: 51201 },
    { id: 91, x: 27, y: 41, name: "Gmünd?", population: 2605 },
    { id: 92, x: 46, y: 41, name: "Břeclav", population: 25716 },
    { id: 93, x: 96, y: 41, name: "Michalovce", population: 40255 },
    { id: 94, x: 55, y: 41, name: "Nové Mesto nad Váhom", population: 20705 },
    { id: 95, x: 68, y: 41, name: "Banská Bystrica", population: 79197 }, 
    { id: 96, x: 90, y: 42, name: "Košice", population: 234596 },
    { id: 97, x: 63, y: 42, name: "Handlová", population: 17698 },
    { id: 98, x: 60, y: 42, name: "Bánovce nad Bebravou", population: 20639 },
    { id: 99, x: 94, y: 43, name: "Sečovce", population: 7945 },
    { id: 100, x: 51, y: 42, name: "Senica", population: 20860 },
    { id: 101, x: 82, y: 43, name: "Rožňava", population: 45614 },
    { id: 102, x: 68, y: 44, name: "Zvolen", population: 43006 },
    { id: 103, x: 59, y: 45, name: "Topoľčany", population: 28685 },
    { id: 104, x: 98, y: 45, name: "Veľké Kapušany", population: 9536 },
    { id: 105, x: 66, y: 47, name: "Banská Štiavnica", population: 10662 },
    { id: 106, x: 47, y: 47, name: "Malacky", population: 17847 },
    { id: 107, x: 55, y: 47, name: "Hlohovec", population: 64125 },
    { id: 108, x: 80, y: 48, name: "Šafárikovo", population: 7991 },
    { id: 109, x: 77, y: 48, name: "Rimavská Sobota", population: 24374 },
    { id: 110, x: 53, y: 48, name: "Trnava", population: 71535 },
    { id: 111, x: 50, y: 49, name: "Modra", population: 8704 },
    { id: 112, x: 74, y: 49, name: "Lučenec", population: 27790 },
    { id: 113, x: 58, y: 49, name: "Nitra", population: 84800 },
    { id: 114, x: 54, y: 50, name: "Sereď", population: 30454 },
    { id: 115, x: 67, y: 50, name: "Hontianske Nemce", population: 1520 },
    { id: 116, x: 60, y: 51, name: "Vráble", population: 9390 },
    { id: 117, x: 63, y: 52, name: "Levice", population: 35980 },
    { id: 118, x: 51, y: 52, name: "Senec", population: 15542 },
    { id: 119, x: 48, y: 53, name: "Bratislava", population: 428791 },
    { id: 120, x: 64, y: 55, name: "Želiezovce", population: 56523 },
    { id: 121, x: 50, y: 56, name: "Maďarsko? (Hungary)", population: 10 },
    { id: 122, x: 59, y: 56, name: "Nové Zámky", population: 41140 },
    { id: 123, x: 64, y: 57, name: "Kolonia?", population: 10 },
    { id: 124, x: 57, y: 58, name: "Kolárovo", population: 10747 },
    { id: 125, x: 62, y: 58, name: "Svodín", population: 2630 },
    { id: 126, x: 53, y: 58, name: "Gabčíkovo", population: 5117 },
    { id: 127, x: 55, y: 59, name: "Veľký Meder", population: 8968 },
    { id: 128, x: 2, y: 24, name: "Rozvadov", population: 821 },
    { id: 129, x: 23, y: 22, name: "Sedlčany", population: 	7713 }
  ],
  roads: [
    { from: 1, to: 2, speed: 60 },
    { from: 3, to: 5, speed: 60 },
    { from: 3, to: 8, speed: 60 },
    { from: 3, to: 10, speed: 60 },
    { from: 6, to: 12, speed: 60 },
    { from: 7, to: 12, speed: 60 },
    { from: 8, to: 18, speed: 60 },
    { from: 9, to: 15, speed: 60 },
    { from: 10, to: 11, speed: 60 },
    { from: 11, to: 17, speed: 60 },
    { from: 12, to: 14, speed: 60 },
    { from: 12, to: 16, speed: 60 },
    { from: 15, to: 36, speed: 60 },
    { from: 16, to: 20, speed: 60 },
    { from: 16, to: 22, speed: 60 },
    { from: 17, to: 25, speed: 60 },
    { from: 19, to: 40, speed: 60 },
    { from: 22, to: 25, speed: 60 },
    { from: 22, to: 27, speed: 60 },
    { from: 23, to: 25, speed: 60 },
    { from: 24, to: 29, speed: 60 },
    { from: 25, to: 30, speed: 60 },
    { from: 26, to: 27, speed: 60 },
    { from: 26, to: 33, speed: 60 },
    { from: 27, to: 31, speed: 60 },
    { from: 29, to: 42, speed: 60 },
    { from: 30, to: 31, speed: 60 },
    { from: 30, to: 35, speed: 60 },
    { from: 31, to: 34, speed: 60 },
    { from: 32, to: 37, speed: 60 },
    { from: 32, to: 41, speed: 60 },
    { from: 33, to: 38, speed: 60 },
    { from: 34, to: 43, speed: 60 },
    { from: 35, to: 39, speed: 60 },
    { from: 35, to: 46, speed: 60 },
    { from: 36, to: 40, speed: 60 },
    { from: 36, to: 54, speed: 60 },
    { from: 37, to: 41, speed: 60 },
    { from: 37, to: 44, speed: 60 },
    { from: 38, to: 43, speed: 60 },
    { from: 40, to: 52, speed: 60 },
    { from: 40, to: 58, speed: 60 },
    { from: 40, to: 129, speed: 60 },
    { from: 41, to: 44, speed: 60 },
    { from: 42, to: 52, speed: 60 },
    { from: 42, to: 53, speed: 60 },
    { from: 42, to: 129, speed: 60 },
    { from: 44, to: 47, speed: 60 },
    { from: 44, to: 51, speed: 60 },
    { from: 45, to: 47, speed: 60 },
    { from: 45, to: 49, speed: 60 },
    { from: 46, to: 48, speed: 60 },
    { from: 46, to: 56, speed: 60 },
    { from: 47, to: 49, speed: 60 },
    { from: 47, to: 65, speed: 60 },
    { from: 48, to: 49, speed: 60 },
    { from: 49, to: 61, speed: 60 },
    { from: 50, to: 54, speed: 60 },
    { from: 50, to: 128, speed: 60 },
    { from: 51, to: 67, speed: 60 },
    { from: 52, to: 63, speed: 60 },
    { from: 53, to: 55, speed: 60 },
    { from: 53, to: 66, speed: 60 },
    { from: 54, to: 64, speed: 60 },
    { from: 55, to: 46, speed: 60 },
    { from: 56, to: 59, speed: 60 },
    { from: 56, to: 68, speed: 60 },
    { from: 57, to: 62, speed: 60 },
    { from: 57, to: 69, speed: 60 },
    { from: 58, to: 63, speed: 60 },
    { from: 58, to: 64, speed: 60 },
    { from: 60, to: 62, speed: 60 },
    { from: 60, to: 77, speed: 60 },
    { from: 60, to: 78, speed: 60 },
    { from: 64, to: 80, speed: 60 },
    { from: 67, to: 74, speed: 60 },
    { from: 68, to: 75, speed: 60 },
    { from: 69, to: 81, speed: 60 },
    { from: 69, to: 84, speed: 60 },
    { from: 69, to: 84, speed: 60 },
    { from: 71, to: 80, speed: 60 },
    { from: 71, to: 91, speed: 60 },
    { from: 72, to: 73, speed: 60 },
    { from: 72, to: 90, speed: 60 },
    { from: 73, to: 90, speed: 60 },
    { from: 74, to: 76, speed: 60 },
    { from: 74, to: 89, speed: 60 },
    { from: 75, to: 85, speed: 60 },
    { from: 78, to: 82, speed: 60 },
    { from: 79, to: 84, speed: 60 },
    { from: 80, to: 91, speed: 60 },
    { from: 82, to: 101, speed: 60 },
    { from: 83, to: 87, speed: 60 },
    { from: 83, to: 88, speed: 60 },
    { from: 84, to: 86, speed: 60 },
    { from: 85, to: 90, speed: 60 },
    { from: 86, to: 93, speed: 60 },
    { from: 86, to: 99, speed: 60 },
    { from: 88, to: 91, speed: 60 },
    { from: 89, to: 95, speed: 60 },
    { from: 89, to: 101, speed: 60 },
    { from: 90, to: 95, speed: 60 },
    { from: 90, to: 97, speed: 60 },
    { from: 90, to: 98, speed: 60 },
    { from: 93, to: 99, speed: 60 },
    { from: 93, to: 104, speed: 60 },
    { from: 94, to: 98, speed: 60 },
    { from: 95, to: 102, speed: 60 },
    { from: 96, to: 99, speed: 60 },
    { from: 97, to: 98, speed: 60 },
    { from: 99, to: 104, speed: 60 },
    { from: 101, to: 96, speed: 60 },
    { from: 101, to: 108, speed: 60 },
    { from: 102, to: 105, speed: 60 },
    { from: 102, to: 112, speed: 60 },
    { from: 103, to: 105, speed: 60 },
    { from: 105, to: 115, speed: 60 },
    { from: 106, to: 111, speed: 60 },
    { from: 108, to: 109, speed: 60 },
    { from: 109, to: 112, speed: 60 },
    { from: 110, to: 111, speed: 60 },
    { from: 110, to: 114, speed: 60 },
    { from: 111, to: 118, speed: 60 },
    { from: 112, to: 115, speed: 60 },
    { from: 113, to: 114, speed: 60 },
    { from: 113, to: 116, speed: 60 },
    { from: 115, to: 117, speed: 60 },
    { from: 116, to: 117, speed: 60 },
    { from: 117, to: 120, speed: 60 },
    { from: 117, to: 122, speed: 60 },
    { from: 120, to: 123, speed: 60 },
    { from: 122, to: 124, speed: 60 },
    { from: 123, to: 125, speed: 60 },
    { from: 124, to: 125, speed: 60 },
    { from: 124, to: 126, speed: 60 },
    { from: 124, to: 127, speed: 60 },
    { from: 1, to: 3, speed: 90 },
    { from: 3, to: 4, speed: 90 },
    { from: 4, to: 8, speed: 90 },
    { from: 5, to: 7, speed: 90 },
    { from: 6, to: 7, speed: 90 },
    { from: 8, to: 9, speed: 90 },
    { from: 13, to: 14, speed: 90 },
    { from: 13, to: 17, speed: 90 },
    { from: 15, to: 18, speed: 90 },
    { from: 15, to: 21, speed: 90 },
    { from: 17, to: 23, speed: 90 },
    { from: 18, to: 19, speed: 90 },
    { from: 19, to: 24, speed: 90 },
    { from: 19, to: 129, speed: 90 },
    { from: 20, to: 26, speed: 90 },
    { from: 21, to: 36, speed: 90 },
    { from: 23, to: 24, speed: 90 },
    { from: 23, to: 29, speed: 90 },
    { from: 26, to: 28, speed: 90 },
    { from: 28, to: 32, speed: 90 },
    { from: 32, to: 33, speed: 90 },
    { from: 32, to: 45, speed: 90 },
    { from: 33, to: 34, speed: 90 },
    { from: 34, to: 39, speed: 90 },
    { from: 39, to: 42, speed: 90 },
    { from: 52, to: 70, speed: 90 },
    { from: 61, to: 65, speed: 90 },
    { from: 63, to: 71, speed: 90 },
    { from: 63, to: 80, speed: 90 },
    { from: 65, to: 75, speed: 90 },
    { from: 66, to: 68, speed: 90 },
    { from: 66, to: 70, speed: 90 },
    { from: 66, to: 88, speed: 90 },
    { from: 70, to: 71, speed: 90 },
    { from: 75, to: 87, speed: 90 },
    { from: 77, to: 78, speed: 90 },
    { from: 78, to: 81, speed: 90 },
    { from: 81, to: 86, speed: 90 },
    { from: 87, to: 92, speed: 90 },
    { from: 88, to: 92, speed: 90 },
    { from: 92, to: 100, speed: 90 },
    { from: 94, to: 100, speed: 90 },
    { from: 98, to: 103, speed: 90 },
    { from: 103, to: 107, speed: 90 },
    { from: 105, to: 116, speed: 90 },
    { from: 107, to: 110, speed: 90 },
    { from: 118, to: 116, speed: 90 },
    { from: 119, to: 118, speed: 90 },
    { from: 119, to: 121, speed: 90 },
    { from: 121, to: 126, speed: 90 },
    { from: 126, to: 127, speed: 90 },
    { from: 129, to: 52, speed: 90 },
    { from: 2, to: 5, speed: 130 },
    { from: 4, to: 19, speed: 130 },
    { from: 5, to: 10, speed: 130 },
    { from: 10, to: 19, speed: 130 },
    { from: 19, to: 17, speed: 130 },
    { from: 19, to: 36, speed: 130 },
    { from: 19, to: 68, speed: 130 },
    { from: 36, to: 128, speed: 130 },
    { from: 43, to: 45, speed: 130 },
    { from: 43, to: 48, speed: 130 },
    { from: 48, to: 59, speed: 130 },
    { from: 59, to: 61, speed: 130 },
    { from: 59, to: 68, speed: 130 },
    { from: 67, to: 85, speed: 130 },
    { from: 68, to: 92, speed: 130 },
    { from: 73, to: 76, speed: 130 },
    { from: 76, to: 77, speed: 130 },
    { from: 81, to: 96, speed: 130 },
    { from: 85, to: 110, speed: 130 },
    { from: 92, to: 119, speed: 130 },
    { from: 110, to: 119, speed: 130 }
  ]
};