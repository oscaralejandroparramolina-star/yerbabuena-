/* ============================================================
   YERBABUENA — datos del menú y utilidades (compartido)
   ------------------------------------------------------------
   Reemplazar por los datos reales del restaurante:
   - WHATSAPP: indicativo + número, sin signos. Ej: 573001234567
   - Las fotos son de stock (Unsplash). Cambia cada id en PIC o el
     campo "pic" de cada plato por una foto real del restaurante.
   ============================================================ */
var WHATSAPP = "57XXXXXXXXXX";
var MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Carrera 6 #9-81, Barrio Belén, Ibagué, Colombia");

function img(id, w){ return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w || 900) + "&q=70"; }
function money(n){ return "$" + n.toLocaleString("es-CO"); }
function wa(t){ return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t); }

var PIC = {
  plate:"1504674900247-0877df9cc836", fine:"1559339352-11d035aa65de", plating:"1559847844-5315695dadae",
  pasta:"1473093295043-cdd812d0e601", penne:"1563379926898-05f4575a45d8", burger:"1568901346375-23c9450c58cd",
  burger2:"1565299624946-b28f40a0ae38", bowl:"1546069901-ba9599a7e63c", salad:"1540189549336-e6e99c3679fe",
  seafood:"1476224203421-9ac39bcb3327", salmon:"1467003909585-2f8a72700288", dessert:"1551024601-bec78aea704b",
  cake:"1514362545857-3bc16c4c7d1b", flatlay:"1551218808-94e220e084d2", coffee:"1466978913421-dad2ebd01d17",
  drink:"1544145945-f90425340c7e", interior:"1414235077428-338989a2e8c0", interior2:"1517248135467-4c7edcad34c4",
  table:"1432139555190-58524dae6a55", board:"1600891964092-4316c288032e"
};

var CATS = ["Entradas","Platos principales","Hamburguesas","Pastas","Postres","Bebidas"];
var CLS  = ["e","p","h","pa","po","b"];
var CAT_SUB = [
  "Para empezar y compartir en la mesa.",
  "Lo mejor de la cocina tolimense, con acompañamiento del día.",
  "Pan artesanal y producto fresco, con papas criollas.",
  "Pastas de la casa con un toque de nuestra tierra.",
  "El final dulce, de recetas colombianas.",
  "Naturales, de origen y bien frías."
];

