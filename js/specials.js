var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function getDate(){
  return new Date().getDay();
}
switch (getDate()) {
  case 0:
    day = days[0];
    document.getElementById("specialName").innerHTML = "Fire Baked Smoked Mac and Cheese"
    document.getElementById("specialPrice").innerHTML = "9.99"
    document.getElementById("specialDesc").innerHTML = "Using a assortment of smoked cheeses and macaroni pasta along with a multitude of spices, this mac and cheese will be the best you ever had"
    document.getElementById("specialName2").innerHTML = "The Hellfire"
    document.getElementById("specialPrice2").innerHTML = "12.99"
    document.getElementById("specialDesc2").innerHTML = "WARNING: This product has been known to turn your face lava red. This 4 cheese pizza is made with an infused hot sauce and tomato sauce topped with spicy peppers and spices to make your mouth beg for mercy"
    document.getElementById("specialName3").innerHTML = "Pit of Lava"
    document.getElementById("specialPrice3").innerHTML = "15.99"
    document.getElementById("specialDesc3").innerHTML = "This red vodka sauce pasta dish comes complete with Lobster, Fettuccine Noodles, Shrimp combined with our signature herbs and spices and topped off with our signature hot sauce"
    break;
  case 1:
    day = days[1];
    document.getElementById("specialName").innerHTML = "Hellfire's Famous Stuffed Chrust"
    document.getElementById("specialPrice").innerHTML = "16.99"
    document.getElementById("specialDesc").innerHTML = "This popular favorite among customers is a cheese lovers dream. Made with our specialized dough and an assortment of smoked cheeses, this ring of cheesy goodness can not be passed up "
    document.getElementById("specialName2").innerHTML = "Fisherman's Pizza"
    document.getElementById("specialPrice2").innerHTML = "13.99"
    document.getElementById("specialDesc2").innerHTML = "Topped with Lobster, Shrimp, Chopped Tomatoes and Basil and 4 cheeses. Our Favortie for Seafood Lovers"
    document.getElementById("specialName3").innerHTML = "Hellfire Spaghetti"
    document.getElementById("specialPrice3").innerHTML = "16.99"
    document.getElementById("specialDesc3").innerHTML = "Spaghetti Noodles topped with a vodka sauce and complete with paramsean and meatballs"
    break;

  case 2:
    day = days[2];
    document.getElementById("specialName").innerHTML = "Lenny's Lasagne"
    document.getElementById("specialPrice").innerHTML = "18.99"
    document.getElementById("specialDesc").innerHTML = "Lenny Marino was a friend of Hellfire Pizza who's famous Lasagne is well known amongst friends. Incorporating his 6 cheese blend and special vodka sauce creates a delicious dish "
    document.getElementById("specialName2").innerHTML = "El Fuego Del Infierno"
    document.getElementById("specialPrice2").innerHTML = "16.99"
    document.getElementById("specialDesc2").innerHTML = "This mexican styled pizza consists of tortillas, enchilada sauce, tomatoes, black beans, scallions and a mexican cheese blend "
    document.getElementById("specialName3").innerHTML = "Classic Calzone"
    document.getElementById("specialPrice3").innerHTML = "11.99"
    document.getElementById("specialDesc3").innerHTML = "Bread dough folded over meat, cheese and vegetables and baked to a crisp"
    break;

  case 3:
    day = days[3];
    document.getElementById("specialName").innerHTML = "The Sicilian Special"
    document.getElementById("specialPrice").innerHTML = "12.99"
    document.getElementById("specialDesc").innerHTML = "This pie from the homeland incorporates all of the sicilian features. Thick crust, tomato sauce and cheese"
    document.getElementById("specialName2").innerHTML = "Bagel with A Side of Pizza"
    document.getElementById("specialPrice2").innerHTML = "9.99"
    document.getElementById("specialDesc2").innerHTML = "This New York style bagel is baked fresh every morning and topped with tomato sauce, cheese and pepperoni baked on bagel halves"
    document.getElementById("specialName3").innerHTML = "La Pizza Française"
    document.getElementById("specialPrice3").innerHTML = "13.99"
    document.getElementById("specialDesc3").innerHTML = "This French signature pizza is one of our most beloved. Set on a french loaf sliced lengthwise includes tomato sauce, cheese and pepperoni"
    break;

  case 4:
    day = days[4];
    document.getElementById("specialName").innerHTML = "Chi-Town Special"
    document.getElementById("specialPrice").innerHTML = "15.99"
    document.getElementById("specialDesc").innerHTML = "This well known style is coming out of Chicago and has been a classic since its inception. Known for its crispy deep dish crust, topped with cheese and fresh tomato sauce"
    document.getElementById("specialName2").innerHTML = "Baby Baked Ziti"
    document.getElementById("specialPrice2").innerHTML = "14.99"
    document.getElementById("specialDesc2").innerHTML = "These small bite size slices are a new take on an old favorite. Slices topped with ziti, tomato sauce, ricotta and mozzarella"
    document.getElementById("specialName3").innerHTML = "The Gold Coast Pie"
    document.getElementById("specialPrice3").innerHTML = "35.99"
    document.getElementById("specialDesc3").innerHTML = "This pizza is only for the one's that have a more refined taste. Made with Crème fraîche, smoked salmon, black caviar, red onion and dill"
    break;

  case 5:
    day = days[5];
    document.getElementById("specialName").innerHTML = "It's So Cold In The D"
    document.getElementById("specialPrice").innerHTML = "15.99"
    document.getElementById("specialDesc").innerHTML = "This square pizza with a deep-dish crust and marinara sauce sometimes served on top. The crust is usually baked in a well-oiled pan to develop caramelized crunchy edges"
    document.getElementById("specialName2").innerHTML = "Tomato Pie Pizza"
    document.getElementById("specialPrice2").innerHTML = "12.99"
    document.getElementById("specialDesc2").innerHTML = "The tomato pie is a type of pizza created in the early 1900s by Italian-Americans. Unlike the New York Style pizza, where cheese and toppings are placed on top of the sauce, in the tomato pie, the cheese and toppings are placed under the tomato sauce. "
    document.getElementById("specialName3").innerHTML = "The Imo Special "
    document.getElementById("specialPrice3").innerHTML = "16.99"
    document.getElementById("specialDesc3").innerHTML = "The pizza has a thin cracker-like crust, made without yeast, and is topped with Provel cheese, rather than mozzarella"
    break;

  case 6:
    day = days[6];
    document.getElementById("specialName").innerHTML = "New England Greek"
    document.getElementById("specialPrice").innerHTML = "17.99"
    document.getElementById("specialDesc").innerHTML = "The pizza crust lies in between the crunchy New York style pizza and its thicker Sicilian cousin and it is baked in a heavily greased cake or cast iron pan, which results in a thick golden, crunchy crust."
    document.getElementById("specialName2").innerHTML = "I'm Trying To Be Healthy"
    document.getElementById("specialPrice2").innerHTML = "18.99"
    document.getElementById("specialDesc2").innerHTML = "This healthy alternative to anything on this menu. This pizza includes romaine, cucumbers, tomatoes, feta, olives, Greek dressing"
    document.getElementById("specialName3").innerHTML = "Cauliflower Crust"
    document.getElementById("specialPrice3").innerHTML = "12.99"
    document.getElementById("specialDesc3").innerHTML = "This pizza is for cauliflower lovers. This pizza consists of cooked cauliflower mixed with egg and cheese, baked and topped and baked again."
    break;

  default:
    day = "I don’t know what day it is.";
}
