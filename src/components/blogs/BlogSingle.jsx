import React from "react";
import breakfast from "../../assets/categories/breakfast.png";
import Navbar from "../navbar/Navbar";

const BlogSingle = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col m-8">
        <div className="p-10 bg-lime-900 flex flex-col items-center font-serif">
          <img src={breakfast} />
          <p className="text-6xl text-white font-bold pt-5">
            The favourite breakfast
          </p>
          <p className="text-white py-2 ">Akshit Singh</p>
          <article className="text-white text-lg">
            Bread omelette, a popular and beloved breakfast choice across many
            cultures, combines the savory flavors of eggs and the comforting
            taste of bread into one delicious dish. Easy to prepare and
            incredibly versatile, it’s a go-to meal for many who crave a quick
            yet satisfying start to their day. Beyond its convenience and taste,
            a bread omelette also offers numerous health benefits, making it an
            excellent addition to your breakfast routine. What is a Bread
            Omelette? A bread omelette typically consists of slices of bread
            soaked in a well-seasoned egg mixture, which is then cooked to
            perfection in a skillet. The basic ingredients usually include eggs,
            bread, and seasonings like salt and pepper. However, the beauty of
            this dish lies in its adaptability. You can add a variety of
            vegetables, meats, and cheeses to enhance the flavor and nutritional
            profile. Nutritional Profile Eggs: Eggs are a nutritional
            powerhouse, packed with high-quality protein, healthy fats,
            vitamins, and minerals. <br /> They are particularly rich in:
            <br />
            Protein: Essential for muscle repair and growth. Vitamin B12: Vital
            for brain health and red blood cell formation. Choline: Important
            for liver function and brain development. Bread: The type of bread
            used can affect the nutritional value. Whole grain or multigrain
            bread is a healthier option compared to white bread because it
            contains: Fiber: Aids in digestion and helps maintain steady blood
            sugar levels. Complex Carbohydrates: Provide sustained energy
            throughout the morning. Health Benefits of Bread Omelette High in
            Protein: A bread omelette is an excellent source of protein,
            especially when prepared with multiple eggs. Protein is essential
            for building and repairing tissues, and it also plays a crucial role
            in the production of enzymes and hormones. Rich in Vitamins and
            Minerals: Eggs are packed with essential nutrients such as vitamin
            A, vitamin D, vitamin B12, and selenium. These vitamins and minerals
            support immune function, bone health, and metabolic processes.
            Satiety and Weight Management: The combination of protein and fiber
            in a bread omelette helps you feel full for longer, reducing the
            likelihood of mid-morning snacking and helping in weight management.
            Versatile and Customizable: You can enhance the nutritional value by
            adding vegetables like spinach, tomatoes, bell peppers, and onions.
            These additions provide extra vitamins, minerals, and antioxidants,
            contributing to overall health and wellness. Balanced Meal: A bread
            omelette offers a good balance of macronutrients – proteins, fats,
            and carbohydrates – making it a well-rounded meal that provides the
            energy needed to kickstart your day.
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