var D = [
 {c:0,n:"Empanadas de pipián",p:18000,pic:"flatlay",d:"Masa crocante de maíz rellena de papa criolla y pipián.",l:"Tres empanadas doradas al momento, rellenas de papa criolla guisada con pipián, servidas con ají de maní y limón.",i:["Maíz","Papa criolla","Pipián","Ají de maní"]},
 {c:0,n:"Tostones con hogao",p:20000,pic:"plate",t:"Popular",d:"Plátano verde frito con hogao casero y queso costeño.",l:"Plátano verde frito dos veces, coronado con hogao de tomate y cebolla larga y queso costeño rallado.",i:["Plátano verde","Hogao","Queso costeño"]},
 {c:0,n:"Ceviche de mango biche",p:34000,pic:"seafood",t:"Nuevo",d:"Camarón, mango biche, cilantro y limón.",l:"Camarón cocido en limón con mango biche, cebolla morada, cilantro y un toque de ají dulce.",i:["Camarón","Mango biche","Cilantro","Limón"]},
 {c:0,n:"Crema de ahuyama",p:19000,pic:"salad",d:"Ahuyama asada, leche de coco y aceite de hierbabuena.",l:"Crema sedosa de ahuyama asada con leche de coco, terminada con aceite de hierbabuena y semillas tostadas.",i:["Ahuyama","Leche de coco","Hierbabuena"]},
 {c:1,n:"Lechona tolimense",p:42000,pic:"fine",t:"Especialidad",esp:1,d:"Cerdo y arroz arvejado horneados lentamente.",l:"Cerdo horneado por horas con arroz arvejado y especias, servido con arepa y encurtido de la casa.",i:["Cerdo","Arroz","Arveja","Arepa"]},
 {c:1,n:"Tamal tolimense",p:28000,pic:"board",t:"Especialidad",esp:1,d:"Masa de maíz, cerdo, pollo y verduras en hoja de plátano.",l:"El clásico del Tolima: masa de maíz con cerdo, pollo, arroz y verduras, cocido lentamente en hoja de plátano.",i:["Maíz","Cerdo","Pollo","Hoja de plátano"]},
 {c:1,n:"Bandeja Yerbabuena",p:46000,pic:"plating",t:"Popular",d:"Lomo, chorizo, chicharrón, huevo, frijoles y arepa.",l:"Nuestra versión de la bandeja: lomo de res, chorizo, chicharrón, huevo, frijoles, arroz, plátano maduro y arepa.",i:["Lomo de res","Chorizo","Chicharrón","Frijoles"]},
 {c:1,n:"Trucha al ajillo",p:44000,pic:"salmon",t:"Especialidad",esp:1,d:"Trucha entera, mantequilla de ajo y arroz con coco.",l:"Trucha entera en mantequilla de ajo, con arroz con coco, patacón y ensalada fresca.",i:["Trucha","Ajo","Arroz con coco","Limón"]},
 {c:2,n:"Hamburguesa de lechona",p:36000,pic:"burger",t:"Nuevo",d:"Lechona desmechada, queso y salsa de ají dulce.",l:"Pan brioche con lechona desmechada, queso doble crema, cebolla encurtida y salsa de ají dulce. Con papas criollas.",i:["Pan brioche","Lechona","Queso","Ají dulce"]},
 {c:2,n:"Clásica de res",p:32000,pic:"burger2",d:"Carne de res 180 g, queso, lechuga y tomate.",l:"Carne de res de 180 g a la plancha, queso cheddar, lechuga, tomate y salsa de la casa.",i:["Res 180 g","Cheddar","Lechuga","Tomate"]},
 {c:2,n:"Hamburguesa de hongos",p:30000,pic:"burger",d:"Portobello asado, queso y pesto de hierbabuena.",l:"Portobello asado con queso fresco, rúgula y pesto de hierbabuena. Versión vegetariana.",i:["Portobello","Queso fresco","Rúgula","Pesto"]},
 {c:2,n:"Pollo crocante",p:31000,pic:"burger2",d:"Pechuga apanada, repollo y mayonesa de ají.",l:"Pechuga apanada con panko, repollo morado, pepinillos y mayonesa de ají.",i:["Pechuga","Panko","Repollo","Mayonesa de ají"]},
 {c:3,n:"Pasta al pesto de yerbabuena",p:34000,pic:"pasta",t:"Popular",d:"Fettuccine, pesto fresco, queso y nueces.",l:"Fettuccine con pesto de hierbabuena y albahaca, queso parmesano y nueces tostadas.",i:["Fettuccine","Hierbabuena","Albahaca","Nueces"]},
 {c:3,n:"Lasaña criolla",p:38000,pic:"pasta",d:"Carne desmechada, hogao y queso de la región.",l:"Capas de pasta, carne desmechada guisada con hogao, salsa blanca y queso gratinado.",i:["Pasta","Carne desmechada","Hogao","Queso"]},
 {c:3,n:"Penne al lomo",p:40000,pic:"penne",d:"Penne con tiras de lomo y salsa de champiñones.",l:"Penne con tiras de lomo fino salteadas, champiñones y crema ligera con pimienta verde.",i:["Penne","Lomo fino","Champiñones","Crema"]},
 {c:3,n:"Spaghetti de camarones",p:42000,pic:"seafood",d:"Camarones al ajillo, tomate cherry y albahaca.",l:"Spaghetti con camarones salteados al ajillo, tomate cherry, albahaca y un toque de ají.",i:["Spaghetti","Camarón","Tomate cherry","Albahaca"]},
 {c:4,n:"Tres leches de maracuyá",p:16000,pic:"cake",t:"Popular",d:"Bizcocho húmedo, crema ligera y maracuyá.",l:"Bizcocho bañado en tres leches con crema ligera y coulis de maracuyá fresco.",i:["Bizcocho","Tres leches","Maracuyá"]},
 {c:4,n:"Brevas con arequipe",p:15000,pic:"dessert",d:"Brevas en almíbar, arequipe artesanal y queso.",l:"Brevas en almíbar de panela acompañadas de arequipe artesanal y queso fresco.",i:["Brevas","Arequipe","Queso fresco"]},
 {c:4,n:"Volcán de cacao",p:19000,pic:"plating",t:"Nuevo",d:"Chocolate tibio con centro fluido y helado.",l:"Volcán de cacao colombiano con centro fluido, helado de vainilla y frutos rojos.",i:["Cacao","Vainilla","Frutos rojos"]},
 {c:4,n:"Helado de café del Tolima",p:14000,pic:"dessert",d:"Dos bolas de helado de café de origen.",l:"Helado artesanal hecho con café del Tolima y crocante de panela.",i:["Café","Leche","Panela"]},
 {c:5,n:"Limonada de hierbabuena",p:11000,pic:"drink",t:"Popular",d:"Limón, hierbabuena fresca y hielo.",l:"Limonada natural con hierbabuena recién macerada. Disponible con coco.",i:["Limón","Hierbabuena","Hielo"]},
 {c:5,n:"Jugos naturales",p:10000,pic:"drink",d:"Lulo, mora, maracuyá o mango.",l:"Jugos hechos al momento con fruta fresca, en agua o en leche.",i:["Lulo","Mora","Maracuyá","Mango"]},
 {c:5,n:"Café del Tolima",p:7000,pic:"coffee",d:"Café de origen en prensa francesa.",l:"Café de la región preparado en prensa francesa. Pregunta por el origen del día.",i:["Café de origen","Agua filtrada"]},
 {c:5,n:"Cerveza artesanal",p:14000,pic:"drink",d:"Referencias del día, bien frías.",l:"Selección de cervezas artesanales colombianas. Pregunta por las referencias del día.",i:["Cebada","Lúpulo"]}
];
