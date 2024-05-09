import p1_img from "../Assets/featuredd1.png";
import p2_img from "../Assets/featuredd2.png";
import p3_img from "../Assets/featured4.png";
import p4_img from "../Assets/women1.png";
import p5_img from "../Assets/women2.png";
import p6_img from "../Assets/women3.png";
import p7_img from "../Assets/women4.png";
import p8_img from "../Assets/women5.png";
import p9_img from "../Assets/women6.png";
import p10_img from "../Assets/women7.png";
import p11_img from "../Assets/women8.png";
import p12_img from "../Assets/women9.png";
import p13_img from "../Assets/men1.png";
import p14_img from "../Assets/men2.png";
import p15_img from "../Assets/men3.png";
import p16_img from "../Assets/men4.png";
import p17_img from "../Assets/men5.png";
import p18_img from "../Assets/men6.png";
import p19_img from "../Assets/men7.png";
import p20_img from "../Assets/men8.png";
import p21_img from "../Assets/men9.png";
import p22_img from "../Assets/men10.png";
import p23_img from "../Assets/men11.png";
import p24_img from "../Assets/men12.png";
import p25_img from "../Assets/kids1.png";
import p26_img from "../Assets/kids2.png";
import p27_img from "../Assets/kids3.png";
import p28_img from "../Assets/kids4.png";
import p29_img from "../Assets/kids5.png";
import p30_img from "../Assets/kids6.png";
import p31_img from "../Assets/kids7.png";
import p32_img from "../Assets/kids8.png";
import p33_img from "../Assets/kids9.png";
import p34_img from "../Assets/kids10.png";
import p35_img from "../Assets/kids11.png";
import p36_img from "../Assets/kids12.png";
import offer from "../Assets/offer1.jpg"
import offer1 from "../Assets/offer2.jpg"
import offer2 from "../Assets/offer3.jpg"

let all_product = [
  {
    id: 1,
    name: "Women Short-Sleeve Top",
    category: "women",
    image: p1_img,
    new_price: 22,
    old_price: 30,
  },
  {
    id: 2,
    name: "Nike SB Force 58",
    category: "women",
    image: p2_img,
    new_price: 70,
    old_price: 87.5,
  },
  {
    id: 3,
    name: "Women's Slim Knit Dress",
    category: "women",
    image: p3_img,
    new_price: 40,
    old_price: 52,
  },
  {
    id: 4,
    name: "Court Vision Alta",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Nike GO FlyEase",
    category: "women",
    image: p5_img,
    new_price: 135.0,
    old_price: 145.0,
  },
  {
    id: 6,
    name: "Women's T-shirt",
    category: "women",
    image: p6_img,
    new_price: 30,
    old_price: 37,
  },
  {
    id: 7,
    name: "Dri Fit Cropped Tank Top",
    category: "women",
    image: p7_img,
    new_price: 20,
    old_price: 24,
  },
  {
    id: 8,
    name: "Duffle Bag(Leather)",
    category: "women",
    image: p8_img,
    new_price: 100,
    old_price: 115,
  },
  {
    id: 9,
    name: "Dunk Low Premium",
    category: "women",
    image: p9_img,
    new_price: 95,
    old_price: 115,
  },
  {
    id: 10,
    name: "Blazer Low '77 Jumbo",
    category: "women",
    image: p10_img,
    new_price: 75,
    old_price: 87.5,
  },
  {
    id: 11,
    name: "MC Trainer Workout Shoes",
    category: "women",
    image: p11_img,
    new_price: 71,
    old_price: 86.25,
  },
  {
    id: 12,
    name: "Women's Peach T-shirt",
    category: "women",
    image: p12_img,
    new_price: 22,
    old_price: 27,
  },
  {
    id: 13,
    name: "Jumpman MVP Basketball Shoes",
    category: "men",
    image: p13_img,
    new_price: 200,
    old_price: 220,
  },
  {
    id: 14,
    name: "Nike Air Monarch IV",
    category: "men",
    image: p14_img,
    new_price: 68,
    old_price: 74.5,
  },
  {
    id: 15,
    name: "Nike Jordan Varsity Jacket",
    category: "men",
    image: p15_img,
    new_price: 750,
    old_price: 770,
  },
  {
    id: 16,
    name: "Nike Killshot 2 Leather",
    category: "men",
    image: p16_img,
    new_price: 120,
    old_price: 132.5,
  },
  {
    id: 17,
    name: "Nike Lightweight Fleece Trousers",
    category: "men",
    image: p17_img,
    new_price: 50,
    old_price: 55.25,
  },
  {
    id: 18,
    name: "Nike Metcon 9",
    category: "men",
    image: p18_img,
    new_price: 110,
    old_price: 123,
  },
  {
    id: 19,
    name: "Nike Backpack (26L)",
    category: "men",
    image: p19_img,
    new_price: 71.0,
    old_price: 84.5,
  },
  {
    id: 20,
    name: "Nike Jordan Rise Hat",
    category: "men",
    image: p20_img,
    new_price: 20.0,
    old_price: 24.0,
  },
  {
    id: 21,
    name: "Nike Dri-Fit ADV Football Jersey",
    category: "men",
    image: p21_img,
    new_price: 100,
    old_price: 112.5,
  },
  {
    id: 22,
    name: "Jordan 1 Mid SE",
    category: "men",
    image: p22_img,
    new_price: 220,
    old_price: 250,
  },
  {
    id: 23,
    name: "Nike Air Max Plus OG",
    category: "men",
    image: p23_img,
    new_price: 190,
    old_price: 210.5,
  },
  {
    id: 24,
    name: "Nike Air Force 1 '07",
    category: "men",
    image: p24_img,
    new_price: 170,
    old_price: 195.5,
  },
  {
    id: 25,
    name: "Baby Jordan 1 Mid SE",
    category: "kid",
    image: p25_img,
    new_price: 52,
    old_price: 57,
  },
  {
    id: 26,
    name: "Nike Cortez Basic SL",
    category: "kid",
    image: p26_img,
    new_price: 50,
    old_price: 53.5,
  },
  {
    id: 27,
    name: "Nike Court Borough Low Recraft",
    category: "kid",
    image: p27_img,
    new_price: 37,
    old_price: 42.25,
  },
  {
    id: 28,
    name: "Nike Dri-Fit T-shirt for Kids",
    category: "kid",
    image: p28_img,
    new_price: 14.0,
    old_price: 18.5,
  },
  {
    id: 29,
    name: "Air Jordan 1 Mid",
    category: "kid",
    image: p29_img,
    new_price: 100,
    old_price: 112.5,
  },
  {
    id: 30,
    name: "Nike French Terry Full-Zip Hoodie",
    category: "kid",
    image: p30_img,
    new_price: 32.0,
    old_price: 35.0,
  },
  {
    id: 31,
    name: "Nike Jordan 1 Mid ALT",
    category: "kid",
    image: p31_img,
    new_price: 52.5,
    old_price: 58,
  },
  {
    id: 32,
    name: "Nike Air Jordan 1 Mid SE",
    category: "kid",
    image: p32_img,
    new_price: 120,
    old_price: 135.5,
  },
  {
    id: 33,
    name: "Nike Girls Cropped T-shirt",
    category: "kid",
    image: p33_img,
    new_price: 14.0,
    old_price: 15.5,
  },
  {
    id: 34,
    name: "Nike Kawa SE",
    category: "kid",
    image: p34_img,
    new_price: 17.0,
    old_price: 21.5,
  },
  {
    id: 35,
    name: "Nike Team Hustle D 11",
    category: "kid",
    image: p35_img,
    new_price: 62,
    old_price: 75.5,
  },
  {
    id: 36,
    name: "Nike Girls Loose Jacket",
    category: "kid",
    image: p36_img,
    new_price: 48.0,
    old_price: 52.5,
  },
  {
    id: 37,
    name: "Nike Invincible 3",
    category: "men",
    image: offer,
    new_price: 48.0,
    old_price: 52.5,
  },
  {
    id: 38,
    name: "nike top",
    category: "women",
    image: offer1,
    new_price: 48.0,
    old_price: 52.5,
  },
  {
    id: 39,
    name: "nike ACG",
    category: "men",
    image: offer2,
    new_price: 48.0,
    old_price: 52.5,
  },

];

export default all_product;
